This repository reproduces thee bug in [cypress](https://www.cypress.io/)

## Steps to reproduce

First, install dependencies:

```bash
yarn
```

then build and start the app:

```bash
yarn build && yarn start
```

In another terminal run cypress tests:

```bash
yarn cypress open # or yarn cypress run
```

and see the bug (if it passes try rerun it couple times)
