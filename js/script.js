const questions = document.querySelectorAll(".collapsible-question");
const answers = document.querySelectorAll(".collapsible-answer");
const arrows = document.querySelectorAll(".arrow");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    question.classList.toggle("current");
    answers[index].classList.toggle("show");
    arrows[index].classList.toggle("rotate");
    if (!answers[index].style.maxHeight) {
      answers[index].style.maxHeight = answers[index].scrollHeight + "rem";
    } else {
      answers[index].style.maxHeight = null;
    }
  });
});
