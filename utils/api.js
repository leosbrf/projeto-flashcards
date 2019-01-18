import { AsyncStorage } from 'react-native'

export const FLASHCARDS_DECKS_STORAGE_KEY = '@flashcards:decks'

export async function getDecks() {

    let response = await AsyncStorage.getItem(FLASHCARDS_DECKS_STORAGE_KEY)

    if (response) {
        const decks = JSON.parse(response)

        return decks
    }

    return null
}

export async function submitDeck({ key, deck }) {
    // console.log('submit deck BEGIN')
    // console.log('key: ', key)
    // console.log('deck: ', deck)
    
    // console.log('submit deck END')
    
    await AsyncStorage.mergeItem(FLASHCARDS_DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))
}

export async function resetStorage() {
    await AsyncStorage.clear()
}

const dummyData = {
    '1': {
        title: 'Deck 1'
    },
    '2': {
        title: 'Deck 2'
    },
    '3': {
        title: 'Deck 3',
        cards: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    }
}