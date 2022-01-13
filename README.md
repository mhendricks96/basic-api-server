# basic-api-server

Built a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

[Deployment URL](https://myy-basic-api-server.herokuapp.com/)

## Installation

- `git clone https://github.com/mhendricks96/basic-api-server.git`

- `cd basic-api-server`

- `nmp install`

## Usage

- start server: `npm start`

- test server: `npm test`

## Routes

- GET: `/`: home route

- Post/get/put/delete: `/record`: CRUD capabilites to create, update, delete a record

- Post/get/put/delete: `/artist`: CRUD capabilites to create, update, delete an artist

### /record

- contains string: title

- contains string: artist

contains integer: year

### /artist

- contains string: name

- contains string: genre