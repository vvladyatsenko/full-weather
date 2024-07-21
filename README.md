# Express Passport Auth Server + MongoDB Atlas

## Опис

### Цей проект є прикладом сервера на Express.js з використанням Passport для авторизації користувачів та MongoDB Atlas для зберігання даних користувачів. У проекті реалізовані наступні функціональності:

- Реєстрація нових користувачів з хешуванням паролів за допомогою bcryptjs.
- Вхід користувачів у систему з перевіркою пароля.
- Вихід користувачів із системи з знищенням сесії.
- Доступ до захищених маршрутів лише для авторизованих користувачів.
- Зберігання даних користувачів у MongoDB Atlas для централізованого управління та зберігання даних.
- Редагування користувачів.
- Використання курсорів для перебору документів.
- Агрегаційні запити для збору статистичних даних.

## Технології

- Node.js
- Express.js
- Passport.js
- Pug (для шаблонів)
- bcryptjs (для хешування паролів)
- express-session (для управління сесіями)
- MongoDB Atlas (для зберігання даних)
- Mongoose (для роботи з MongoDB)

## Встановлення

- npm install або yarn install

- файл .env вже у кореневій директорії проекту


## Запуск

- npm start або yarn start

`Сервер буде доступний за адресою http://localhost:3000`

## Маршрути

### Маршрути авторизації

`GET /auth/register`<br>
Відображає сторінку реєстрації

`POST /auth/register`<br>
Реєстрація нового користувача. Очікує в тілі запиту поля email та password.

- Приклад запиту:

`curl -X POST http://localhost:3000/auth/register -d "email=user@example.com&password=yourpassword"`<br>

`GET /auth/login`<br>
Відображає сторінку входу<br>

`POST /auth/login`<br>
Авторизація користувача. Очікує в тілі запиту поля email та password.<br>

- Приклад запиту:

`curl -X POST http://localhost:3000/auth/login -d "email=user@example.com&password=yourpassword"`<br>

`GET /auth/logout`<br>
Вихід користувача із системи. Знищує сесію та перенаправляє на головну сторінку.<br>

- Приклад запиту:

`curl http://localhost:3000/auth/logout`<br>

### Захищені маршрути

`GET /protected`<br>
Відображає захищену сторінку, доступну лише авторизованим користувачам. Якщо користувач не авторизований, перенаправляє на сторінку входу.<br>

Приклад запиту:<br>

`curl -c cookies.txt http://localhost:3000/auth/login -d "email=user@example.com&password=yourpassword"`<br>
`curl -b cookies.txt http://localhost:3000/protected`<br>

### Дані користувачів

`GET /cursor`<br>
Відображає сторінку з даними всіх користувачів, використовуючи курсори для перебору документів.<br>

Приклад запиту:<br>

`curl http://localhost:3000/cursor`<br>

### Агрегаційний запит

`GET /aggregation`<br>
Відображає сторінку зі статистичними даними користувачів, зібраними за допомогою агрегаційного запиту.<br>

Приклад запиту:<br>
`curl http://localhost:3000/aggregation`<br>

### Приклади використання

Реєстрація нового користувача:<br>
- Перейдіть за адресою `http://localhost:3000/auth/register`
- Введіть email та пароль для реєстрації нового користувача.

Вхід в систему:<br>
- Перейдіть за адресою `http://localhost:3000/auth/login`
- Введіть email та пароль для входу в систему.
- Ви можете використовувати наступні тестові облікові записи для входу в систему:

1. `user1@example.com` з паролем `password123`
2. `user2@example.com` з паролем `password123`
3. `user3@example.com` з паролем `password123`

Доступ до захищеного маршруту:<br>
- Після успішного входу перейдіть за адресою `http://localhost:3000/protected` для доступу до захищеної сторінки.

Перегляд даних користувачів:<br>
- Перейдіть за адресою `http://localhost:3000/crud` сторінка для редагування користувача.

Перегляд даних користувачів:<br>
- Перейдіть за адресою `http://localhost:3000/cursor` для перегляду списку всіх зареєстрованих користувачів з їх email та датою створення.

Перегляд даних користувачів:<br>
- Перейдіть за адресою `http://localhost:3000/aggregation` для перегляду статистичних даних, таких як загальна кількість користувачів, середня довжина пароля.

## Прогноз погоды с использованием React, TypeScript и Redux Toolki.

> React: Библиотека для построения пользовательских интерфейсов.

> TypeScript: Надстройка JavaScript, обеспечивающая типизацию.

> Redux Toolkit: Упрощенная работа с глобальным состоянием приложения.

> Axios: Библиотека для выполнения HTTP-запросов.

> Moment.js: Библиотека для работы с датами и временем.

> React-Select: Библиотека для создания настраиваемых выпадающих списков.

> CSS Modules: Использование CSS-модулей для стилизации компонентов.

> Смена темы с сохранением в LocalStorage.
___________________________________________________________________



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
