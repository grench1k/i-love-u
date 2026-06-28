function generateBackgroundHearts() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 12 + 12 + 'px'; // Чуть уменьшили для мобильных
    heart.style.animationDuration = Math.random() * 2 + 4 + 's';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5500);
}
setInterval(generateBackgroundHearts, 400);

let animationLocked = false;

function triggerFall() {
    if (animationLocked) return;
    animationLocked = true;

    const cat1 = document.getElementById('cat1');
    const loveText = document.querySelector('.love-text');
    const music = document.getElementById('bgMusic');

    if (music) {
        music.volume = 0.4;
        // На мобилках play() вызывается строго по тапу пользователя
        music.play().catch(err => console.log("Ошибка звука на мобильном: ", err));
    }

    cat1.style.animation = 'none';
    loveText.style.animation = 'none';

    cat1.classList.add('gravitational-fall');
    loveText.classList.add('gravitational-fall');

    setTimeout(() => {
        document.getElementById('page1').style.transform = 'translateY(-100%)';
        document.getElementById('page2').style.transform = 'translateY(0)';
        animationLocked = false;
    }, 900);
}

function triggerPounce() {
    if (animationLocked) return;
    animationLocked = true;

    const cat2 = document.getElementById('cat2');
    const huntingHeart = document.getElementById('huntingHeart');

    cat2.style.animation = 'none';

    cat2.classList.add('cat-pounce');
    huntingHeart.classList.add('heart-stolen');

    setTimeout(() => {
        document.getElementById('page2').style.transform = 'translateY(-100%)';
        document.getElementById('page3').style.transform = 'translateY(0)';
        
        setTimeout(() => {
            document.getElementById('finalCard').classList.add('reveal');
        }, 400);
    }, 1450);
}
