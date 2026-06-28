// МЕНЕДЖЕР СМЕНЫ ЭКРАНОВ (ЭКРАН 2: Текст поцелуя)
function triggerCatMagic(event) {
    if (event) event.stopPropagation();

    const cat = document.getElementById("luxuryCat");
    if (cat.classList.contains("jump-premium")) return;
    
    const music = document.getElementById("bgMusic");
    cat.classList.add("jump-premium");
    
    setTimeout(() => {
        // Прячем первый стартовый экран
        document.getElementById("screen1").style.display = "none";
        
        // Показываем второй экран (Где уже сидят влюбленные котики!)
        const screen2 = document.getElementById("screen2");
        screen2.style.display = "block";
        
        // Вставляем текст поцелуя строго ПОД котиков
        const stepsZone = document.getElementById("storyStepsZone");
        stepsZone.innerHTML = `
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
        `;

        if (music) {
            music.play().catch(err => console.log("Поддержка трека:", err));
        }

        // Запуск плавного появления строчек
        const rows = stepsZone.querySelectorAll('.fade-in-row');
        rows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('visible');
            }, index * 400);
        });
    }, 650);
}

// 🔥 ЭКРАН 3: КАРТА ИСТОРИИ (КОТИКИ ОСТАЮТСЯ СВЕРХУ!)
function showLoveMap(event) {
    if (event) event.stopPropagation();
    
    const stepsZone = document.getElementById("storyStepsZone");
    if (!stepsZone) return;
    
    // Плавное исчезновение старого текста поцелуя
    stepsZone.style.opacity = "0";
    stepsZone.style.transform = "scale(0.95)";
    stepsZone.style.transition = "all 0.4s ease";
    
    setTimeout(() => {
        // Заменяем текст под котиками на интерактивную карту дат
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
        
        stepsZone.style.opacity = "1";
        stepsZone.style.transform = "scale(1)";
        
        const items = stepsZone.querySelectorAll('.map-fade');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 250);
        });
        
    }, 400);
}
