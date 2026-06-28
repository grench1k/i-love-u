function catSurprise() {
    const overlay = document.getElementById("catOverlay");
    const cat = document.querySelector(".css-cat");
    
    // Включаем оверлей (затемнение фона)
    overlay.classList.add("active");
    
    // Добавляем коту класс "радости" — он начнет активнее двигать ушами и усами
    setTimeout(() => {
        cat.classList.add("happy-cat");
    }, 100);
    
    // Ровно через 2.5 секунды перенаправляем на вторую страницу
    setTimeout(() => {
        window.location.href = "page2.html";
    }, 2500);
}
