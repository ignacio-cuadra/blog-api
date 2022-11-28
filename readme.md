# Blog API
Blog API Challenge - TCIT (web solutions)

This repository is the Front End of Blog Challenge, if you wanna see the back end check this url [https://github.com/ignacio-cuadra/blog-app](https://github.com/ignacio-cuadra/blog-app)

## This project has
✔️ Infrastructure and Domain separated*

✔️ Migrations

✔️ Factories

✔️ Seeders

✔️ Tests

## Initialice and start project

### Initialization

First configure the .env file. Copy ```.env.example``` and paste with name the ```.env```, then set api port and PostgreSQL connectiondata.

```cmd
npm install
npm run migrate
npm run seed
```

### Test project
```cmd
npm run test
```

### Start project
```cmd
npm start
```

### Dev project
```cmd
npm run dev
```

## API Documentation

| Actions     | Route             | Method | Body                                                    |
| :---------- | :---------------- | :----- | :------------------------------------------------------ |
| Lists Posts | /api/v1/posts     | GET    |                                                         |
| Create Pots | /api/v1/posts     | POST   | ```{id: uuid, name: varchar(255), description: text}``` |
| Delete Post | /api/v1/posts/:id | DELETE |                                                         |