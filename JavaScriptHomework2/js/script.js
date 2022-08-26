let todoList = localStorage.getItem("todoList");
if (todoList != undefined) {
    document.getElementById("list").innerHTML = todoList;
    bindDeleteEvents();
}


function newElement(){
    let input = document.getElementById('task');

    if(!input.value){
        console.log("hata");
        $("#errorToast").toast("show");
        return;
    }

    let newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    let deleteImage = document.createElement("img");
    deleteImage.classList.add("delete-btn", "float-right", "mt-1");
    deleteImage.src = "assets/trash.svg";
    deleteImage.alt = "delete";


    newTodo.innerHTML = document.getElementById("task").value
    newTodo.appendChild(deleteImage);

    document.getElementById("list").append(newTodo);
    
    $("#successToast").toast("show");

    deleteImage.addEventListener("click", (event) =>  {
        event.stopPropagation();
        deleteElement(deleteImage);
    })

    refreshLocalStorage();
}

function deleteElement(deleteIcon){
    document.getElementById("list").removeChild(deleteIcon.parentElement);
    refreshLocalStorage();
}

function bindDeleteEvents() {
    let deleteIcons = document.getElementsByClassName("delete-btn");
    Array.from(deleteIcons).forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteElement(deleteIcon);
      });
    });
}

function refreshLocalStorage(){
    localStorage.setItem("todoList", document.getElementById("list").innerHTML);
}