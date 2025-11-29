const quizQuestions = [
  {
    question: "Which is the strongest password?",
    options: ["A) Password123", "B) qwerty2024", "C) @Jx9!kP#3$?", "D) 12345678"],
    answer: "c"
  },
  {
    question: "What does VPN stand for?",
    options: ["A) Virtual Private Network", "B) Visual Packet Node", "C) Verified Protection Network", "D) Virtual Protected Net"],
    answer: "a"
  },
  {
    question: "Which port is used for HTTPS?",
    options: ["A) 21", "B) 80", "C) 22", "D) 443"],
    answer: "d"
  },
  {
    question: "Which one is NOT an operating system?",
    options: ["A) Linux", "B) Windows", "C) Android", "D) Google"],
    answer: "d"
  },
  {
    question: "What is phishing?",
    options: [
      "A) A type of malware",
      "B) Fake emails/messages to steal information",
      "C) A hacking tool",
      "D) Website encryption technique"
    ],
    answer: "b"
  },
  {
    question: "Which programming language is mainly used for web development?",
    options: ["A) Python", "B) Java", "C) C++", "D) JavaScript"],
    answer: "d"
  },
  {
    question: "Which cyber attack floods a server with too many requests?",
    options: ["A) SQL Injection", "B) DDoS Attack", "C) Cross-Site Scripting", "D) MITM Attack"],
    answer: "b"
  },
  {
    question: "What does SQL stand for?",
    options: ["A) Strong Query Layer", "B) Simple Quick Language", "C) Structured Query Language", "D) Static Query Launcher"],
    answer: "c"
  },
  {
    question: "Which company created JavaScript?",
    options: ["A) Google", "B) Facebook", "C) Microsoft", "D) Netscape"],
    answer: "d"
  },
  {
    question: "What does IP stand for?",
    options: ["A) Internet Protocol", "B) Internal Port", "C) International Provider", "D) Internal Process"],
    answer: "a"
  }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let q = quizQuestions[i];

    let promptText =
      `${q.question}\n\n` +
      `${q.options[0]}\n${q.options[1]}\n${q.options[2]}\n${q.options[3]}\n\n` +
      "Enter your answer (A, B, C, or D):";

    let userAnswer = prompt(promptText);

    if (!userAnswer) {
      alert("No input entered. Moving to next question.");
      continue;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === q.answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! Correct answer is: ${q.answer.toUpperCase()}`);
    }
  }

  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();
