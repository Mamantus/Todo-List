const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

let newDate = new Date().toISOString().split('T')[0];

let number = 1; 

function addTask(){

    if (inputBox.value === '') {
        alert("Please write a task.")
    }
    else {

            //Add task title
            let title = document.createElement('div');
            title.innerHTML = "Task " + number;
            title.classList.add('title');
            listContainer.appendChild(title);

        number ++;       
        // let title = "Task " + number + ": " ;
        
            //Add task by user input
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        

            // Add date created
        let dAdd = document.createElement('div');
        dAdd.classList.add('date');
        dAdd.innerHTML = "Task created " + newDate;
        li.appendChild(dAdd);

            // Adds delete icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

        //Resets inputbox
    inputBox.value = '';
    

    saveData();
}

    //Toggle between unchecked and checked task
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
            //Adds current date and toggles between created and completed task 
        let dAdd = e.target.querySelector('.date');
        let newDate = new Date().toISOString().split('T')[0];
        
        if (e.target.classList.contains('checked')) {
            dAdd.innerHTML = "Task completed " + newDate;
        }
        else {
            dAdd.innerHTML = "Task created " + newDate;
        }

        saveData();
    }
        // Deletes task
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.previousSibling.remove();
        e.target.parentElement.remove();
        number = 1;
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