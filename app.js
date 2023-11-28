const responses = ["a", "c", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
form.addEventListener("submit", handleForm);


function handleForm(e) {
  e.preventDefault();

  const results = [];

  const radioButtons = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });

  // console.log(radioButtons);
  console.log(results);
  showResult(results);
  addColors(results);
}

const titleResult = document.getElementById("titleResult");
const markResult = document.getElementById('mark');
const helpResult = document.getElementById('help');

function showResult(results) {
   const errorsNumber = results.filter(el => el === false).length;
   console.log(errorsNumber);

   switch(errorsNumber) {
    case 0: 
    titleResult.textContent = "Bravo, c'est un sans faute !"
    helpResult.style.display = "block";
    titleResult.textContent = "Un pro des échecs.."
    mark.style.display = "block"
    markResult.innerHTML = "Score : <span> 3 / 3 <span>";
    break;
    case 1: 
    titleResult.textContent = "Presque un sans faute !"
    helpResult.style.display = "block";
    titleResult.textContent = "très bon"
    mark.style.display = "block"
    markResult.innerHTML = "Score : <span> 2 / 3 <span>";
    break;
    case 2: 
    titleResult.textContent = "aie ..."
    helpResult.style.display = "block";
    titleResult.textContent = "le principal c'est d'éssayer"
    mark.style.display = "block"
    markResult.innerHTML = "Score : <span> 1 / 3 <span>";
    break;
    case 3: 
    titleResult.textContent = "..."
    helpResult.style.display = "block";
    titleResult.textContent = "...."
    mark.style.display = "block"
    markResult.innerHTML = "Score : <span> 0 / 3 <span>";
    break;

    default: 
    titleResult.textContent = "cas innatendu.";

   }
 }

const questions = document.querySelectorAll('.question')

function addColors(results) { 
  results.forEach((response, index) => {
    if (results[index]) {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  })
 }



