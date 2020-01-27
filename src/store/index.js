import Vue from "vue";
import Vuex from "vuex";

import { default_workflow, workflows } from "../config";
import Api from "../services/zenaton";

Vue.use(Vuex);

const getInputByWorkflowName = name => {
  return workflows.find(w => w.name === name)["input"];
};
const getEventByWorkflowName = name => {
  return workflows.find(w => w.name === name)["event"];
};
const default_event = getEventByWorkflowName(default_workflow);

export default new Vuex.Store({
  state: {
    workflow: {
      name: default_workflow,
      input: JSON.stringify(getInputByWorkflowName(default_workflow), null, 2)
    },
    event: {
      name: default_event.name || "",
      data:
        (default_event.data && JSON.stringify(default_event.data, null, 2)) ||
        ""
    },
    logs: {
      workflow: [],
      event: []
    },
    workflow_instances: [],
    workflow_selection: null
  },
  mutations: {
    updateWorkflowName(state, name) {
      state.workflow.name = name;
    },
    updateWorkflowInput(state, input) {
      state.workflow.input = input;
    },
    updateEventName(state, name) {
      state.event.name = name;
    },
    updateEventData(state, data) {
      state.event.data = data;
    },
    addLog(state, { logtype, log }) {
      state.logs[logtype] = [...state.logs[logtype], log];
    },
    addWorkflowInstance(state, instance) {
      state.workflow_instances = [...state.workflow_instances, instance];
    },
    selectWorkflowId(state, workflowId) {
      state.workflow_selection = workflowId;
    }
  },
  actions: {
    updateWorkflowName({ commit }, name) {
      commit("updateWorkflowName", name);
      const input = JSON.stringify(getInputByWorkflowName(name), null, 2);
      const eventRaw = getEventByWorkflowName(name);
      const event = {
        name: eventRaw.name,
        data: JSON.stringify(eventRaw.data, null, 2)
      };
      commit("updateWorkflowInput", input);
      commit("updateEventName", event.name);
      commit("updateEventData", event.data);
      commit("selectWorkflowId", "");
    },
    updateWorkflowInput({ commit }, input) {
      commit("updateWorkflowInput", input);
    },
    updateEventName({ commit }, name) {
      commit("updateEventName", name);
    },
    updateEventData({ commit }, data) {
      commit("updateEventData", data);
    },
    selectWorkflowId({ commit }, data) {
      commit("selectWorkflowId", data);
    },
    async dispatchWorkflow({ commit }, { name, input }) {
      console.log("dispatchWorkflow", name, input);

      const id = await Api.dispatch(name, input);
      commit("addLog", {
        logtype: "workflow",
        log: `<span class="text-gray-600">[${new Date().toISOString()}]</span> Dispatch <span class="text-yellow-400">${name}</span> with id <span class="text-green-400">${id}</span>`
      });

      commit("addWorkflowInstance", { name, id });
    },
    async sendEvent(context, { event, workflow_selection }) {
      console.log("sendEvent", workflow_selection, event);

      await Api.sendEvent(workflow_selection, event.name, event.data);

      context.commit("addLog", {
        logtype: "event",
        log: `<span class="text-gray-600">[${new Date().toISOString()}]</span> Send event <span class="text-blue-400">${
          event.name
        }</span> to workflow <span class="text-yellow-400">${
          context.state.workflow.name
        }</span> with id <span class="text-green-400">${workflow_selection}</span>`
      });
    }
  },
  modules: {}
});
