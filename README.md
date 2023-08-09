# E-Commerce Backend

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This application creates an e-commerce express API that communicates with a MySQL database. The application allows the storage of products, categories, and tags and creates associations between them.

### SQL Tables

- Product
  - id
  - product_name
  - price
  - stock
  - category_id
- Category
  - id
  - category_name
- Tag
  - id
  - tag_name
- ProductTag
  - id
  - product_id
  - tag_id

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

Clone the [repository](https://github.com/GormanBrian/e-commerce-backend).

```
$ git clone git@github.com:GormanBrian/e-commerce-backend.git
```

Install the node modules.

```console
$ npm i
```

Install [nodemon](https://www.npmjs.com/package/nodemon) if you do not already have it.

```console
$ npm i -g nodemon
```

## Usage

```console
$ npm run watch
```

After the server has started insert the seeds.

```console
$ npm run seed
```

### Examples

#### Create

- `POST http://localhost:3001/api/categories/`
  ```json
  {
    "category_name": "Sweatshirts"
  }
  ```
- `POST http://localhost:3001/api/tags/`
  ```json
  {
    "tag_name": "rap music"
  }
  ```
- `POST http://localhost:3001/api/products/`
  ```json
  {
    "product_name": "Graphic T-Shirt",
    "price": 17.99,
    "stock": 20,
    "category_id": 1,
    "tagIds": [1, 2]
  }
  ```

#### Read All

- `GET http://localhost:3001/api/categories/`
- `GET http://localhost:3001/api/tags/`
- `GET http://localhost:3001/api/products/`

#### Read by ID

- `GET http://localhost:3001/api/categories/1`
- `GET http://localhost:3001/api/tags/3`
- `GET http://localhost:3001/api/products/6`

#### Update

- `PUT http://localhost:3001/api/categories/1`
  ```json
  {
    "category_name": "Hoodies"
  }
  ```
- `PUT http://localhost:3001/api/tags/7`
  ```json
  {
    "tag_name": "electronic music"
  }
  ```
- `PUT http://localhost:3001/api/products/3`
  ```json
  {
    "price": 15.99,
    "stock": 18
  }
  ```

#### Delete

- `DELETE http://localhost:3001/api/categories/1`
- `DELETE http://localhost:3001/api/tags/3`
- `DELETE http://localhost:3001/api/products/6`

## Questions

- [Github](https://github.com/gormanbrian)
- [Email](mailto:briangorman99@gmail.com)

## License

[License: ISC](https://opensource.org/licenses/ISC)
