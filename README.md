## Expo template with React Native Paper ##

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Template to build cross-platform apps using react with typescript in expo. Pre configured with the React Native Paper Ui kit, redux, and eslint with prettier.

### Plugins to work with this template ###
[Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[Typescript import sorter](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter)

### Project dependencies and dev dependencies ###
#### Dependencies ####
[axios](https://github.com/axios/axios)
[date-fns](https://date-fns.org)
[expo](https://docs.expo.io)
[formik](https://formik.org)
[i18n-js](http://i18njs.com)
[jwt-decode](https://github.com/auth0/jwt-decode)
[polished](https://polished.js.org)
[react](https://reactjs.org/docs/getting-started.html)
[react-native](https://reactnative.dev/docs/getting-started)
[react-native-dotenv](https://github.com/zetachang/react-native-dotenv)
[react-native-paper](https://callstack.github.io/react-native-paper)
[react-native-svg](https://github.com/react-native-svg/react-native-svg)
[react-native-web](https://necolas.github.io/react-native-web/docs)
[react-navigation](https://reactnavigation.org/docs/getting-started)
[redux](https://redux.js.org)
[redux-saga](https://redux-saga.js.org/)
[typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
[yup](https://github.com/jquense/yup)
#### Dev dependencies ####
[babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
[eslint](https://eslint.org)
[jest](https://jestjs.io)
[miragejs](https://miragejs.com)
[prettier](https://prettier.io)
[react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
[react-test-renderer](https://reactjs.org/docs/test-renderer.html)
[reactotron](https://github.com/infinitered/reactotron)
[typescript](https://www.typescriptlang.org)

### Project structure ###
```bash
.
├── assets
├── .vscode
│   └── settings.json
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── contexts
│   │   └── PaperProvider
│   ├── hooks
│   ├── lang
│   │   └── locales
│   ├── routes
│   ├── screens
│   │   └── App
│   │       └── HomeScreen
│   ├── server
│   ├── services
│   ├── store
│   │   └── ducks
│   │       ├── auth
│   │       ├── config
│   │       └── reduxPersistor
│   ├── theme
│   ├── @types
│   └── utils
├── .editorconfig
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── app.json
├── App.tsx
├── babel.config.js
├── metro.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```
