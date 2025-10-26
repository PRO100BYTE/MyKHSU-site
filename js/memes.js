// Коллекция студенческих мемов
const studentMemes = [
    { text: "Когда понимаешь, что завтра экзамен, а ты только открыл конспект", author: "Студент ХГУ", category: "session", likes: 42 },
    { text: "Лекция в 8 утра: приходишь как зомби, уходишь как философ", author: "Уставший студент", category: "teachers", likes: 38 },
    { text: "Пересдача - это когда твои шансы растут с каждой попыткой", author: "Оптимист-студент", category: "session", likes: 56 },
    { text: "Стипендия: три дня богатства, 27 дней надежды", author: "Финансовый гений", category: "money", likes: 71 },
    { text: "Сессия близко... А я еще далеко от конспектов", author: "Готовящийся в последнюю ночь", category: "session", likes: 63 },
    { text: "Преподаватель: 'Это материал для самообразования'. Я: 'Отлично, пропускаю'", author: "Самообразователь", category: "teachers", likes: 49 },
    { text: "Когда на парах понимаешь 30% материала, но на экзамене получаешь 4", author: "Везение студента", category: "session", likes: 45 },
    { text: "Универ научил меня главному: как находить ответы на вопросы, которых нет в Google", author: "Выпускник ХГУ", category: "teachers", likes: 52 },
    { text: "Самый страшный кошмар студента: 'А теперь поменяйтесь работами с соседом'", author: "Студент-перфекционист", category: "session", likes: 58 },
    { text: "Студенческие годы: когда спать по 4 часа - это норма, а есть раз в день - диета", author: "Студент-экстремал", category: "dorm", likes: 47 },
    { text: "Когда преподаватель говорит 'легкий вопрос' на экзамене", author: "Паникующий студент", category: "teachers", likes: 61 },
    { text: "Мозг после сессии: перезагрузка... пожалуйста, подождите", author: "Перегруженный студент", category: "session", likes: 39 },
    { text: "Понедельник: хочу на выходные. Воскресенье: хочу, чтобы понедельник не наступал", author: "Цикл студента", category: "session", likes: 44 },
    { text: "Кофе - это не напиток, это необходимость для выживания", author: "Студент-кофеман", category: "food", likes: 53 },
    { text: "Когда находишь ошибку в методичке: чувствуешь себя богом программирования", author: "Гордый студент", category: "teachers", likes: 37 },
    { text: "Сон на паре: 5 минут сна = 2 часа отдыха", author: "Сонный студент", category: "teachers", likes: 48 },
    { text: "Когда лектор отступает от темы и начинается самое интересное", author: "Внимательный студент", category: "teachers", likes: 41 },
    { text: "Диплом: 90% прокрастинации, 10% паники", author: "Дипломник", category: "session", likes: 67 },
    { text: "Стипендия - это когда родители доплачивают, чтобы ты выжил", author: "Реалист-студент", category: "money", likes: 59 },
    { text: "Когда заканчиваешь последний экзамен: я свободен! (на 2 недели)", author: "Отсессивившийся студент", category: "session", likes: 50 },
    { text: "Универская столовая: русская рулетка с желудком", author: "Студент-гастроном", category: "food", likes: 55 },
    { text: "Когда пропускаешь одну пару и понимаешь, что отстал на весь семестр", author: "Опоздавший студент", category: "teachers", likes: 43 },
    { text: "Лабораторная работа в 8 утра: зачем ты так с нами?", author: "Невыспавшийся студент", category: "teachers", likes: 40 },
    { text: "Когда наконец-то понимаешь материал через полгода после экзамена", author: "Позднопонявший", category: "session", likes: 46 },
    { text: "Студенческий билет - карта в мир скидок и привилегий", author: "Экономный студент", category: "money", likes: 38 },
    { text: "Когда готовишься к экзамену по 10 предметам одновременно", author: "Многозадачный студент", category: "session", likes: 51 },
    { text: "Общага - место, где рождаются легенды и разрушаются иллюзии", author: "Студент-общественник", category: "dorm", likes: 57 },
    { text: "Когда преподаватель ставит автомат: чувствуешь себя избранным", author: "Счастливый студент", category: "teachers", likes: 62 },
    { text: "Курсовая работа: 1% вдохновения, 99% копипаста", author: "Студент-прагматик", category: "session", likes: 54 },
    { text: "Когда замечаешь опечатку в дипломе уже после печати", author: "Расстроенный выпускник", category: "session", likes: 41 },
    { text: "Студенческие годы: лучшее время, которое ты не помнишь", author: "Ностальгирующий выпускник", category: "dorm", likes: 49 },
    { text: "Когда находишь старые конспекты: а это вообще я писал?", author: "Удивленный студент", category: "session", likes: 44 },
    { text: "Зачетка: книга страхов и надежд", author: "Студент-философ", category: "session", likes: 47 },
    { text: "Когда понимаешь, что твоя группа - вторая семья", author: "Студент-семьянин", category: "dorm", likes: 52 },
    { text: "Диплом с отличием: мечта родителей, кошмар студента", author: "Студент-отличник", category: "session", likes: 58 },
    { text: "Когда просыпаешься и понимаешь, что пара уже закончилась", author: "Проспавший студент", category: "teachers", likes: 45 },
    { text: "Студенческий юмор: чем безнадежнее ситуация, тем смешнее шутки", author: "Студент-юморист", category: "session", likes: 50 },
    { text: "Когда ловишь себя на мысли, что разговариваешь с учебником", author: "Уставший от учебы", category: "session", likes: 43 },
    { text: "Стипендия: размер имеет значение, особенно когда его нет", author: "Студент-правдолюб", category: "money", likes: 56 },
    { text: "Когда заканчиваешь универ и понимаешь, что тебе будет его не хватать", author: "Ностальгирующий выпускник", category: "dorm", likes: 48 },
    { text: "Студенчество: единственное время, когда можно быть бедным и счастливым одновременно", author: "Философствующий студент", category: "money", likes: 59 },
    { text: "Когда готовишь шпаргалки, но на экзамене все равно все помнишь", author: "Студент-перестраховщик", category: "session", likes: 46 },
    { text: "Лучшая мотивация учиться - дедлайн через 3 часа", author: "Студент-прокрастинатор", category: "session", likes: 61 },
    { text: "Когда находишь ошибку у преподавателя: чувствуешь себя всемогущим", author: "Студент-победитель", category: "teachers", likes: 53 },
    { text: "Универ: место, где дружба проверяется совместными страданиями", author: "Студент-друг", category: "dorm", likes: 55 },
    { text: "Когда после сессии понимаешь, что можешь выжить в любых условиях", author: "Студент-выживальщик", category: "session", likes: 47 },
    { text: "Студенческие традиции: чем бессмысленнее, тем важнее", author: "Студент-традиционалист", category: "dorm", likes: 42 },
    { text: "Когда замечаешь, что стал разбираться в предмете лучше преподавателя", author: "Студент-гений", category: "teachers", likes: 57 },
    { text: "Дипломная работа: последнее испытание перед свободой", author: "Студент-финишер", category: "session", likes: 60 },
    { text: "Студенчество: единственное время, когда 'завтра' - это не оправдание, а план", author: "Студент-мечтатель", category: "session", likes: 49 }
];

