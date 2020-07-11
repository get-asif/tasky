var newButton = document.getElementById("new-button");
var deleteAllButton = document.getElementById("delete-all-button");
var taskSection = document.getElementById("task-section");

newButton.onclick = ()=> {
    // Creating DOM elements.
    var box = document.createElement("div");

    var shortDescriptionBox = document.createElement("div");
    var shortDescription = document.createTextNode("Short description of your task...");
    var inputField = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    // Adding element attributes.
    shortDescriptionBox.className = "input-field-container"

    inputField.type = "text";
    inputField.className = "input-field";
    inputField.placeholder = "Short description of your task...";
    inputField.onkeyup = e => {
        if(e.keyCode == 13){
            var newText = inputField.value;
            if (newText.trim() != "")
                shortDescription.data = inputField.value;
            shortDescriptionBox.appendChild(shortDescription);
            shortDescriptionBox.removeChild(inputField);
            editButton.innerHTML = "Edit";
        }
    }

    editButton.type = "button";
    editButton.innerHTML = "Edit";
    editButton.className = "task-button edit-button";
    editButton.onclick = () => {
        var btnValue = editButton.innerHTML;
        if(btnValue === "Edit") {
            shortDescriptionBox.removeChild(shortDescription);
            shortDescriptionBox.appendChild(inputField);
            inputField.focus();
            editButton.innerHTML = "Save";
        }else{
            var newText = inputField.value;
            if (newText.trim() != "")
                shortDescription.data = inputField.value;
            shortDescriptionBox.appendChild(shortDescription);
            shortDescriptionBox.removeChild(inputField);
            editButton.innerHTML = "Edit";
        } 
    }

    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "task-button delete-button";
    deleteButton.onclick = () => {
        deleteButton.parentNode.remove();
    }

    box.className = "task";

    //Appending shortDescription to its container.
    shortDescriptionBox.appendChild(shortDescription);

    // Appending box child elements to box.
    box.appendChild(shortDescriptionBox);
    box.appendChild(editButton);
    box.appendChild(deleteButton);

    // Appending box to the section.
    taskSection.appendChild(box);

}

deleteAllButton.onclick = () => {
    var divs = document.getElementsByClassName("task");
    var tasks = [];

    for(i=0; i < divs.length; i++){
        tasks.push(divs[i]);
    }

    tasks.forEach((task)=> { taskSection.removeChild(task)});
}




