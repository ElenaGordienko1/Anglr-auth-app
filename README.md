# Angular Authentication App
Тестовое задание для фронтенд разработчика, выполненное с использованием Angular 18/19 и организации проекта через NX Monorepo.
Приложение реализует форму авторизации с валидацией, а также поддерживает переключение между светлой и темной темами.

##Требования
###Docker Compose:

Для запуска проекта используется Docker и Docker Compose.
Включены все необходимые конфигурации Docker (Dockerfile и docker-compose.yml).
Технологии:

###Angular 18/19
###NX Monorepo
###SCSS для стилизации (без использования Tailwind, Material UI и других библиотек компонентов).
##Функционал:

Форма авторизации с полями для email и пароля.
Валидация для email и пароля с кастомными валидаторами.
Переключение тем (светлая/темная) с сохранением выбранной темы.
Адаптивный дизайн.
##Старт проекта
1. Клонировать репозиторий
bash
git clone https://github.com/your-username/angular-auth-app.git
bash
cd angular-auth-app
3. Запуск приложения через Docker Compose
Приложение использует Docker Compose для развёртывания. Для запуска выполните следующую команду в корневой папке проекта:
bash
docker-compose up --build -d
Приложение будет доступно по адресу http://localhost:4300.

##При заполнении формы авторизации и успешном запросе:

Введённые данные (email и пароль) валидируются согласно заданным правилам.
После успешной авторизации выводится сообщение: Welcome, {name}! в консоли.
Если запрос неуспешен, то ошибки будут отображаться в консоли.

Пример успешного ответа:

json
Копировать
Редактировать
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "name": "Steven Seagull"
  }
}
Пример неуспешного ответа:

json
Копировать
Редактировать
{
  "errors": {
    "email": [
      "Invalid email address."
    ],
    "password": [
      "This value is too short. It should have 6 characters or more.",
      "The password must contain lowercase letter, uppercase letter, number and special character."
    ]
  }
}

##Разработчик
Гордиенко Елена
