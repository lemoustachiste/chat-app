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

## Starting the server

```
    cd server
    yarn start
```

## Running the tests

```
    yarn test
```

# Overview
React/Redux app. All business logic is handled by the domain.
Components are structured according to the atomic design approach.
CSS follows ITCSS approach.


# Missing items or improvements
- Chat view does not occupy the screen as human friendly as it could.
- No production build/mode is available
- No extra behaviours where added, so to be done one day
- refactors here and there to improve level of encapsulation and maintainability (check for availability of socket, check for availability of server, using selectors in tests...)