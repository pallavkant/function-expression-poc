let funcExpMmessage = 'Function expression called.'
let noFuncExpMmessage = 'No Function expression called.'

console.log(this.toString());

let functionExpression = function (funcExpMmessage){
    document.getElementById("heading").textContent = funcExpMmessage;
}
//You can toggle between the two lines below to comment/uncomment function expression vs no function expression.
functionExpression('Output is : ' + funcExpMmessage);
//noFunctionExpression('Output is : ' + noFuncExpMmessage);

function noFunctionExpression(noFuncExpMmessage){
    document.getElementById("heading").textContent = noFuncExpMmessage;
}
