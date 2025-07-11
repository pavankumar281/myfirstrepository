const questions = [
    {
      question: "What is the use of the novalidate attribute in HTML forms?",
      options: ["To skip a field from validation", "To disable JavaScript validation", "To skip browser validation", "To mark a field as optional"],
      answer: 2,
    },
    {
      question: "What does CSS stand for?",
      options: ["Cool Style Sheet", "Cascading Style Sheet", "Creative Sheet Style", "Colorful Sheet Syntax"],
      answer: 1,
    },
    {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: 1,
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "jQuery", "CSS", "XML"],
      answer: 1,
    },
    {
      question: "How can you specify multiple email addresses in an input tag for email?",
      options: ["type=emails",  "multiple-emails", "multiple attribute", "Not possible"],
      answer: 3,
    },

    {
      question: "What does the object-fit: cover; property do to an image or video?",
      options: ["Scales to fit inside without cropping", "Crops and fills the container completely", "Aligns the object to center", "Fixes overflow issues"],
      answer: 2,
    },

    {
      question: "Which of the following CSS functions is used to apply a blur effect?",
      options: ["filter: blur();", "effect: blur();", "shadow: blur();", "opacity: blur();"],
      answer: 1,
    },

    {
      question: "What will position: absolute; do to an element?",
      options: ["It will scroll with the page", "It will stay relative to the viewport", "It will position relative to the nearest positioned ancestor", "It floats above all elements"],
      answer: 2,
    },
    {
      question: "Which property is used to create space between the element's border and content?",
      options: ["margin", "gap", "padding", "spacing"],
      answer: 2,
    },
    {
      question: "What value of overflow hides the overflowing content?",
      options: ["visible", "scroll", "auto", "hidden"],
      answer: 3,
    },

    {
      question: "What is the purpose of the Content-Security-Policy meta tag?",
      options: ["To define user access levels in HTML", "To increase page load speed by limiting content", "To allow inline JavaScript execution only", "To protect the site from malicious scripts by defining safe sources"],
      answer: 2,
    },

    {
      question: "What does this code output? Promise.resolve(1).then(console.log);",
      options: ["undefined", "defined", "Error", "1"],
      answer: 3,
    },

    {
      question: "Which method can be used to deeply clone an object in JavaScript?",
      options: ["Object.assign({}, obj)", "structuredClone(obj)", "obj.clone()", "JSON.stringify(obj)"],
      answer: 1,
    },

    
    {
      question: "What does the this keyword refer to in a regular function (non-arrow) in strict mode?",
      options: ["The global object", "undefined", "The parent function", "window"],
      answer: 2,
    },

    {
      question: "What does contain: layout do in CSS containment?",
      options: [" Disables child layout styles", "Prevents layout changes from affecting the outside of the element", "Makes the layout full width", "Forces isolation of grid properties"],
      answer: 2,
    },

  ];
  
  let current = 0, score = 0, time = 20, timer, localScores = [];
  
  const questionText = document.getElementById("question-text");
  const optionsBox = document.getElementById("options");
  const timerDisplay = document.getElementById("timer");
  const timerFill = document.getElementById("timer-fill");
  const questionNum = document.getElementById("question-number");
  const modal = document.getElementById("result-modal");
  const scoreDisplay = document.getElementById("score");
  const leaderboard = document.getElementById("leaderboard");
  const stars = document.getElementById("stars");
  
  function loadQuestion() {
    clearInterval(timer);
    time = 20;
    timerDisplay.textContent = time;
    timerFill.style.transform = "scaleX(1)";
    
    const q = questions[current];
    questionNum.textContent = `Q${current + 1}`;
    questionText.textContent = q.question;
    optionsBox.innerHTML = "";
  
    q.options.forEach((opt, index) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `<input type="radio" name="opt" value="${index}"> ${opt}`;
      div.onclick = () => selectOption(div, index, q.answer);
      optionsBox.appendChild(div);
    });
  
    timer = setInterval(() => {
      time--;
      timerDisplay.textContent = time;
      timerFill.style.transform = `scaleX(${time / 20})`;
      if (time === 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }
  
  function selectOption(el, selected, correct) {
    clearInterval(timer);
    const options = document.querySelectorAll(".option");
    options.forEach(opt => opt.classList.remove("correct", "incorrect"));
  
    if (selected === correct) {
      el.classList.add("correct");
      score++;
    } else {
      el.classList.add("incorrect");
      options[correct].classList.add("correct");
    }
  
    setTimeout(nextQuestion, 1000); 
  }
  
  function nextQuestion() {
    if (current < questions.length - 1) {
      current++;
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    modal.classList.remove("hidden");
    scoreDisplay.textContent = score;
  
    let starsText = "";
    if (score >= 15) starsText = "⭐⭐⭐⭐⭐";
    else if (score >= 12) starsText = "⭐⭐⭐⭐";
    else if (score >= 9) starsText = "⭐⭐⭐";
    else if (score >= 5) starsText = "⭐⭐";
    else starsText = "⭐";
    stars.textContent = starsText;
  
    const name = prompt("Enter your name for leaderboard:") || "Player";
    const data = { name, score };
    localScores = JSON.parse(localStorage.getItem("leaderboard")) || [];
    localScores.push(data);
    localScores.sort((a, b) => b.score - a.score);
    localScores = localScores.slice(0, 15);
    localStorage.setItem("leaderboard", JSON.stringify(localScores));
  
    leaderboard.innerHTML = localScores
      .map(s => `<li>${s.name} - ${s.score}/15</li>`)
      .join("");
  }
  
  function restartQuiz() {
    current = 0;
    score =0;
    modal.classList.add("hidden");
    loadQuestion();
  }
  
  window.onload = loadQuestion;
  