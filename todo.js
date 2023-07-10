
// document.getElementById // and getElementsBy...

let inputVar = document.querySelector(".input");
let btn = document.querySelector(".addTaskBtn");
let taskList = document.querySelector(".tasks");
let liOne = document.querySelectorAll('li');
// // HTMLElement

//DOM manipulation


liOne.addEventListener('click', (el) => {
    document.body.style.backgroundColor="yellow";
    el.target.style.fontSize="200px";
});

liOne.forEach(ele => {
    ele.addEventListener('click', () => {
    ele.style.backgroundColor="yellow";
    // ele.target.style.fontSize="20px";
    // alert("sa");
    });
});

liOne.forEach(() => {
    taskList.addEventListener('click', (el) => {
    el.preventDefault();
    el.target.style.backgroundColor="red";
    ele.target.style.fontSize="20px";
    alert("sa");
    });
});

// task.addEventListener('click', (el)=>{

// });


// btn
  let taskText = input.value;
  if (inputVar.value.length !== 0 && inputVar.value !== " ") {
    let task = document.createElement("li");
    task.innerText = inputVar.value;
    liOne.classList.add("newLi");
    task.setAttribute("value","liItem");
    taskList.append(task);
    taskList.insertBefore(task,liOne);
    inputVar.value = " ";
  } else {
    alert("not suitable input");
  }

// function displayName(msg,splmsg){
//     console.log(this.fname+" "+ msg);
// }


// let obj1={
//     id:1,
//     fname:"ck"
// }

// displayName.call(obj1, "hii","hello");
// displayName.call(obj1, ["hii", " hello"]);
// let newMsg=displayName.bind(obj1, "hii");
// console.log(newMsg);



// let fname="ck";
// function displayData(){
//     let count=0;
//     function showfunc(){
//         console.log(count++);
//     }
//     return showfunc;
// }
// 
// const savedData = displayData();
// displayData();
// savedData();
// savedData();
// savedData();
// savedData();
// showfunc();


//timing function
// setInterval();
// setTimeout();

// console.log("1");
// setInterval(()=>{
//     console.log("2");
// },2000)
// // console.log("2");
// console.log("3");
// console.log("4");
// for (let i = 0; i < 10; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },3000);
// }


// let btn = document.querySelector('.btn')

// function fetch(callback){
//     let img =document.createElement('img');
//     img.src="https://source.unsplash.com/78A265wPiO4";
//     document.body.append(img);
//     setTimeout(()=>{
//         callback();
//     },3000);
// }
// function sendMsg(){
//     alert("img fetched")
// }

// fetch(sendMsg);

//promise in js


// let promise = new Promise(function(resolve, reject){
//     let img =document.createElement('img');

//     img.src="https://source.unsplash.com/78A265wPiO4";

//     resolve(document.body.append(img));
//     reject(new Error("Data not received"))

// });

// promise.then((image)=>{
//     document.querySelector('.container').style.backgroundImage=image;
// });
