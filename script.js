const questions = [
  "What inspired you to work in the wedding world?",
  "What's your most memorable moment from a wedding that you've helped bring to life?",
  "How would you describe your style? Give us 5 words.",
  "How do you personalize a wedding experience for each couple?",
  "Can you share any hidden talents that come in handy at weddings?",
  "What's your favortie part of the wedding day?",
  "What's your process fro understanding a couples vision for their day?",
  "How do you ensure that a wedding runs smoothly?",
  "How do you balance your creative vision with the couples wishes?",
];

const button = document.getElementById("questionButton");
const questionParagraph = document.getElementById("question");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionParagraph.innerText = questions[randomIndex];
});