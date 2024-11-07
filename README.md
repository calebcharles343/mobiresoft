# Store-Manager
Store Manager is a web application that helps store owners manage sales and product inventory records.

[![Build Status](https://travis-ci.com/TheDrizzyWay/Store-Manager.svg?branch=develop)](https://travis-ci.com/TheDrizzyWay/Store-Manager)[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/TheDrizzyWay/Store-Manager/maintainability)[![Coverage Status](https://coveralls.io/repos/github/TheDrizzyWay/Store-Manager/badge.svg?branch=develop)](https://coveralls.io/github/TheDrizzyWay/Store-Manager?branch=develop)

## Store Manager API

Version 1 (v1) of the Store-Manager API is hosted on Heroku at: [https://safe-temple-72859.herokuapp.com/api/v1](https://safe-temple-72859.herokuapp.com/api/v1) and has the following endpoints;

### Users Endpoints

| Endpoint                 | Request Method | Parameters  |
| ------------------------ |:--------------:| :----------:|
| /api/v1/users            | GET            |             |
| /api/v1/users/:userId    | GET            |  userId     |
| /api/v1/users            | POST           |             |
| /api/v1/users/:userId    | PUT            |  userId     |
| /api/v1/users/:userId    | DELETE         |  userId     |                          
| /api/v1/users/login      | POST           |             |
| /api/v1/users/logout     | GET            |             |
### Product Endpoints

| Endpoint                       | Request Method | Parameters  |
| ------------------------------ |:--------------:| :----------:|
| /api/v1/products               | GET            |             |
| /api/v1/products/:productId    | GET            |  productId  |
| /api/v1/products               | POST           |             |
| /api/v1/products/:productId    | PUT            |  productId  |
| /api/v1/products/:productId    | DELETE         |  productId  |


### Sales Endpoints

| Endpoint                 | Request Method | Parameters  |
| ------------------------ |:--------------:| :----------:|
| /api/v1/sales            | GET            |             |
| /api/v1/sales/:saleId    | GET            |   saleId    |
| /api/v1/users            | POST           |             |

### Project Management
This project is managed with Pivotal Tracker and can be found [here](https://www.pivotaltracker.com/n/projects/2203166)
