import { constants } from '../actions/search'

const initialState = {
    results: [],
    podcast: {},
    rss: {}
}

export default function search (state = initialState, action) {
    switch (action.type) {
        case constants.UPDATE_SEARCH_RESULTS:
          return {
              ...state,
              results: action.results
          }
        case constants.SET_ITEM_SELECTED:
          return {
              ...state,
              podcast: action.podcast
          }
        case constants.SET_RSS:
          return {
              ...state,
              rss: action.rss
          }
        default:
          return state
    }
}
