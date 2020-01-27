module.exports = {
  async dispatch(name, input) {
    const payload = JSON.parse(input);
    const { id } = await this.post(`/api/${name}/dispatch`, payload);
    return id;
  },
  async sendEvent(id, name, data) {
    const payload = {
      name,
      data: JSON.parse(data)
    };

    await this.post(`/api/${id}/event`, payload);
  },
  post(url, payload) {
    return fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(response => {
      return response.json();
    });
  }
};
