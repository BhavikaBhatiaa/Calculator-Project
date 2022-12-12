const quizData = [
    {
      question: "HTML stands for?",
      a: "HyperLink Markup Language",
      b: "HyperText Markup Language",
      c: "Home Tool Markup Language",
      d: "HyperText Multi Language",
      correct: "b",
    },
    {
      question: "Which of these is a Programming Language?",
      a: "HyperText Markup Language",
      b: "Cascading StyleSheet",
      c: "Twitter Bootstrap",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "How can we change color of a background",
      a: "Background",
      b: "Background-color",
      c: "Both",
      d: "None",
      correct: "c",
    },
    {
      question:"CSS stands for?",
      a: "Cascading style sheets",
      b: "Coloured special sheets",
      c: "Color and style sheets",
      d: "None",
      correct: "a",
    },
    {
      question: "which keyword is used to define a variable in js",
      a: "var",
      b: "both",
      c: "let",
      d: "none",
      correct: "b",
    },
    {
      question: "How you declare an internal CSS",
      a: "<link>",
      b: "<script>",
      c: "<style>",
      d: "none",
      correct: "c",
    },
    {
      question: "how can we select an element with a specific id",
      a: "#",
      b: ".",
      c: "^",
      d: "none",
      correct: "a",
    },
    {
      question: "order of margins",
      a: "top,left,bottom,left",
      b: "top,right,bottom,right",
      c: "top,bottom,right left",
      d: "right,left,top,bottom",
      correct: "b",
    },
    {
      question: "Can negative values be allowed in padding?",
      a: "depends on property",
      b: "maybe",
      c: "yes",
      d: "no",
      correct: "d",
    },
    {
      question: "valid ways to represent a color",
      a: "color name",
      b: "RGB",
      c: "hex",
      d: "all of the above",
      correct: "d",
    },
    {
      question: "Which is not a javscript framework?",
      a: "Node",
      b: "Cassandra",
      c: "Vue",
      d: "React",
      correct: "b",
    },
    
  ];
  
  const answerEls = document.querySelectorAll(".answer");
  const aText = document.getElementById("aText");
  const bText = document.getElementById("bText");
  const cText = document.getElementById("cText");
  const dText = document.getElementById("dText");
  const questionEl = document.getElementById("question");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  quizLoad();
  
  function quizLoad() {
    deSelectInput();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
  }
  
  function getSelection() {
    let answer = undefined;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deSelectInput() {
    answerEls.forEach((answer) => {
      answer.checked = false;
    });
  }
  function mover(id) {
    id.innerHTML = "Welcome to play!"
  }
  function mout(id) {
    id.innerHTML = "Quiz"
  }
  submitBtn.addEventListener("click", () => {
    const answer = getSelection();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        quizLoad();
      } else {
        alert(`You've scored ${score} / ${quizData.length}`);
        location.reload();
      }
    }
  });
  