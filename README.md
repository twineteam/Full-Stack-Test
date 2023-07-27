# 🎉 Knoetic full stack test

Welcome and congratulations to this round of our full stack coding test. Both **Backend and Frontend** expertise will be tested with an emphasis on the Frontend, particularly **state management** and **Component structure**.

---

### Grading

You will be graded based on the following:

- Code quality
- Strong understanding and application of Software Engineering principles
- Collaboration & communication skills

Our ultimate goal is to access how you work day to day, so apply the same seriousness and processes that you would in a real work environment.

---

## Set up instructions

The full stack test is powered by Node (18.17.0) & Yarn (1.22.19), but fret not if your local versions of these libraries are not compatible. **This project is dockerized.**

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### Building and running the project with node (preferred)

This is preferred since it is faster for hot reload to pick up changes in the files. Let's get started:

1. Install [nvm](https://github.com/nvm-sh/nvm)
2. Install the right version of **Node**

```
nvm install v18.17.0
```

4. Install react-scripts & @nestjs/cli

```
yarn global add @nestjs/cli
yarn global add react-scripts
```

5. Install the packages in both repository and run them locall

```
cd ./frontend
yarn install
yarn start

// In a new terminal (tab)
cd ./backend
yarn install
yarn start:dev
```

#### Building and running the project in Docker (fallback)

This can take up to ~5 minutes.

- If you encounter a "ENOSPC: no space left on device" error, run: `docker system prune` to free up disk space.

```
docker-compose build --parallel
```

Once the images are build, spin up the containers:

```
docker-compose up
```

---

## The test (useful info)

- Google is allowed
- Hot reloading is set up
- You are allowed to introduce any new libraries you need to
- A Trello board will be sent at the start of the test containing our tasks for the session
- Both applications have [lodash](https://lodash.com/) installed as a utility library to help you
- Both applications are written in [Typescript](https://www.typescriptlang.org/)

#### Frontend

- Frontend runs at **port 3000**
- A React application created by create-react-app (not ejected)
- Components are set up with [AntD design](https://ant.design/)
- Network requests are made using [Axios](https://axios-http.com/docs/intro)

#### Backend

- Backend runs at **port 8000**
- Runs using the [NestJS](https://nestjs.com/) framework. It's ok if you are unfamiliar with the framework
- There is no Database, data is being consumed from JSON files in `/data/{data}.json`, a simple func already exists to read data from these files

---
