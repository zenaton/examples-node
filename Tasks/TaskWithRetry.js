module.exports.handle = async function() {
  console.log("TaskWithRetry starts");

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  throw new Error("Error in TaskWithRetry");

  console.log("TaskWithRetry ends");

  return 0;
};

module.exports.onErrorRetryDelay = function(error) {
  // The retry index starts at 1 and increases by one for every retry.
  // This can be used to to increase the time between each attempt.
  const n = this.context.retryIndex;
  if (n > 3) {
    return false;
  }

  return n * 5;
};
