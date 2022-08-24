# Notes App NodeMongo

This is a basic Web application to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and other related technologies. Tecnically this is a Multi-Page Application using Handlebars as template engine.

This app can do:

- CRUD Operations: create/read/update/delete Notes
- Allows a user to do login and save his personal notes


![](docs/screenshot.png)

### Installation

```sh
git clone https://github.com/FaztTech/nodejs-notes-app
cd nodejs-notes-app
npm i
npm run dev # run in development mode
npm start # run in production mode
```

> You need to have Mongodb installed Locally or stablish a MONGODB_URI environment variable in order to connect to any mongodb instance (using Mongodb Atlas for example)

### Environment Variables

This app needs the following environment Variables

- `MONGODB_URI` this is the Mongodb URI string
- `PORT` the server http port for the application
- `NODE_ENV` node environment

### docker-compose

The most easy way to install the entire project is using docker-compose:

```shell
git clone https://github.com/FaztTech/nodejs-notes-app
cd nodejs-notes-app
docker-compose up
```

### Default User

when the app is lauched, this will create an Admin user with the following credentials:

- email: `admin@localhost`
- password: `adminpassword`

### Tutorial

This app was created with educational purposes, so you can found the tutorials in the following links:

- [Version 2](https://www.youtube.com/playlist?list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy), new tutorial made in 2020
  and these are old tutorials about this app
- [Version 1.0.0](https://youtu.be/-bI0diefasA)
