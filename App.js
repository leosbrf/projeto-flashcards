import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import { orange } from './utils/colors'
import { Container } from './routes'
import store from './store'

const FlashcardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={orange} barStyle='light-content' />
          <Container />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
