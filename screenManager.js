// МЕНЕДЖЕР СМЕНЫ ЭКРАНОВ
function triggerCatMagic(event) {
    // Останавливаем передачу клика на задний фон, чтобы не плодить лишние эмодзи под котиком
    if (event) event.stopPropagation();

    const cat = document.getElementById("luxuryCat");
    if (cat.classList.contains("jump-premium")) return;
    
    // Запускаем 3D-прыжок котика
    cat.classList.add("jump-premium");
    
    // Ровно в пике полета кота меняем содержимое карточки
    setTimeout(() => {
        const container = document.getElementById("dynamicContent");
        
        // Вставляем структуру ВТОРОГО ЭКРАНА
        container.innerHTML = `
            <!-- ДВА КОТИКА ИЗ style2.css -->
            <div class="cats-love-scene">
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
            
            <!-- ТЕКСТ ВОСПОМИНАНИЯ -->
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
            
            <span class="highlight-text fade-in-row">С днем рождения, моя любимая! 😘</span>
        `;

        // Запускаем эффект поэтапного появления строчек текста
        const rows = container.querySelectorAll('.fade-in-row');
        rows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('visible');
            }, index * 400); // Интервал появления строк (0.4 секунды)
        });
    }, 650);
}