// Функция для отображения мемов
function renderMemes(filter = 'all') {
    const memesGrid = document.getElementById('memesGrid');
    memesGrid.innerHTML = '';
    
    const filteredMemes = filter === 'all' 
        ? studentMemes 
        : studentMemes.filter(meme => meme.category === filter);
    
    filteredMemes.forEach(meme => {
        const memeCard = document.createElement('div');
        memeCard.className = 'meme-card';
        memeCard.innerHTML = `
            <div class="meme-content">
                <div class="meme-text">${meme.text}</div>
                <div class="meme-author">- ${meme.author}</div>
            </div>
            <div class="meme-actions">
                <button class="meme-like" data-id="${meme.text}">
                    <i class="far fa-heart"></i>
                    <span class="like-count">${meme.likes}</span>
                </button>
                <button class="meme-share">
                    <i class="fas fa-share"></i> Поделиться
                </button>
            </div>
        `;
        memesGrid.appendChild(memeCard);
    });
    
    // Добавляем обработчики событий для лайков
    document.querySelectorAll('.meme-like').forEach(button => {
        button.addEventListener('click', function() {
            const likeCount = this.querySelector('.like-count');
            const icon = this.querySelector('i');
            
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                icon.className = 'far fa-heart';
            } else {
                this.classList.add('liked');
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                icon.className = 'fas fa-heart';
            }
        });
    });
    
    // Добавляем обработчики событий для кнопок поделиться
    document.querySelectorAll('.meme-share').forEach(button => {
        button.addEventListener('click', function() {
            const memeCard = this.closest('.meme-card');
            const memeText = memeCard.querySelector('.meme-text').textContent;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Студенческий мем',
                    text: memeText,
                    url: window.location.href
                });
            } else {
                // Fallback для браузеров без поддержки Web Share API
                navigator.clipboard.writeText(memeText).then(() => {
                    alert('Текст мема скопирован в буфер обмена!');
                });
            }
        });
    });
}

// Инициализация фильтров
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderMemes(this.getAttribute('data-filter'));
    });
});

// Первоначальная загрузка мемов
document.addEventListener('DOMContentLoaded', function() {
    renderMemes();
});