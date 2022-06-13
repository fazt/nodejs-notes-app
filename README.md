# Notes App NodeMongo

This is a basic App to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and other related technologies.

This app can do:

- CRUD Operations: create/read/update/delete Notes
- Allows a user to do login and save his personal notes

# Screenshot

![](docs/screenshot.png)

# Environment Variables

This app needs the following environment Variables

- `MONGODB_URI` this is the Mongodb URI string
- `PORT` the server http port for the application
- `NODE_ENV` node environment

# Docker

you can run a container for development

```shell
npm install
docker-compose up
```

## Default User

when the app is lauched, this will create an Admin user with the following credentials:

- email: admin@localhost
- password: adminpassword