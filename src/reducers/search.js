import { constants } from '../actions/search'

const initialState = {
    results: []
}

export default function search (state = initialState, action) {
    switch (action.type) {
        case constants.UPDATE_SEARCH_RESULTS:
          return {
              ...state,
              results: action.results
          }
        default:
          return state
    }
}
