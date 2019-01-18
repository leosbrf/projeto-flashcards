import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import DecksList from './views/DecksList'
import NewDeck from './views/NewDeck'
import Deck from './views/Deck'
import AddCard from './views/AddCard'
import Quiz from './views/Quiz'
import QuizResult from './views/QuizResult'
import { orange, white } from './utils/colors'

const TabNavigator = createBottomTabNavigator({
    DecksList: {
      screen: DecksList,
      navigationOptions: {
        tabBarLabel: 'My Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-playing-outline' size={30} color={tintColor} />
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Create Deck',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name='playlist-add' size={30} color={tintColor} />
      }
    }
  }, {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        activeTintColor: orange,
        style: {
          height: 56,
          backgroundColor: white,
          shadowColor: 'rgba(0,0,0,0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
        }
      }
    })
  
  const StackNavigator = createStackNavigator({
    Home: {
      screen: createAppContainer(TabNavigator),
      navigationOptions: {
        title: 'Home'
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        title: 'Deck'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz'
      }
    },
    QuizResult: {
      screen: QuizResult,
      navigationOptions: {
        title: 'Quiz Results'
      }
    }
  })
  
  export const Container = createAppContainer(StackNavigator)