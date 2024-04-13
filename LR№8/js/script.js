document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.consultation-order');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Получаем значения из полей формы
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const payment = document.getElementById('payment').value;
        const message = document.getElementById('message').value;

        // Проверка валидности данных
        let isValid = true;

        // Проверка имени (не пустое и содержит только русские символы)
        var russianRegex = /^[а-яА-Я]+$/;
        if (!russianRegex.test(name)) {
            alert('Введите корректное имя на русском');
            isValid = false;
        }

        // Проверка email (должен содержать символ "@" и ".")
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert('Введите корректный email');
            isValid = false;
        }

        // Проверка номера телефона (11 цифр)
        var phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone)) {
            alert('Введите корректный номер телефона (11 цифр)');
            isValid = false;
        }

        // Проверка выбранной даты (не пустая и не прошедшая)
        const today = new Date();
        const selectedDate = new Date(date);
        if (selectedDate < today) {
            alert('Выберите корректную дату');
            isValid = false;
        }

        // Проверка выбранного времени (не пустое и не прошедшее)
        const currentTime = today.getHours() * 60 + today.getMinutes();
        const selectedTime = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
        if (selectedDate.getTime() === today.getTime() && selectedTime < currentTime) {
            alert('Выберите корректное время');
            isValid = false;
        }

        // Проверка выбранного способа оплаты (не пустое)
        if (payment.trim() == '') {
            alert('Выберите способ оплаты');
            isValid = false;
        }

        // Проверка сообщения (не пустое)
        if (message.trim() == '') {
            alert('Введите вашу тему консультации');
            isValid = false;
        }

        // Если данные не прошли валидацию, прерываем отправку формы
        if (!isValid) {
            return;
        }

        // Создаем подтверждающее сообщение
        const confirmationMessage = `
            Подтвердите введенные данные:
            Имя: ${name}
            Email: ${email}
            Телефон: ${phone}
            Дата: ${date}
            Время: ${time}
            Способ оплаты: ${payment}
            Сообщение: ${message}
        `;

        // Подтверждение отправки формы пользователем
        if (confirm(confirmationMessage)) {
            // Если пользователь подтвердил, отправляем форму
            form.submit();
        }
    });
});

//Изменение цвета форм

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.konsul-form');

    form.addEventListener('mouseover', function() {
        // Изменяем цвет фона формы при наведении
        this.style.backgroundColor = '#5bb8d6';
    });

    form.addEventListener('mouseout', function() {
        // Возвращаем изначальный цвет фона формы, когда курсор уводится с нее
        this.style.backgroundColor = ''; // Вернет изначальный цвет, который был задан в CSS
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const callForm = document.querySelector('.form');

    callForm.addEventListener('mouseover', function() {
        // Изменяем цвет фона формы при наведении
        this.style.backgroundColor = '#5bb8d6';
    });

    callForm.addEventListener('mouseout', function() {
        // Возвращаем изначальный цвет фона формы, когда курсор уводится с нее
        this.style.backgroundColor = ''; // Вернет изначальный цвет, который был задан в CSS
    });
});

//Анимация размера заголовка "Что вам необходимо?"

document.addEventListener('DOMContentLoaded', function() {
    // Получаем первый элемент
    const firstElement = document.querySelector('.main_title');

    // Добавляем анимацию изменения размера
    firstElement.style.transition = 'transform 1s ease-in-out';
    let scale = 1;
    setInterval(function() {
        scale = scale === 1 ? 1.1 : 1;
        firstElement.style.transform = `scale(${scale})`;
    }, 1000);
});