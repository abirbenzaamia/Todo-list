// get all important elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

//all needed functions 

//when the user fills the input 
inputBox.onkeyup = ()=>{
  let valueEntered = inputBox.value;
  if (valueEntered.trim != 0 ) addBtn.classList.add("active");
  else addBtn.classList.remove("active");
};
//show all tasks 
let showTasks = () => {
    let lclStorage = localStorage.getItem("Todo");
    if(lclStorage == null){
        listArray = [];
     }else{
        listArray = JSON.parse(lclStorage); 
      }
const tasksNum = document.querySelector(".number");
tasksNum.textContent = listArray.length; 
if (listArray.length == 0) {
    deleteAllBtn.classList.remove("active");
} else {
    deleteAllBtn.classList.add("active");
}
let liTag = "";
listArray.forEach((element,index) => {
    liTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="bi bi-x-circle-fill"></i></span></li>`;
}
);
todoList.innerHTML = liTag;
inputBox.value= "";
};
//when the user adds a tesk //press add button 
addBtn.onclick = ()=>{
    let valueEntered = inputBox.value;
    let lclStorage = localStorage.getItem("Todo");
    if (lclStorage == null ) {
        listArray = []; // create an empty array
    } else {
        listArray = JSON.parse(lclStorage);
    }
    listArray.push(valueEntered); // add the new todo to the array
    localStorage.setItem("Todo" , JSON.stringify(listArray));
    //call the showTasks function 
    showTasks();
    addBtn.classList.remove("active");

};
// delete task function
function deleteTask(index){
  let lclStorageData = localStorage.getItem("Todo");
  listArray = JSON.parse(lclStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
};
showTasks(); 