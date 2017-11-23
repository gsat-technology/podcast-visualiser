import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { searchTermUpdated } from '../actions/search'


const Search = ({ searchTermUpdated, results }) => {

    const collectionNames = results.map((item) => item.collectionName)

    return (
        <SearchBar 
          data={collectionNames} 
          onUpdateInput={(searchTerm) => searchTermUpdated(searchTerm)}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    searchTermUpdated: (searchTerm) => dispatch(searchTermUpdated(searchTerm)),
})

const mapStateToProps = state => ({
    results: state.search.results
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)