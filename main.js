// 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

const textInputElement = document.getElementById('new-todo');
const todoListElement = document.getElementById('todo-list');
const todoCount = document.querySelector('#todo-count');
const clearList = document.getElementById('clear-completed');
const checkAll = document.querySelector('#toggle-all')
const toggled = document.querySelectorAll('.input-label')
const togglledAll = document.querySelectorAll('.toggle')


let todoList = [];
function add(text) {
    const uniqueId = (new Date()).getTime();
    const todo = {
        id: uniqueId,
        text,
    };
   
   todoList.push(todo)
   
    // console.log(todoList)
    displayList(todoList);

}


function remove(id) {
    todoList = todoList.filter((todo) => {
        return id !== todo.id;
    });
    displayList(todoList);
}

    
textInputElement.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        const textValue = textInputElement.value.trim();
        textInputElement.value = '';
        if(!textValue) {
            alert('Please fill in todo text');
            return;
        } else {
            add(textValue);
        }
    }
    
})

function displayList(list) {
    todoListElement.innerHTML = '';


    for(const li of list) {
        let deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add('destroy')       

        let listItemEl = document.createElement('li');
        listItemEl.setAttribute("id", `${li.id}`);

        listItemEl.innerHTML =`<div class='view'>
                                <input id="${li.text}" class="toggle" type="checkbox" name='checkbox'>
                                <label for="${li.text}" class='input-label'>${li.text}</label>
                                </div>`;

        listItemEl.appendChild(deleteButtonEl);
        todoListElement.appendChild(listItemEl);

        deleteButtonEl.addEventListener('click', () => {
            remove(li.id);
        });


        clearList.addEventListener("click", () => {
            let checkList = document.querySelector('.toggle').checked = true;
            if(checkList) {
                listItemEl.innerHTML = ' '             
            }else if(checkAll.checked) {
                  checkList 
                  listItemEl.innerHTML = ''
                  
            }
        }) 

        
    } 
};


