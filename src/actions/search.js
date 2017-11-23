import axios from 'axios'
import { itunes } from '../config/index'

export const constants = {
    NOTHING: 'NOTHING',
    UPDATE_SEARCH_RESULTS: 'UPDATE_SEARCH_RESULTS'
}

const nothing = (text) => ({
    type: constants.NOTHING,
    text
})

const updateSearchResults = (results) => ({
    type: constants.UPDATE_SEARCH_RESULTS,
    results
})

export const searchTermUpdated = (searchTerm) => (dispatch, getState) => {

    axios.get(`${itunes.url}/search`, {
        params: {
          term: searchTerm,
          entity: itunes.entity,
          media: itunes.media,
          limit: 5
        }
    })
    .then(function (response) {
        dispatch(updateSearchResults(response.data.results))
    })
    .catch(function (error) {
      
    })
}