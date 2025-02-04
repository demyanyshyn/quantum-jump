// Функція для відкриття модального вікна

function openModal() {

    document.getElementById('modalMenu').style.display = 'block';

}

// Функція для закриття модального вікна

function closeModal() {

    document.getElementById('modalMenu').style.display = 'none';

}

// Додаємо обробник події на кнопку відкриття модального вікна

document.getElementById('openModalBtn').addEventListener('click', openModal);

// Додаємо обробник події на кнопку закриття модального вікна

document.getElementById('closeModalBtn').addEventListener('click', closeModal);
document.getElementById('closeModalBtn2').addEventListener('click', closeModal);