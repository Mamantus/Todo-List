const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const tellDate = document.querySelector('tell-date');

let newDate = new Date().toISOString().split('T')[0];
// let year = newDate.getFullYear();
// let month = newDate.getMonth();
// let day = newDate.getDay();

// let addDate = 



function addTask(){
    if (inputBox.value === '') {
        alert("Please write a task.")
    }
    else {
//Add task
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        let dAdd = document.createElement('div');
        dAdd.innerHTML = "Task created " + newDate;

        listContainer.appendChild(li);
        listContainer.appendChild(dAdd);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

//Add date created
        
        
        li.appendChild(dAdd);

    }
    inputBox.value = '';
    saveData();
}

// function addDate(){
//     let date = document.createElement('date-added');
//     date.innerHTML = d;
//     let d = new Date()
//         date.innerHTML = d.toDateString();
// }

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        // let dAdd = document.createElement('div');
        // dAdd.innerHTML = "Task completed " + newDate;
        // dAdd.appendChild(li);

        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        
    }
}, false);

// listContainer.removeChild();

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}



showTask();