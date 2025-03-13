# Angular Authentication App
Тестовое задание для фронтенд разработчика, выполненное с использованием Angular 18/19 и организации проекта через NX Monorepo.
Приложение реализует форму авторизации с валидацией, а также поддерживает переключение между светлой и темной темами.

## Требования

### Docker Compose:

Для запуска проекта используется Docker и Docker Compose.
Включены все необходимые конфигурации Docker (Dockerfile и docker-compose.yml).

### Технологии:

Angular 18/19

NX Monorepo

SCSS для стилизации.

## Функционал:

Форма авторизации с полями для email и пароля.
Валидация для email и пароля с кастомными валидаторами.
Переключение тем (светлая/темная) с сохранением выбранной темы.
Адаптивный дизайн.

## Запуск проекта через Docker
1. git clone https://github.com/your-username/angular-auth-app.git
2. cd angular-auth-app
3. docker-compose up --build -d
4. Приложение будет доступно по адресу http://localhost:4300.

## При заполнении формы авторизации и успешном запросе:

Введённые данные (email и пароль) валидируются согласно заданным правилам.
После успешной авторизации выводится сообщение: Welcome, {name}! в консоли.
Если запрос неуспешен, то ошибки будут отображаться в консоли.

### Пример успешного ответа:

{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "name": "Steven Seagull"
  }
}

### Пример неуспешного ответа:
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

## Разработчик
Гордиенко Елена
