import { constants } from '../actions/search'

const initialState = {
    results: [],
    rss: {}
}

export default function search (state = initialState, action) {
    switch (action.type) {
        case constants.UPDATE_SEARCH_RESULTS:
          return {
              ...state,
              results: action.results
          }
        case constants.SET_RSS:
          return {
              ...state,
              rss: action.rss
          }
        case constants.SET_PODCAST_SELECTED:
          return {
              ...state,
              podcast: action.podcast
          }
        default:
          return state
    }
}
