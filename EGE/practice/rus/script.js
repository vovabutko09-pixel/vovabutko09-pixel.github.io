// Пример заданий (каждое с вопросом, вариантами и правильным ответом)
const tasks = {
  1: [
    {
      question: "Самостоятельно подберите подчинительный союз, который должен быть на месте пропуска в третьем (3) предложении текста. Запишите этот союз. ",
      answers: ["Следствием непрекращающейся борьбы за существование в мире животных является естественный отбор – процесс, устраняющий менее приспособленные организмы и благоприятствующий более приспособленным организмам. (2)В этой конкурентной борьбе преимущество получают те представители вида, которые оказываются наиболее жизнеспособными, то есть приспособленными к конкретным условиям обитания. (3)<…> они имеют больше шансов оставить после себя полноценное потомство."],
      correct: ["потомучто", "ПОТОМУЧТО", "ТАККАК", "так как", "таккак", "ТАК КАК", "ПОТОМУ ЧТО"]
    },
  ],

  2: [
    {
      question: "Поставьте знак препинания: Я пришёл( ) когда уже стемнело.",
      answers: [",", "—", ":", "ничего не нужно"],
      correct: 0
    }
  ],

  3: [
    {
      question: "Какое из слов является эпитетом?",
      answers: ["яркое солнце", "дерево", "весна", "птица"],
      correct: 0
    }
  ]
};

function goBack() {
  const mainPage = document.getElementById("main");
  const taskPage = document.getElementById("task-page");

  if (!taskPage.classList.contains("hidden")) {
    // Если мы внутри задания — вернуться на страницу со списком заданий
    taskPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
  } else {
    // Если мы уже на странице со списком заданий — вернуться на главную
    window.location.href = "../practiceEGE.html"; // путь от rus/practice-rus.html
  }
}


function openTask(num) {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("task-page").classList.remove("hidden");

  document.getElementById("task-title").innerText = `Задание ${num}`;
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = "";

  tasks[num].forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");

    const qTitle = document.createElement("p");
    qTitle.textContent = `${index + 1}. ${item.question}`;
    qDiv.appendChild(qTitle);

    // Варианты просто как текст
    const answersDiv = document.createElement("div");
    answersDiv.classList.add("answers");
    item.answers.forEach((ans, i) => {
      const p = document.createElement("p");
      p.textContent = `${i + 1}) ${ans}`;
      answersDiv.appendChild(p);
    });
    qDiv.appendChild(answersDiv);

    // Текстовый ввод
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("text-input-container");
    inputDiv.innerHTML = `
      <h3>Введите ответ:</h3>
      <input type="text" id="input-${num}-${index}" placeholder="Ваш ответ" />
    `;
    qDiv.appendChild(inputDiv);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.textContent = "Проверить";
    checkBtn.onclick = () => checkAnswerText(num, index, item.correct);
    qDiv.appendChild(checkBtn);

    const result = document.createElement("div");
    result.classList.add("result");
    qDiv.appendChild(result);

    questionsDiv.appendChild(qDiv);
  });
}

// Проверка текстового ответа
function checkAnswerText(taskNum, questionIndex) {
  const input = document.getElementById(`input-${taskNum}-${questionIndex}`);
  const answerText = input.value.trim().toLowerCase(); // приводим к нижнему регистру

  const correctAnswers = tasks[taskNum][questionIndex].correct.map(a => a.toLowerCase());
  const resultDiv = document.querySelectorAll(".question")[questionIndex].querySelector(".result");

  if (!answerText) {
    resultDiv.textContent = "Введите ответ!";
    resultDiv.className = "result wrong";
    return;
  }

  if (correctAnswers.includes(answerText)) {
    resultDiv.textContent = "✅ Правильно!";
    resultDiv.className = "result correct";
  } else {
    resultDiv.textContent = `❌ Неправильно! Возможные ответы: ${tasks[taskNum][questionIndex].correct.join(", ")}`;
    resultDiv.className = "result wrong";
  }
}
