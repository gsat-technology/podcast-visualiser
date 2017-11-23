import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';


export default class SearchBar extends Component {
  
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
  
    this.setState({
      searchText: searchText,
    })
  
    this.props.onUpdateInput(searchText)
  }

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    })
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Search for podcast"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.props.data}
          openOnFocus={true}
          fullWidth={true}
          animated={false}
          filter={(searchText, key) => true}
        />
      </div>
    );
  }
}