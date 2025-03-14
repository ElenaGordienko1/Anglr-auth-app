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

Клонируйте репозиторий и выполните команду в корневой папке проекта:

```sh
git clone https://github.com/ElenaGordienko1/Anglr-auth-app.git
cd angular-auth-app/docker
docker-compose up --build -d
```
Приложение будет доступно по адресу http://localhost:4300.

## При заполнении формы авторизации и успешном запросе:

Введённые данные (email и пароль) валидируются согласно заданным правилам.
После успешной авторизации выводится сообщение: Welcome, {name}! в консоли.

### Пример успешного ответа:

```sh
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "name": "Steven Seagull"
  }
}
```

### Пример неуспешного ответа:
```sh
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
```

## Разработчик
Гордиенко Елена
