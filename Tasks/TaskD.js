module.exports.handle = async function() {
  console.log("Task D starts");

  await new Promise(resolve => {
    setTimeout(resolve, 9000);
  });

  console.log("Task D ends");

  return 3;
};
