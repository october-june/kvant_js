const akinator_chars = [
    {
        "name": "Арагорн II Элессар",
        "tags": ["человек", "мужского пола", "был в Братстве Кольца", "был правителем", "смотрел в палантир", ]
    },
    {
        "name": "Арвен",
        "tags": ["эльф", "женского пола", "старше 100 лет", "знаком с магией", ]
    },
    {
        "name": "Боромир",
        "tags": ["человек", "мужского пола", "был в Братстве Кольца", "погиб до завершения войны", "пытался завладеть Кольцом", ]
    },
    {
        "name": "Мериадок Брендибак",
        "tags": ["хоббит", "мужского пола", "был в Братстве Кольца", ]
    },
    {
        "name": "Фродо Бэггинс",
        "tags": ["хоббит", "мужского пола", "ушёл за Море", "был в Братстве Кольца", "считался погибшим, но ожил", "пытался завладеть Кольцом", ]
    },
    {
        "name": "Галадриэль",
        "tags": ["эльф", "женского пола", "старше 100 лет", "ушёл за Море", "был правителем", "знаком с магией", ]
    },
    {
        "name": "Гваихир",
        "tags": ["великий орёл", "мужского пола", "старше 100 лет", "был правителем", ]
    },
    {
        "name": "Гимли",
        "tags": ["гном", "мужского пола", "старше 100 лет", "ушёл за Море", "был в Братстве Кольца", ]
    },
    {
        "name": "Сэмуайз Гэмджи",
        "tags": ["хоббит", "мужского пола", "ушёл за Море", "был в Братстве Кольца", ]
    },
    {
        "name": "Гэндальф",
        "tags": ["майар", "мужского пола", "старше 100 лет", "ушёл за Море", "был в Братстве Кольца", "знаком с магией", "считался погибшим, но ожил", ]
    },
    {
        "name": "Денетор II",
        "tags": ["человек", "мужского пола", "был правителем", "смотрел в палантир", "погиб до завершения войны", ]
    },
    {
        "name": "Леголас",
        "tags": ["эльф", "мужского пола", "старше 100 лет", "ушёл за Море", "был в Братстве Кольца", ]
    },
    {
        "name": "Перегрин Тук",
        "tags": ["хоббит", "мужского пола", "был в Братстве Кольца", "смотрел в палантир", "считался погибшим, но ожил", ]
    },
    {
        "name": "Саруман",
        "tags": ["майар", "мужского пола", "старше 100 лет", "был правителем", "знаком с магией", "смотрел в палантир", "пытался завладеть Кольцом", ]
    },
    {
        "name": "Теоден",
        "tags": ["человек", "мужского пола", "был правителем", "из Рохана", "погиб до завершения войны", ]
    },
    {
        "name": "Фарамир",
        "tags": ["человек", "мужского пола", ]
    },
    {
        "name": "Эльронд",
        "tags": ["эльф", "мужского пола", "старше 100 лет", "ушёл за Море", "был правителем", "знаком с магией", ]
    },
    {
        "name": "Эовин",
        "tags": ["человек", "женского пола", "из Рохана", "считался погибшим, но ожил", ]
    },
    {
        "name": "Эомер",
        "tags": ["человек", "мужского пола", "из Рохана", ]
    },
]

const sphere = [
    "Без сомнений.",
    "Определённо да.",
    "Скорее всего.",
    "Знаки указывают на это.",
    "Весьма вероятно.",
    "Похоже на то.",
    "Можешь на это рассчитывать.",
    "Ответ скрыт от тебя.",
    "Сейчас не время знать.",
    "Спроси ещё раз.",
    "Лучше не спрашивай.",
    "Не рассчитывай на это.",
    "Скорее нет.",
    "Определённо нет.",
    "Все признаки говорят об обратном.",
    "Ситуация туманна.",
    "Будущее пока молчит.",
    "Шар сомневается.",
    "Даже мне это неизвестно.",
    "Ты действительно хочешь это знать?"
];

const hangman_chars = [
    "Фродо",
    "Бильбо",
    "Гэндальф",
    "Арагорн",
    "Леголас",
    "Гимли",
    "Боромир",
    "Саруман",
    "Саурон",
    "Келеборн",
    "Голлум",
    "Торин",
    "Беорн",
    "Элронд",
    "Арвен",
    "Галадриэль",
    "Теоден",
    "Эовин",
    "Фарамир",
    "Денетор",
    "Перегрин",
    "Мериадок",
    "Сэмуайз",
    "Радагаст",
    "Исильдур",
    "Бомбадил",
    "Златеника",
    "Келебримбор",
    "Мелькор",
    "Глорфиндел",
    "Феанор",
    "Финрод",
    "Финарфин",
    "Турин",
    "Берен",
    "Лутиэнь",
    "Эарендиль",
    "Глаурунг",
    "Унголиант",
];

function randRange(n) {
    return Math.floor(Math.random() * n);
}


function akinator() {
    document.querySelector(".buttons").classList.add("up");
    document.querySelector("#phrase").textContent = `Я знаю Властелин Колец`;

    setTimeout(() => {
        document.querySelector("#phrase").classList.add("show");
    }, 700);

    setTimeout(() => {
    
        let filtered = [...akinator_chars];
        let tag_asked = [];
        let tag;

        while (filtered.length > 1) {
            do {
                let rnd_pers_tags = filtered[randRange(filtered.length)].tags;
                tag = rnd_pers_tags[randRange(rnd_pers_tags.length)];
            } while (tag_asked.includes(tag));
            tag_asked.push(tag);

            let question = `Этот персонаж ${tag}?`;
            let answer = confirm(question);
            let new_filtered = [];

            for (let char of filtered) {
                if (answer === char.tags.includes(tag)) {
                    new_filtered.push(char);
                }
            }

            filtered = new_filtered;
            console.log(filtered);
        }

        if (filtered.length === 1) {
            if (confirm(`Твой персонаж ${filtered[0].name}?`)) {
                alert("Я знал это.");
            } else {
                filtered.length = 0;
            }
        }

        if (filtered.length === 0) {
            alert("Ты знаешь больше меня.");
        }
    }, 1400);
}


function oracle() {
    document.querySelector(".buttons").classList.add("up");
    document.querySelector("#phrase").textContent = sphere[randRange(sphere.length)];

    setTimeout(() => {
        document.querySelector("#phrase").classList.add("show");
    }, randRange(1400) + 700);
}


function hangman() {
    document.querySelector(".buttons").classList.add("up");
    document.querySelector("#phrase").textContent = `Знаешь ли персонажей Толкина ты?`;

    setTimeout(() => {
        document.querySelector("#phrase").classList.add("show");
    }, 700);

    setTimeout(() => {
        let name = hangman_chars[randRange(hangman_chars.length)];
        let answer = [];

        for (let i = 0; i < name.length; i++) {
            answer[i] = "*"
        }
        let letters = name.length

        while (letters > 0) {
            alert(answer.join(" "));
            let guess = prompt("Угадай букву или нажми 'Отмена'") 
            if (guess === null) {
                break;
            } 
            else if (guess.length !== 1) {
                alert("Только одну букву!");
            }
            else {
                for (j = 0; j < name.length; j++) {
                    if (name[j].toLowerCase() === guess) {
                        answer[j] = name[j];
                        letters--;
                    }
                }
            }
        }
        if (answer.join("") === name) {
            alert("Ты угадал " + name);
        } else {
            alert("Посвяти вечера Сильмариллиону");
        }
    }, 1400);
}