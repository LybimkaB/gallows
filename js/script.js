words = [
  "программа",
  "Текинцы",
  "Формат",
  "Влиять",
  "Умопомешательство",
  "Челночный",
  "Хлопчатка",
  "Ткачество",
  "Уставить",
  "Конспирация",
  "Привычный",
  "Умягчить",
  "Услада",
  "Кроль",
  "Стоять",
  "Штатский",
  "Греча",
  "Закалить",
  "Иудеи",
  "Сласть",
  "Ветреный",
  "Встроить",
  "Сальвадорский",
  "Ареометр",
  "Электропроводный",
  "Кроссовки",
  "Вознамериться",
  "Гальванизировать",
  "Гребенчатый",
  "Непостижимый",
  "Беззаботный",
  "Хабия",
  "Маникюр",
  "Единородный",
  "Шифер",
  "Готы",
  "Керамика",
  "Зажимщик",
  "Разноска",
  "Крепеж",
  "Долготерпение",
  "Осведомленный",
  "Экспрессия",
  "Иноверец",
  "Смолоть",
  "Гадость",
  "Переплюнуть",
  "Лоскут",
  "Пузан",
  "Определитель",
  "Семеноводство",
  "Мошка",
];
var guess;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var btn1 = document.getElementById("return");
var btn = document.getElementById("btn");

function begin() {
  // Выбираем случайное слово
  word = words[Math.floor(Math.random() * words.length)];
  word = word.toLowerCase();
  // Создаем итоговый массив
  answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  people = 0;
  index = 0;
  remainingLetters = word.length;
  new_element = document.getElementById("word_hind");
  new_element.innerHTML = answerArray.join(" ");
  document.getElementById("word").appendChild(new_element).style.fontSize =
    "35px";
  step = 20;

  document.getElementById("num").innerHTML = step;
}

function draw_people() {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  if (people === 1) {
    ctx.beginPath();
    ctx.moveTo(50, 290);
    ctx.lineTo(50, 50);
    ctx.stroke();
  }
  if (people === 2) {
    ctx.beginPath();
    ctx.moveTo(30, 290);
    ctx.lineTo(150, 290);
    ctx.stroke();
  }
  if (people === 3) {
    ctx.beginPath();
    ctx.moveTo(30, 50);
    ctx.lineTo(210, 50);
    ctx.stroke();
  }
  if (people === 4) {
    ctx.beginPath();
    ctx.moveTo(50, 110);
    ctx.lineTo(110, 50);
    ctx.stroke();
  }
  if (people === 5) {
    ctx.beginPath();
    ctx.moveTo(170, 50);
    ctx.lineTo(170, 80);
    ctx.stroke();
  }
  if (people === 6) {
    ctx.beginPath();
    ctx.arc(170, 100, 20, 0, Math.PI * 2, false);
    ctx.stroke();
  }
  if (people === 7) {
    ctx.beginPath();
    ctx.moveTo(170, 120);
    ctx.lineTo(170, 170);
    ctx.stroke();
  }
  if (people === 8) {
    ctx.beginPath();
    ctx.moveTo(170, 170);
    ctx.lineTo(150, 210);
    ctx.stroke();
  }
  if (people === 9) {
    ctx.beginPath();
    ctx.moveTo(170, 170);
    ctx.lineTo(190, 210);
    ctx.stroke();
  }
  if (people === 10) {
    ctx.beginPath();
    ctx.moveTo(170, 135);
    ctx.lineTo(150, 160);
    ctx.stroke();
  }
  if (people === 11) {
    ctx.beginPath();
    ctx.moveTo(170, 135);
    ctx.lineTo(190, 160);
    ctx.stroke();
  }
}

begin();
// Запрашиваем вариант ответа
var click = function () {
  step--;
  index = 0;
  // Автофокус
  var el = document.getElementById("input_id");
  el.focus();
  // Присваивание значения
  guess = document.getElementById("input_id").value;
  document.getElementById("input_id").value = "";
  // Проверка
  if (guess !== null) {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      guess = guess.toLowerCase();
      if (word[j] === guess && answerArray[j] === "_") {
        index++;
        answerArray[j] = guess;
        new_element.innerHTML = answerArray.join(" ");
        document
          .getElementById("word")
          .appendChild(new_element).style.fontSize = "35px";
        remainingLetters--;
      }
    }
    document.getElementById("num").innerHTML = step;
    if (index === 0) {
      people++;
      draw_people();
    }
  }

  if (remainingLetters == 0 && step > 0) {
    let a = (document.getElementById("win").innerHTML = "Вы выиграли!!!");
    el.disabled = true;
    btn.style.color = "#9a62cf";
    btn.disabled = true;
    var index_word = words.indexOf(word);
    if (index_word !== -1) {
      words.splice(index_word, 1);
    }
    if (words.length === 0) {
      a = document.getElementById("win").innerHTML =
        "Вы выиграли! Все уровни пройдены!";
      btn1.disabled = true;
      btn1.style.color = "#9a62cf";
    }
    btn1.innerHTML = "Далее";
    console.log(words);
  } else if (step === 0 || people === 11) {
    a = document.getElementById("win").innerHTML = "Увы, вы проиграли!";
    el.disabled = true;
    btn.disabled = true;
    btn.style.color = "#9a62cf";
    new_element.innerHTML = word;
    document.getElementById("word").appendChild(new_element).style.fontSize =
      "35px";
    var index_word = words.indexOf(word);
    if (index_word !== -1) {
      words.splice(index_word, 1);
    }
    if (words.length === 0) {
      a = document.getElementById("win").innerHTML =
        "Вы проиграли! Все уровни пройдены!";
      btn1.disabled = true;
      btn1.style.color = "#9a62cf";
    }
    btn1.innerHTML = "Далее";
  }
};

btn.onclick = function () {
  click();
};

(function () {
  document.getElementById("input_id").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      click();
    }
  });
})();

draw_people();

btn1.onclick = function () {
  console.log(word);
  btn1.innerHTML = "Начать заново";
  a = document.getElementById("win").innerHTML = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  begin();
  console.log(words);
  var el = document.getElementById("input_id");
  var btn = document.getElementById("btn");
  el.focus();
  el.disabled = false;
  btn.style.color = "#f0f8ff";
  btn.disabled = false;
};
