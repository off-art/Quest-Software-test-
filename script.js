
const progress = document.querySelector('.progress-done');
const progressNumber = document.querySelector('.progressNumber');



progressNumber.addEventListener('input', (num) => {
  if(progressNumber.value > 100) {
    return null
  } else {
    progress.style.width = progressNumber.value + '%'
    progress.style.opacity = 1
  }
})
