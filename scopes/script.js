const globalVar = `This is a global variable`

function exampleFunction() {
    const functionVar = "This is a function-scoped variable";

    if (functionVar) {
        const blockVar = "This is a block-scoped variable";
        console.log(blockVar); 
    }

    console.log(functionVar); 
}

exampleFunction();
