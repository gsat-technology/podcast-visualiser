import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { searchTermUpdated, itemSelected } from '../actions/search'


const Search = ({ searchTermUpdated, itemSelected, results }) => {

    const collectionNames = results.map((item) => item.collectionName)

    return (
        <SearchBar 
          data={collectionNames} 
          onUpdateInput={(searchTerm) => searchTermUpdated(searchTerm)}
          onItemSelected={(selectedItem) => itemSelected(selectedItem)}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    searchTermUpdated: (searchTerm) => dispatch(searchTermUpdated(searchTerm)),
    itemSelected: (selectedItem) => dispatch(itemSelected(selectedItem))
})

const mapStateToProps = state => ({
    results: state.search.results
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)