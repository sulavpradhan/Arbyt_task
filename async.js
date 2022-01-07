// const address = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((user) => {
//     return user.username;
//   });

// const function1 = async ()=>{
//      const data = await address;
//     //  return(data)
//     console.log(data)
     
// }
// const function2 = ()=>{
//    return("this is function 2")
// }

// function1()
// // for (index in user){
// //     console.log(user[index].username)
// // }
// // let type = typeof(user)
// // console.log(typeof(user.PromiseResult))
// // console.log(users)
// console.log("this is from main")
// console.log(function2())
// const address = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((user) => {
//     return user;
//   })

// const printAddress = async () => {
//   const a = await address;
//   return(a[0].username);
// };

// console.log(printAddress());
// api id 5d3cfaf81943039b5f9905f4a64eee89
// var x = document.getElementById("demo");
// var longitude, latitude
// function getLocation() {
//   if (navigator.geolocation) //navigator.geolocation asks for permission and returns ture if allowed 
//   {
//     navigator.geolocation.getCurrentPosition(showPosition); //getCurrentPosition takes one callback function as madatory argument
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   latitude = position.coords.latitude
//   longitude = position.coords.longitude;
//   console.log(latitude,longitude)
// }
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude);
}