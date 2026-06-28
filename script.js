// МЕНЕДЖЕР СМЕНЫ ЭКРАНОВ (ЭКРАН 2: Текст поцелуя)
function triggerCatMagic(event) {
    if (event) event.stopPropagation();

    const cat = document.getElementById("luxuryCat");
    const music = document.getElementById("bgMusic");
    if (cat.classList.contains("jump-premium")) return;
    
    cat.classList.add("jump-premium");
    if (music) { music.play().catch(err => {}); }
    
    setTimeout(() => {
        const s1 = document.getElementById('screen1');
        const s2 = document.getElementById('screen2');

        s1.style.display = 'none';
        s2.classList.add('active');

        if (music) { music.play().catch(err => {}); }

        const rows = document.querySelectorAll('.fade-in-row');
        rows.forEach((row, index) => {
            setTimeout(() => { row.classList.add('visible'); }, index * 400);
        });
    }, 650);
}

// ПЕРЕХОД НА ЭКРАН 3 (3D-открытка)
function triggerScreen3(event) {
    if (event) event.stopPropagation();
    
    const container = document.getElementById("dynamicContent");
    
    container.style.opacity = "0";
    container.style.transform = "scale(0.95)";
    container.style.transition = "all 0.5s ease";
    
    setTimeout(() => {
        // Вставляем структуру ЭКРАНА 3 с отредактированной красивой подписью
        container.innerHTML = `
            <div class="badge-container">
                <span class="heart-badge">✨ Твой 3D Подарок</span>
            </div>
            
            <h2 style="margin-bottom: 5px; font-size: 1.3rem;">Покрути её пальчиком...</h2>
            
            <!-- 👇 КРАСИВЫЙ И ПРАВИЛЬНЫЙ ВАРИАНТ ТЕКСТА -->
            <p class="subtitle" style="margin-bottom: 25px; font-size: 0.88rem; line-height: 1.4; padding: 0 10px;">Я оживил её здесь, в интернете, чтобы мы никогда её не потеряли и она всегда была с нами...</p>

            <div class="scene-3d">
                <div class="card-3d" id="postcard3d">
                    <div class="card-3d-face card-3d-front"></div>
                    <div class="card-3d-face card-3d-back"></div>
                </div>
            </div>
            
            <p class="subtitle" style="margin-top: 20px; font-size: 0.85rem; color: rgba(255,255,255,0.5);">Вращай влево и вправо</p>
        `;
        
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
        
        init3DCardRotation();
    }, 500);
}

// ЛОГИКА 3D ВРАЩЕНИЯ ОТКРЫТКИ ПАЛЬЦЕМ И МЫШКОЙ
function init3DCardRotation() {
    const card = document.getElementById('postcard3d');
    if (!card) return;
    
    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;

    // Смартфоны (Touch)
    card.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches.clientX;
        card.style.transition = 'none';
    });

    card.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches.clientX - startX;
        let rotation = currentRotation + (deltaX * 0.8); 
        card.style.transform = `rotateY(${rotation}deg)`;
    });

    card.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        currentRotation = currentRotation + (e.changedTouches.clientX - startX) * 0.8;
        card.style.transition = 'transform 0.3s ease-out';
    });

    // Компьютер (Мышь)
    card.addEventListener('mousedown', (e) => {
        isDragging = true; 
        startX = e.clientX; 
        card.style.transition = 'none';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        card.style.transform = `rotateY(${currentRotation + (deltaX * 0.8)}deg)`;
    });
    
    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
            isDragging = false;
            currentRotation += (e.clientX - startX) * 0.8;
            card.style.transition = 'transform 0.3s ease-out';
        }
    });
}
