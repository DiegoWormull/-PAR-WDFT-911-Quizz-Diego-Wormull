const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "wich movie made the most money ever ?",
      answers: {
        a: "Minions",
        b: "Fast and Furious 7",
        c: "star wars:Force awekens",
        d: "Avatar",
      },
      correctAnswer: "d"
    },
    {
      question: "Witch male/female actor got the most awards in his/her carrer?",
      answers: {
        a: "Meryl Streep",
        b: "Jack Nicholson",
        c: "Katharine Hepburn",
        d: "Tom Hanks"
      },
      correctAnswer: "c"
    },
  ];