export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SUBMIT_DECK = 'SUBMIT_DECK'


//flux-standard-action: https://github.com/acdlite/flux-standard-action
export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        payload: decks
    }
}

export const submitDeck = (deck) => {
    return {
        type: SUBMIT_DECK,
        payload: deck
    }
}