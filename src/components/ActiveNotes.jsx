import React from "react";
import { showFormattedDate } from "../utils";

function ActiveNotes({ notes, onArchiveHandler }) {
  
  return (
    <div className="active-notes">
      <h2 className="title-note-section">Catatan Aktif</h2>
      <div className="notes">
        {notes.map((note, i) => (
          <div className="card" key={i}>
            <div className="detail">
              <h2 className="title-note">{note.title}</h2>
              <span className="date-note">
                {showFormattedDate(note.createdAt)}/
                {note.archived ? "Archived" : "Active"}
              </span>
              <div className="body-note">
                <p>{note.body}</p>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-delete-note">Hapus</button>
              <button
                className="btn-archive-note"
                onClick={() => onArchiveHandler(note.id, note.archived)}
              >
                Arsipkan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveNotes;
