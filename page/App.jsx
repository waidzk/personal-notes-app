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
      searchNotes: null,
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.findNote = this.findNote.bind(this);
  }

  onSearchHandler(searchQuery) {
    let notes = this.state.notes;
    if (searchQuery) {
      this.setState(() => {
        const filteredNotes = notes.filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return {
          searchNotes: filteredNotes,
        };
      });
    } else {
      this.setState({ searchNotes: null, notes: notes });
    }
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

  deleteNoteHandler(noteId) {
    let notes = this.state.notes;
    this.setState(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      return {
        notes: updatedNotes,
      };
    });
  }

  getActiveNotes() {
    let notes = this.state.notes;
    let searchNotes = this.state.searchNotes;
    if (searchNotes) {
      return searchNotes.filter((note) => !note.archived);
    } else {
      return notes.filter((note) => !note.archived);
    }
  }

  getArchiveNotes() {
    let notes = this.state.notes;
    let searchNotes = this.state.searchNotes;
    if (searchNotes) {
      return searchNotes.filter((note) => note.archived);
    } else {
      return notes.filter((note) => note.archived);
    }
  }

  findNote(noteId) {
    this.state.notes.map((note) => {
      if (note.id === noteId) {
        return note;
      }
    });
  }

  onArchiveHandler(noteId, isArchived) {
    let notes = this.state.notes;
    this.setState(() => {
      const updatedNotes = notes.map((note) => {
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
            <Search searchNote={this.onSearchHandler} />
          </div>
          <div className="note-section">
            <ActiveNotes
              notes={this.getActiveNotes()}
              onArchiveHandler={this.onArchiveHandler}
              onDeleteHandler={this.deleteNoteHandler}
            />
            <ArchiveNotes
              notes={this.getArchiveNotes()}
              onArchiveHandler={this.onArchiveHandler}
              onDeleteHandler={this.deleteNoteHandler}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
