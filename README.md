# projeto-leitura

This is a sample application built with ReactJs. It is a flashcard like app that allows you to create decks and cards for Q&A. The user can add and remove cards from a deck and start a quiz. After finishing a quiz, the user can view his grade.

## Structure

The application is a React Native Application that uses `redux`, `react-navigation`, `local notifications` and `AsyncStorage`. 

The `actions` and the `reducers` folder contains the actions and reducers for this app. 

The `utils` folder contains the API for the AsyncStorage as well the notifications settings.

The `views` folder contains the screens for handling the User Interface.


## Install from source

### Requirements
> - You must have node installed on your machine
> - You must install npm or yarn

To run this project, follow the below instructions. (If you have `yarn` installed on your machine, replace `npm` with `yarn`)

1. Clone this github repository

```Apache
$ git clone https://github.com/leosbrf/projeto-flashcards.git
```

2. Now, go to the `projeto-flashcards` folder and execute:

```Apache
$ cd projeto-flashcards
$ yarn install
$ yarn start
```

To run the app, grab your device and scan the QRCode generated on your monitor. You must have expo client installed on your mobile device.

## Testing

This app was developed and tested using the IOS platform and [expo](https://expo.io/).

## License

The contents of this repository are covered under the [MIT License](https://github.com/leosbrf/projeto-flashcards/blob/master/LICENSE).

