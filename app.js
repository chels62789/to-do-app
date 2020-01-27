function onReady() {
  let toDos= [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
   let title = newToDoText.value;
   toDos.push(title);
    console.log(toDos);

   // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   let deleteBtn = document.createElement('button');
   deleteBtn.textContent= "Delete";

   deleteBtn.addEventListener('click', function(event){
     let buttonLiText = this.parentElement.childNodes[0].textContent;
    toDoList.removeChild(this.parentElement);

   toDos.forEach(function(currentToDo, index){
       // console.log(currentToDo, index);
       // console.log(this);

       if(currentToDo === buttonLiText){
         // remove from array
         toDos.splice(index, 1);
       }
       console.log(toDos);
     });
   });


     newLi.textContent = title;
     newLi.appendChild(checkbox);
     newLi.appendChild(deleteBtn);
     toDoList.appendChild(newLi);
     newToDoText.value = "";
  });
}

window.onload = function() {
  onReady();
 };
