let argsArray = [4, 5, 6, 7];

const restTest = (...moreArgs) => {
  console.log(moreArgs);
};

restTest("boy", "man", "dentist", "architect");
