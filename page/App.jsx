import React from "react";
import { getInitialData } from "../src/utils";

import Header from "../src/components/Header";
import Form from "../src/components/Form";
import Search from "../src/components/Search";
import ActiveNotes from "../src/components/ActiveNotes";
import ArchiveNotes from "../src/components/ArchiveNotes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.findNote = this.findNote.bind(this);
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  getActiveNotes() {
    let notes = this.state.notes;
    return notes.filter((note) => !note.archived);
  }

  getArchiveNotes() {
    let notes = this.state.notes;
    return notes.filter((note) => note.archived);
  }

  findNote(noteId) {
    this.state.notes.map((note) => {
      if (note.id === noteId) {
        return note;
      }
    });
  }

  onArchiveHandler(noteId, isArchived) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === noteId) {
          return {
            ...note,
            archived: !isArchived,
          };
        }
        return note;
      });

      return {
        notes: updatedNotes,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="form-section">
            <Form addNote={this.addNoteHandler} />
          </div>
          <div className="search-section">
            <Search />
          </div>
          <div className="note-section">
            <ActiveNotes
              onArchiveHandler={this.onArchiveHandler}
              notes={this.getActiveNotes()}
            />
            <ArchiveNotes
              onArchiveHandler={this.onArchiveHandler}
              notes={this.getArchiveNotes()}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
