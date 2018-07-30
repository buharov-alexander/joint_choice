# Joint choice
It is an application to track your own movie checklist. To get information about movies it uses the API service [themoviedb](https://www.themoviedb.org/documentation/api "themoviedb").

#### Backend
- Spring-boot
- PostgreSQL

#### Frontend
- React native application
- Redux

### Run backend
Go to the `joint_choice_service` folder.
Command to build and run the backend - `./mvnw spring-boot:run`.
Script to init a database: `joint_choice_service/docker/database/init.sql`

Command to build docker image - `./mvnw install dockerfile:build`
Config to run docker containers with database and service is placed in the `joint_choice_service/docker`. Command to run  - `docker-compose up -d`.

### Run frontend
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app "Create React Native App").

Run app in development mode: `npm run`
Build app for android: `exp build:android`
