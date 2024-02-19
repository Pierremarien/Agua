# Agua-project

Projet en monorepo contenant 2 application frontend liee a un microservice backend.

```bash
pnpm i

docker compose up # initiate the docker container for the postgresql db

#to add a depedency anywhere in the project you need to add the name of any app or package in the project then your command always with the -w flag examples

pnpm client add -Dw tailwindcss

pnpm client add -w react

pnpm dev #to start both frontend apps add the type checking from utils library and also add live reload of the ui library 

pnpm serv #start the backend connection 
```