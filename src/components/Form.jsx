import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      titleLimit: 50,
      body: "",
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.titleLimit),
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
    this.setState({
      title: "",
      body: "",
    });
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
          required
        />
        <span className="title-limit">
          {this.state.titleLimit - this.state.title.length}
        </span>
        <textarea
          placeholder="Tulis catatanmu disini..."
          onChange={this.bodyHandler}
          value={this.state.body}
          id="bodyInput"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button className="btnSubmit" type="submit">
          Buat Catatan
        </button>
      </form>
    );
  }
}

export default Form;
