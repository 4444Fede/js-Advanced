const globalVar = "This is a global variable";

function outerFunction(paramVar) {
  const functionVar = "This is a function-scoped variable";

  for (let i = 0; i < paramVar; i++) {
    const blockVar = "This is a block-scoped variable";

    function innerFunction() {
      const modifiedGlobalVar = `${globalVar} (modified ${i})`;
      const modifiedFunctionVar = `${functionVar} (modified ${i})`;
      const modifiedBlockVar = `${blockVar} (modified ${i})`;

      console.log(modifiedGlobalVar);
      console.log(modifiedFunctionVar);
      console.log(modifiedBlockVar);
    }

    innerFunction();
  }
}

outerFunction(3);
