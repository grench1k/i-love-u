function generateBackgroundHearts() {
    const heart = document.createElement('div');

    heart.classList.add('bg-heart');
    heart.innerHTML = '❤';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 12 + 12 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 4 + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5500);
}

setInterval(generateBackgroundHearts, 400);

let animationLocked = false;

/* ----------------------
   ЭКРАН 1
---------------------- */

function triggerFall() {

    if (animationLocked) return;
    animationLocked = true;

    const cat1 = document.getElementById('cat1');
    const loveText = document.querySelector('.love-text');
    const music = document.getElementById('bgMusic');

    if (music) {
        music.volume = 0.4;

        music.play().catch(err => {
            console.log(err);
        });
    }

    cat1.style.animation = 'none';
    loveText.style.animation = 'none';

    cat1.classList.add('gravitational-fall');
    loveText.classList.add('gravitational-fall');

    setTimeout(() => {

        document.getElementById('page1').style.transform =
            'translateY(-100%)';

        document.getElementById('page2').style.transform =
            'translateY(0)';

        animationLocked = false;

    }, 900);
}

/* ----------------------
   ЭКРАН 2
---------------------- */

function triggerPounce() {

    if (animationLocked) return;
    animationLocked = true;

    const cat2 = document.getElementById('cat2');

    // пока оставляем сердце
    const target = document.getElementById('huntingHeart');

    cat2.style.animation = 'none';

    cat2.classList.add('cat-pounce');

    if (target) {
        target.classList.add('heart-stolen');
    }

    /* вспышка */

    createBurst();

    setTimeout(() => {

        document.getElementById('page2').style.transform =
            'translateY(-100%)';

        document.getElementById('page3').style.transform =
            'translateY(0)';

        setTimeout(() => {

            document
                .getElementById('finalCard')
                .classList.add('reveal');

            startRelationshipCounter();

        }, 400);

    }, 1450);
}

/* ----------------------
   ВСПЫШКА СЕРДЕЦ
---------------------- */

function createBurst() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement('div');

        heart.innerHTML = '❤';
        heart.className = 'burst-heart';

        heart.style.left = '50%';
        heart.style.top = '50%';

        const angle = Math.random() * 360;
        const distance = 80 + Math.random() * 120;

        heart.style.setProperty('--x',
            Math.cos(angle * Math.PI / 180) * distance + 'px');

        heart.style.setProperty('--y',
            Math.sin(angle * Math.PI / 180) * distance + 'px');

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

/* ----------------------
   СЧЁТЧИК
---------------------- */

function startRelationshipCounter() {

    const counter = document.getElementById('loveCounter');

    if (!counter) return;

    const startDate =
        new Date('2025-12-13T00:00:00');

    function update() {

        const now = new Date();

        const diff = now - startDate;

        const days = Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );

        counter.innerHTML =
            `Мы вместе уже <b>${days}</b> дней ❤️`;
    }

    update();

    setInterval(update, 1000);
}