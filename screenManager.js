// МЕНЕДЖЕР СМЕНЫ ЭКРАНОВ (ЭКРАН 2: Текст поцелуя)
function triggerCatMagic(event) {
    if (event) event.stopPropagation();

    const cat = document.getElementById("luxuryCat");
    if (cat.classList.contains("jump-premium")) return;
    
    const music = document.getElementById("bgMusic");
    cat.classList.add("jump-premium");
    
    setTimeout(() => {
        const container = document.getElementById("dynamicContent");
        
        // Вставляем структуру ВТОРОГО ЭКРАНА (Котики + Текст поцелуя + Кнопка)
        container.innerHTML = `
            <!-- 🐱❤️🐱 ФИКСИРОВАННЫЙ БЛОК КОТИКОВ -->
            <div class="cats-love-scene" style="display: flex !important; visibility: visible !important; opacity: 1 !important;">
                <div class="cats-heart">❤️</div>
                <div class="cats-couple">
                    <div class="love-cat cat-left">
                        <div class="l-ear left"></div><div class="l-ear right"></div>
                        <div class="l-head"><div class="l-eye"></div><div class="l-blush"></div></div>
                    </div>
                    <div class="love-cat cat-right">
                        <div class="l-ear left"></div><div class="l-ear right"></div>
                        <div class="l-head"><div class="l-eye"></div><div class="l-blush"></div></div>
                    </div>
                </div>
            </div>
            
            <!-- Интерактивная зона для динамического изменения только нижней части -->
            <div id="storyStepsZone">
                <h2 class="fade-in-row">А ты помнишь наш первый поцелуй?</h2>
                
                <p class="surprise-text fade-in-row">
                    Я никогда не забуду, как сильно я тогда <span class="romantic-accent">колотился от страха</span>. Мне казалось, что я прямо сейчас провалюсь под землю и просто умру от стыда!
                </p>
                
                <p class="surprise-text fade-in-row">
                    И, конечно, я всегда буду помнить, что всё это происходило <span class="romantic-accent-alt">в кинотеатре</span>, пока на фоне крутили какой-то максимально упоротый боевик xD
                </p>
                
                <p class="surprise-text fade-in-row">
                    Но сразу после этого поцелуя я почувствовал себя самым счастливым человеком на планете — счастливым до безумия.
                </p>
                
                <button class="next-scene-btn fade-in-row" onclick="showLoveMap(event)">Посмотреть нашу историю ✨</button>
            </div>
        `;

        if (music) {
            music.play().catch(err => console.log("Поддержка фонового трека:", err));
        }

        const rows = container.querySelectorAll('.fade-in-row');
        rows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('visible');
            }, index * 400);
        });
    }, 650);
}

// 🔥 ФУНКЦИЯ ДЛЯ ОТРИСОВКИ КАРТЫ (ЭКРАН 3: Котики остаются на месте!)
function showLoveMap(event) {
    if (event) event.stopPropagation();
    
    // Меняем контент ТОЛЬКО внутри зоны текста, котиков сверху не трогаем
    const stepsZone = document.getElementById("storyStepsZone");
    if (!stepsZone) return;
    
    // Плавное исчезновение старого текста поцелуя
    stepsZone.style.opacity = "0";
    stepsZone.style.transform = "scale(0.95)";
    stepsZone.style.transition = "all 0.4s ease";
    
    setTimeout(() => {
        // Вставляем вертикальную дорожку прямо под котиков
        stepsZone.innerHTML = `
            <div class="badge-container" style="margin-top: 5px;">
                <span class="heart-badge">✨ Наша история</span>
            </div>
            
            <h2 style="margin-bottom: 15px; font-size: 1.25rem;">Карта нашего счастья</h2>
            
            <div class="timeline-container">
                <div class="timeline-line"></div>
                
                <!-- Точка 1 -->
                <div class="timeline-item map-fade">
                    <div class="timeline-dot">💝</div>
                    <div class="timeline-content">
                        <span class="timeline-date">День Х.ХХ.ХХХХ</span>
                        <p class="timeline-desc">День, когда я впервые тебя увидел и понял, что моя жизнь изменилась.</p>
                    </div>
                </div>
                
                <!-- Точка 2 -->
                <div class="timeline-item map-fade">
                    <div class="timeline-dot">🍿</div>
                    <div class="timeline-content">
                        <span class="timeline-date">День Х.ХХ.ХХХХ</span>
                        <p class="timeline-desc">Тот самый упоротый боевик и наш первый робкий поцелуй.</p>
                    </div>
                </div>
                
                <!-- Точка 3 -->
                <div class="timeline-item map-fade">
                    <div class="timeline-dot">✈️</div>
                    <div class="timeline-content">
                        <span class="timeline-date">День Х.ХХ.ХХХХ</span>
                        <p class="timeline-desc">Наша первая совместная поездка / или любая другая важная дата.</p>
                    </div>
                </div>
                
                <!-- Точка 4 -->
                <div class="timeline-item map-fade">
                    <div class="timeline-dot">🎂</div>
                    <div class="timeline-content highlight-content">
                        <span class="timeline-date">Сегодняшний день</span>
                        <p class="timeline-desc" style="font-weight: 600; color: #ff758f;">Твой День Рождения! И я счастлив быть рядом. 😘</p>
                    </div>
                </div>
            </div>
        `;
        
        // Возвращаем видимость и запускаем анимацию выплывания дат
        stepsZone.style.opacity = "1";
        stepsZone.style.transform = "scale(1)";
        
        const items = stepsZone.querySelectorAll('.map-fade');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 250); // Интервал выплывания точек карты
        });
        
    }, 400);
}
