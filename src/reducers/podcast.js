import { constants } from '../actions/search'
//import { podcast } from '../data/podcast'

const initialState = {
}

//const initialState = podcast

export default function search (state = initialState, action) {
    switch (action.type) {
        
        case constants.SET_PODCAST_DETAIL:
          return action.podcastDetail
        default:
          return state
    }
}
