import React from "react";
import { showFormattedDate } from "../utils";

function ArchiveNotes({ notes, onArchiveHandler }) {
  return (
    <div className="archive-notes">
      <h2 className="title-note-section">Arsip</h2>
      <div className="notes">
        {notes.length !== 0 ? (
          notes.map((note, i) => (
            <div className="card" key={i}>
              <div className="detail">
                <h2 className="title-note">{note.title}</h2>
                <span className="date-note">
                  {showFormattedDate(note.createdAt)}
                </span>
                <div className="body-note">
                  <p>{note.body}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button
                  className="btn-delete-note"
                  onClick={() => onDeleteHandler(note.id)}
                >
                  Hapus
                </button>
                <button
                  className="btn-archive-note"
                  onClick={() => onArchiveHandler(note.id, note.archived)}
                >
                  Aktifkan
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}

export default ArchiveNotes;
