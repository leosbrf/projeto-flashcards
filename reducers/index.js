import { RECEIVE_DECKS, SUBMIT_DECK } from '../actions'

const decks = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.payload
            }
        case SUBMIT_DECK:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default decks