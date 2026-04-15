

const addTask = () =>{
    const textInput =document.getElementById("textInput");
    const taskInputValue = textInput.value.trim();

    if(taskInputValue !==''){
        const taskListUl=document.getElementById("taskList");
        const li=document.createElement('li');
        li.innerHTML= taskInputValue +'<button onclick=" deltask(this) ">Delete</button>';
        taskListUl.appendChild(li);
        console.log(taskInputValue);
        
        textInput.value="";


    }else{
        alert("Please fill the form");
    }

}

let deltask = (btn) =>{
    let li= btn.parentNode;
    li.parentNode.removeChild(li);
}


