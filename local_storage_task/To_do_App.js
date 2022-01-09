const submission = ()=>{
var x = document.forms["ToDoForm"]["e-mail"].value
console.log("the name is: ",x)
window.localStorage.setItem('user', x);

}

