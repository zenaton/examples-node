module.exports.handle = async counter => {
  console.log(counter);

  await new Promise(resolve => {
    setTimeout(resolve, 100);
  });
};
