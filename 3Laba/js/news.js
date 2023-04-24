const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function () {
    if (btnHam.className !== "") {
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function () {
    if (btnHam.className !== "") {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

let news = [
    { title: 'News 1', url: "img/blog1.png", info: 'Магазин ноутбуків запускає програму Trade-In: обміняйте свій старий ноутбук на знижку до 30% на нову модель!', date: new Date('2018-06-28') },
    { title: 'News 2', url: "img/blog2.jpg", info: 'Тепер ви можете отримати значну знижку на новий ноутбук в нашому магазині, обмінявши свій старий пристрій. Програма Trade-In дозволяє клієнтам здати свій старий ноутбук в робочому стані і отримати знижку до 30% на покупку нового ноутбука. Ми розуміємо, що технології постійно розвиваються, тому хочемо допомогти нашим клієнтам забезпечити собі найновішу техніку за доступною ціною. Зверніться до нашого магазину, щоб дізнатися більше про умови програми Trade-In та вигоди, які вона може принести вам.', date: new Date('2022-02-10') },
    { title: 'News 3', url: "img/blog3.jpg", info: 'Магазин ноутбуків розширює асортимент продукції: тепер у продажу є нові моделі ноутбуків з дисплеєм OLED! ', date: new Date('2020-06-22') },
    { title: 'News 4', url: "img/about.jpg", info: 'Наш магазин ноутбуків завжди прагне бути у курсі новітніх технологій і задовольняти потреби наших клієнтів. Тому ми раді оголосити про розширення асортименту продукції - тепер в нашому магазині можна придбати нові ноутбуки з дисплеєм OLED. Дисплей OLED (Organic Light Emitting Diode) - це технологія, яка дозволяє отримати найяскравіші та найбільш контрастні зображення на екрані ноутбука. Ця технологія також дозволяє знизити вагу ноутбука та збільшити час роботи від батареї.', date: new Date('2017-03-27') },
    { title: 'News 6', url: "img/blog1.png", info: 'Магазин ноутбуків запускає програму Trade-In: обміняйте свій старий ноутбук на знижку до 30% на нову модель!', date: new Date('2021-01-21') },
    { title: 'News 7', url: "img/blog2.jpg", info: 'Тепер у нашому магазині ви можете знайти ноутбуки з дисплеєм OLED від провідних виробників за доступними цінами. Зверніться до нашого магазину, щоб дізнатися більше про нові моделі ноутбуків та отримати консультацію від наших фахівців. Дисплей OLED (Organic Light Emitting Diode) - це технологія, яка дозволяє отримати найяскравіші та найбільш контрастні зображення на екрані ноутбука. Ця технологія також дозволяє знизити вагу ноутбука та збільшити час роботи від батареї.', date: new Date('2019-06-27') },
]

const sortednews = news.slice().sort((a, b) => b.date - a.date);

ShowElem();

function ShowElem() {
    let elem = document.getElementById("newsid");
    for (var i = 0; i < news.length; i++) {
        let div = document.createElement("div");
        elem.style.display = "inline-block";
        div.className = `newss`;
        div.id = `${[i]}`;
        div.innerHTML = `<h1 id=${[i]}>${sortednews[i].title}</h1>`;
        div.innerHTML += `<p id=${[i]}>${sortednews[i].info}</p>`;
        div.innerHTML += `<h3 id=${[i]}>${sortednews[i].date.toLocaleDateString()}</h3>`;

        firstelem = elem.firstElementChild;
        elem.appendChild(div, firstelem);

    };
}
let col = document.querySelector(".col");
let divc = document.querySelector(".newslist");

function UpDat(event) {
    target = event.target;
    console.log(event.target.id)
    if (target) {
        document.getElementById("data1").innerHTML = `${sortednews[target.id].date.toLocaleDateString()}`;
        document.getElementById("h1").innerHTML = `${sortednews[target.id].title}`;
        document.getElementById("img1").src = `${sortednews[target.id].url}`;
        document.getElementById("p1").innerHTML = `${sortednews[target.id].info}`;
    }
}
divc.addEventListener('click', UpDat);

let news1 = [
    { title: 'News 8', info: 'Магазин ноутбуків запускає програму Купуй онлайн, забирай в магазині: замовляйте ноутбук онлайн та забирайте його у найближчому магазині безкоштовно! Ми розуміємо, що наші клієнти можуть мати різні потреби та вимоги, тому пропонуємо нову послугу - онлайн замовлення ноутбука та його безкоштовне отримання у найближчому магазині.', date: new Date('2019-06-28') },
    { title: 'News 9', info: 'За допомогою нашого інтернет-магазину ви можете зручно вибрати потрібний ноутбук, оформити замовлення та обрати зручний для вас магазин, де ви зможете забрати свою покупку. Вибір магазину можна змінити в будь-який момент до отримання замовлення. Ця програма дозволяє нашим клієнтам значно зекономити час та зручно отримати свій новий ноутбук. Зверніться до нашого магазину, щоб дізнатися більше про програму Купуй онлайн, забирай в магазині та наші інші послуги.', date: new Date('2021-06-19') },
    { title: 'News 10', info: 'Магазин ноутбуків запускає проект Ноутбук для кожного: надаємо можливість придбати ноутбуки в розстрочку та отримати безкоштовну консультацію від наших фахівців! Ми розуміємо, що купівля ноутбука може бути великим витратним заходом для багатьох людей. Тому ми пропонуємо можливість придбати ноутбук у розстрочку без переплат, щоб наші клієнти мали змогу отримати потрібний їм ноутбук, не пошкодуючи свій бюджет.', date: new Date('2017-06-22') },
    { title: 'News 11', info: 'У магазині ноутбуків ми завжди прагнемо робити наші послуги доступнішими для різних груп клієнтів. Тому ми раді оголосити про запуск проекту Ноутбук для кожного, який дозволить придбати ноутбук у розстрочку та отримати безкоштовну консультацію від наших фахівців. Крім того, ми надаємо безкоштовну консультацію від наших фахівців, які допоможуть підібрати ноутбук, який найкраще відповідає потребам та бюджету клієнта. Наші фахівці з радістю дадуть поради щодо вибору оптимальної конфігурації ноутбука та пояснять особливості різних моделей.', date: new Date('2020-04-12') },
    { title: 'News 12', info: '"Магазин ноутбуків запускає програму Трейд-ін: обміняйте свій старий ноутбук на новий та отримайте знижку до 50%!"', date: new Date('2016-03-27') },
    { title: 'News 13', info: 'У магазині ноутбуків ми завжди прагнемо допомагати нашим клієнтам отримати новітні технології за доступною ціною. Тому ми раді оголосити про запуск програми Трейд-ін, яка дозволить нашим клієнтам обміняти свій старий ноутбук на новий та отримати знижку до 50% на покупку нового ноутбука в нашому магазині. Для участі в програмі потрібно принести свій старий ноутбук до нашого магазину для оцінки його стану. Наші фахівці проаналізують стан вашого ноутбука та запропонують знижку до 50% на покупку нового ноутбука. Знижка буде залежати від технічного стану та віку вашого старого ноутбука.', date: new Date('2018-11-17') },
]
const sortednews1 = news1.slice().sort((a, b) => b.date - a.date);
ShowElem1();

function ShowElem1() {
    let elem = document.getElementById("newsid1");
    for (var i = 0; i < news1.length; i++) {
        let div = document.createElement("div");
        elem.style.display = "inline-block";
        div.className = `newsss`;
        div.id = `${[i]}`;
        div.innerHTML = `<h1 id=${[i]}>${sortednews1[i].title}</h1>`;
        div.innerHTML += `<p id=${[i]}>${sortednews1[i].info}</p>`;
        div.innerHTML += `<h3 id=${[i]}>${sortednews1[i].date.toLocaleDateString()}</h3>`;

        firstelem = elem.firstElementChild;
        elem.appendChild(div, firstelem);

    };
}

let col1 = document.querySelector(".col1");
let divc1 = document.querySelector(".newslist1");

function UpDat1(event) {
    target = event.target;
    console.log(event.target.id)
    if (target) {
        document.getElementById("data2").innerHTML = `${sortednews1[target.id].date.toLocaleDateString()}`;
        document.getElementById("h2").innerHTML = `${sortednews1[target.id].title}`;
        document.getElementById("p2").innerHTML = `${sortednews1[target.id].info}`;
    }
}
divc1.addEventListener('click', UpDat1);
