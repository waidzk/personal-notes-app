import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    this.props.searchNote(searchQuery);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={this.handleSearchChange}
        id="queryInput"
      />
    );
  }
}

export default Search;
