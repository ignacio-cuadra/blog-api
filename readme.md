# Blog API
Blog API Challenge - TCIT (web solutions)

This repository is the Back End of a blog challenge, if you wanna see the Front End visit this url [https://github.com/ignacio-cuadra/blog-app](https://github.com/ignacio-cuadra/blog-app)

## This project has
✔️ Infrastructure and Domain separated*

✔️ Migrations

✔️ Factories

✔️ Seeders

✔️ Tests

## Initialice and start project

### Initialization

Copy ```.env.example``` and paste with the name ```.env```, then set api port and PostgreSQL connection data.

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