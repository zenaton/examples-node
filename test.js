var Zenaton = require('zenaton');

// var _ = require('lodash');
//
// done = function (e, r) {
//     console.log(r);
// }
//
// var instance = null;
// class TaskManager {
//     constructor() {
//         if (instance) { return instance;}
//         instance = this;
//
//         this.tasks = {};
//     }
//
//     setTask(task) {
//         this.tasks[task.name] = task;
//     }
//
//     getTaskByName(name) {
//         return this.tasks[name];
//     }
// }
//
// function Task(name, handle) {
//
//     var task = class {
//         constructor(data) {
//             var that = this;
//
//             let promise = new Promise(function (resolve, reject) {
//                 let binded = handle.bind(that);
//                 binded(function (err, data) {
//                     if (err) return reject(err)
//                     resolve(data)
//                 })
//             });
//
//             async function syncHandle() {
//                 try {
//                     const result = await promise;
//                     // Ici "aPromise" est résolue avec la valeur "result"
//                   } catch (err) {
//                     // Ici "aPromise" est rejetée avec l'erreur "err"
//                   }
//
//                   return result; // cette ligne n'est atteinte qu'après résolution/rejet
//             };
//
//             this.name = name;
//             this.data = data
//             this.handle = function () {
//                 return new Promise(function (resolve, reject) {
//                     let binded = handle.bind(that);
//                     binded(function (err, data) {
//                         if (err) return reject(err)
//                         resolve(data)
//                     })
//                 });
//             };
//             this.execute = syncHandle;
//         }
//     };
//
//     const taskManager = new TaskManager();
//     taskManager.setTask(task);
//
//     return task;
// }
//
// var b = Task('BookCar',  function(done) {
//     console.log('Reserving car for trip ID: ' + this.data);
//     setTimeout(function(){
//         var car_id = '1547826842785';
//         done(null, car_id);
//     }, 2 * 1000);
// });
//
// var c1 = new b(1);
// var c2 = new b(2);
//
// console.log(c1.execute());
// console.log(c2.execute());
