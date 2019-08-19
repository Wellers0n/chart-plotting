// export function getStart(setData) {
//   const startData = setData.filter((f, i) => f.type === "start");
//   const startTime = startData[0].timestamp;
//   return startTime;
// }

// export function getStop(setData) {
//   const stopData = setData.filter((f, i) => f.type === "stop");
//   const stopTime = stopData[0].timestamp;
//   return stopTime;
// }

export default data => {
//   const startPromise = new Promise((resolve, reject) => {
//     window.setTimeout(function() {
//       const startData = data().filter((f, i) => f.type === "start");
//       const startTime = startData[0].timestamp;
//       return resolve(startTime);
//     }, 500);
//   });

//   const endPromise = new Promise((resolve, reject) => {
//     window.setTimeout(function() {
//       const endData = data().filter((f, i) => f.type === "stop");
//       const endTime = endData[0].timestamp;
//       return resolve(endTime);
//     }, 500);
//   });

//   return Promise.all([getStart, getStop]).then(function(values) {
//     return values;
//   });

const stopData = data().filter((f, i) => f.type === "stop");
const stopTime = stopData[0].timestamp;

const startData = data().filter((f, i) => f.type === "start");
const startTime = startData[0].timestamp;

 return data(startTime ,stopTime);
    

};
