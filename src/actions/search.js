import axios from 'axios'
import { itunes } from '../config/index'
import http from 'http'
import feedme from 'feedme'


export const constants = {
    NOTHING: 'NOTHING',
    UPDATE_SEARCH_RESULTS: 'UPDATE_SEARCH_RESULTS',
    SET_PODCAST_SELECTED: 'SET_PODCAST_SELECTED',
    SET_PODCAST_DETAIL: 'SET_PODCAST_DETAIL'
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

const setPodcastSelected = podcast => ({
    type: constants.SET_PODCAST_SELECTED,
    podcast
})


const setPodcastDetail = podcastDetail => ({
    type: constants.SET_PODCAST_DETAIL,
    podcastDetail
})

export const itemSelected = (selectedItem) => (dispatch, getState) => {
    
    const { search } = getState()

    const podcast = search.results.find(item => item.trackName === selectedItem)

    dispatch(setPodcastSelected(podcast))

    http.get(podcast.feedUrl, (res) => {
        var parser = new feedme(true);
        res.pipe(parser);
        parser.on('end', () => {
          dispatch(setPodcastDetail(parser.done()))
        });
      });
}
