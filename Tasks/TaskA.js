module.exports.handle = async function() {
  console.log("Task A starts");

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  console.log("Task A ends");

  return 0;
};
