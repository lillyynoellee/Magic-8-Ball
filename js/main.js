let eightBall = 'Answer:';
console.log(eightBall);

let answers = document.querySelector("#response");
console.log(answers);

function alsoMyFunction() {
  document.getElementById("response").classList.add("active");
    document.querySelector(".flex-items:nth-child(2)").classList.add("active");
    document.querySelector(".eightball").classList.add("active");

  let randomNumber = Math.floor(Math.random() * 16);
  console.log(randomNumber);
  if (randomNumber === 1) {
    answers.innerHTML = "Yes";
  } else if (randomNumber===2) {
    answers.innerHTML = "No";
  } else if (randomNumber===3) {
    answers.innerHTML = "Maybe";
  } else if (randomNumber===4) {
    answers.innerHTML = "Absolutely Not";
  } else if (randomNumber===5) {
    answers.innerHTML = "It is a possibility";
  } else if (randomNumber===6) {
    answers.innerHTML = "Ask again later";
  } else if (randomNumber===7) {
    answers.innerHTML = "Don't count on it";
  } else if (randomNumber===8) {
    answers.innerHTML = "Signs point to a yes";
  } else if (randomNumber===9) {
    answers.innerHTML = "It is certain";
  } else if (randomNumber===10) {
    answers.innerHTML = "Most Likely";
  } else if (randomNumber===11) {
    answers.innerHTML = "Definitely";
  } else if (randomNumber===12) {
    answers.innerHTML = "My sources say no";
  } else if (randomNumber===13) {
    answers.innerHTML = "Not a chance";
  } else if (randomNumber===14) {
    answers.innerHTML = "Try again";
  } else if (randomNumber===15) {
    answers.innerHTML = "Unsure";
  } else if (randomNumber===16) {
    answers.innerHTML = "Concentrate and ask again";
  }

  setTimeout(() => {
    document.getElementById("response").innerHTML="8";
    document.getElementById("response").classList.remove("active");
    document.querySelector(".flex-items:nth-child(2)").classList.remove("active");

  }, 5000); // Allows the answer to disappear so you can generate another response
}
