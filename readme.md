# Blog API
Blog API Challenge - TCIT (web solutions)

## Initialice and start project

### Initialization
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