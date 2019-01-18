export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SUBMIT_DECK = 'SUBMIT_DECK'

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const submitDeck = (deck) => {
    return {
        type: SUBMIT_DECK,
        deck
    }
}