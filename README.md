# Want A Burger

[![IMAGE ALT TEXT HERE](public/assets/img/noun_Burger_2387181.png)](https://sleepy-lowlands-87914.herokuapp.com/)

### Getting Started

Type in the name of any burger that you wish to be placed on the menu to be eatten or select an option that has already been prepared for you!

Access the live webapp: [Want a Burger](https://sleepy-lowlands-87914.herokuapp.com/)

## Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [About the Developer](#aboutthedeveloper)

---

### Technologies

| Backend    | Frontend     |
| ---------- | ------------ |
| Node       | Javascript 6 |
| MySQL      | HTML5        |
| Handlebars | CSS3         |
| Express    | jQuery 3.4.1 |
| JAWSDB     |              |
| Nodemon    |              |
| ORM        |              |

---

### Installation

#### Prerequisites

You must have the following installed to run Want A Burger:

- [Node](https://nodejs.org/en/)
- [MySQL Workbench](https://dev.mysql.com/doc/)

#### Run on your local computer

Clone or fork repository:

    $ git clone git@github.com:Maserallm/burgers.git

CD into burgers folder

```
$ cd burgers
```

Install dependencies:

```
$ npm install
```

Initialize database:

```
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR
    (40) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
);
```

Run the app with node or nodemon from the command line

```
$ nodemon server
```

Open folder in code editor and inspect files.

---

### <a href="aboutthedeveloper">About the Developer</a>

Want A Burger creator/designer:

[<img src="https://avatars0.githubusercontent.com/u/53875404?s=460&u=31a5f360d71e4f0a1fa4dfd8db38ed44f27fa10b&v=4" height="70px" width="70px">](https://github.com/maserallm)<br>
[Maserall Marcelin](https://github.com/maserallm) is an Inventory Analyst at Publix Supermarkets, Inc. turned software developer. He can be found on [LinkedIn](https://www.linkedin.com/in/maserall-marcelin-76067a12b/) and [Github](https://github.com/maserallm).

Thank you to Astoe Design for creating the svg burger images that was used from the Noun Project.
