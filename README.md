# E-Commerce Back End

## Description
This application was an opportunity for me to explore setting up a very simple, hypothetical back-end for an e-commerce platform. This application was created using Express.js API routes and a MySQL database, and I tested my routes using Insomnia.

[![E-Commerce Back End Walk Through](https://res.cloudinary.com/marcomontalbano/image/upload/v1642381169/video_to_markdown/images/vimeo--666592191-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://vimeo.com/666592191 "E-Commerce Back End Walk Through")


## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Installation
If you would like to install this application locally, start by cloning this repository. Next, in your CLI, enter `npm i` to install dependencies, and make sure to save dotenv, express, mysql, and sequelize. This can be checked by looking in your package.json file. Enter your own MySQL login information in the .env file. Create the database schema by opening your MySQL shell, entering `source db/schema.sql;` and then `exit` to exit the shell. Next, you will seed the database by calling `npm run seed`, and you will connect to the server by calling `npm start`. 

## Technologies Used
- Express.js
- MySQL
- Sequelize

## License
This project is licensed under the MIT license.