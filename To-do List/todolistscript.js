// Get the elements
const inputBox = document.getElementById('input-box');
const addButton = document.querySelector('button');
const notCompletedList = document.querySelector('.notcompleted');
const completedList = document.querySelector('.completed');

// Event listener for the add button
addButton.addEventListener('click', function() {
  const task = inputBox.value;
  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener('click', function() {
      moveTaskToCompleted(this.parentElement);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.addEventListener('click', function() {
      this.parentElement.remove();
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    notCompletedList.appendChild(listItem);

    inputBox.value = '';
  }
});

//Function to move task to completed list
function moveTaskToCompleted(taskItem) {
  completedList.appendChild(taskItem);
  taskItem.querySelector('button:first-child').remove();
}
