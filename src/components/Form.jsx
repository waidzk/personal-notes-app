import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  bodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          placeholder="Judul Catatan"
          onChange={this.titleHandler}
          value={this.state.title}
          type="text"
          id="titleInput"
        />
        <textarea
          placeholder="Tulis catatanmu disini..."
          onChange={this.bodyHandler}
          value={this.state.body}
          id="bodyInput"
          cols="30"
          rows="10"
        ></textarea>
        <button className="btnSubmit" type="submit">
          Buat Catatan
        </button>
      </form>
    );
  }
}

export default Form;
