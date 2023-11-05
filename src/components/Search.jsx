import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState(() => {
      return {
        query: event.target.value,
      };
    });
  }

  render() {
    return (
      <input
        placeholder="Cari catatan..."
        onChange={this.searchHandler}
        value={this.state.query}
        type="text"
        id="queryInput"
      />
    );
  }
}

export default Search;
