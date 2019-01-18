import { RECEIVE_DECKS, SUBMIT_DECK } from '../actions'

const decks = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case SUBMIT_DECK:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default decks