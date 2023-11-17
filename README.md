# Project Game Spaceship

Spaceship game written in JS and Java spring boot

view Online: https://bilkadev.github.io/Game-spaceship/

Demo account:
```
test@example.com
123456
```


## Tech Stack

**Client:** Vanilia Js

**Server:** Java, Spring boot, Spring boot security.


## How to run

Run database example db is in docker-compose
```
docker-compose up
```
```
SET ENV:

SERVER_PORT: 8081
DB_HOST=localhost; 
DB_NAME=spaceship_db;
DB_PASSWORD=password;
DB_PORT=3306;
DB_TYPE=mysql;
DB_USER=root;
```
```bash
mvn clean install
mvn spring-boot:run

OPEN index.html in ./client

```
    
## Demo

Game

![game](https://github.com/BilkaDev/Game-spaceship/blob/master/docs/game-page.png)

Login

![login](https://github.com/BilkaDev/Game-spaceship/blob/master/docs/login-page.png)

Ranking the best of 100 players

![ranking](https://github.com/BilkaDev/Game-spaceship/blob/master/docs/ranking-page.png)

Menu

![menu](https://github.com/BilkaDev/Game-spaceship/blob/master/docs/menu-page.png)
