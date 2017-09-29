import React from 'react';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  updateSearchInput(field) {
    return (e) => {
      this.props.searchForUser(e.target.value);
      this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchRes !== this.props.searchRes) {
      this.props.setSearchState(nextProps.searchRes, this.state.search);
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.search} onChange={this.updateSearchInput("search")}
          className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    );
  }
}

export default Search;
