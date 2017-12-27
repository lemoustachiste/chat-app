Chat Application

# Setup

use yarn to install:

```
    yarn install
```

then you will need to install the server's dependencies too:

```
    cd server
    yarn install
```

## Starting the application

```
    yarn start
```
Application runs on port 3000

## Starting the server

```
    cd server
    yarn start
```
Server runs on port 3001

## Running the tests

```
    yarn test
```

# Overview
React/Redux app. All business logic is handled by the domain.
Components are structured according to the atomic design approach.
CSS follows ITCSS approach.


# Missing items or improvements
- [ ] Chat view does not occupy the screen as human friendly as it could.
- [ ] No production build/mode is available yet.
- [ ] No extra behaviours were added, so to be done one day
- [ ] refactors here and there to improve level of encapsulation and maintainability (check for availability of socket, check for availability of server, using selectors in tests...)
