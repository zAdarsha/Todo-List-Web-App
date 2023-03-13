const myForm = document.querySelector(".task-add");
const formTask = document.querySelector(".task-add input[type='text']");
const myList = document.querySelector(".todo-lists");
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formText = formTask.value; 
    console.log(formText);
    const newli = document.createElement('li');

    const newInnerHTML = `<span>${formText}</span><div class="btn-div">
    <button class="list-btn done">Done</button>
    <button class="list-btn remove">Remove</button>
</div>`
    newli.innerHTML = newInnerHTML;

    myList.prepend(newli);
    formTask.value = "";
})

const myButtons= document.querySelector(".btn-div");
myList.addEventListener('click',(e)=>{
    if(e.target.classList.contains("done")){
        const text = e.target.parentNode.previousElementSibling;
        text.style.textDecoration = "line-through";
        text.style.color  = "#f45b69";
        
    }else if(e.target.classList.contains("remove")){
        const remove = e.target.parentNode.parentNode;
        remove.remove();
    }
})

