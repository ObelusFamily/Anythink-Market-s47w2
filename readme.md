# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Make sure you've installed [Docker](https://docs.docker.com/get-docker/).
   You can verify your installation with `docker -v` and `docker-compose -v`
2. Clone the repository with Git
3. In a root directory of the repository, run `docker-compose up`.
4. Check the backend is working with database, connect to [http://localhost:3000/api/ping](http://localhost:3000/api/ping)
5. Then, check the frontend is working with backend, connect to [http://localhost:3001/register](http://localhost:3001/register) and register a new user
6. That's it. All done!