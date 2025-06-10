function addTask(){
    const taskInput = document.getElementById("task-input")
    const taskText  = taskInput.value.trim();


    if(taskText=== ""){
        alert("Please enter a new task..")
        return ;
    }


    const taskList = document.getElementById("task-list")

    const li = document.createElement("li")
    li.textContent = taskText;

    const db = document.createElement("button")
    db.textContent = "❌";
    db.classList.add("delete-btn")


    db.addEventListener("click",()=>{
        e.stopPropagation();
        li.remove()
    })

    li.appendChild(db)

    li.addEventListener("click",()=>{
        li.classList.toggle("completed")
    });


    li.addEventListener("contextmenu",(e)=>{
        e.preventDefault()
        li.remove();
    });



    taskList.appendChild(li);
    taskInput.value = "";
}

