const responses = ["a", "c", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];


const form = document.querySelector('form')
form.addEventListener('submit', handleForm);



function handleForm(e) { 
    e.preventDefault();

    const results = [];

    const radioButtons = document.querySelectorAll('input[type="checkbox"]:checked');

    radioButtons.forEach((radioButton, index) => {
      if (radioButton.value === responses[index]) {
        results.push(true);
      } else {
        results.push(false)
      }
    });
    
    // console.log(radioButtons);
    console.log(results);

}

