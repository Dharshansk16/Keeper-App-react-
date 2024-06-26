import Header from "./components/Header";
import Footer from "./components/Footer";
import "../src/style.css";
import AddCard from "./components/AddCard";
import React from "react";
import Notes from "./components/Notes";

export default function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return id !== index;
      });
    });
  }
  function displayNotes(n, index) {
    return (
      <Notes
        id={index}
        key={index}
        title={n.title}
        content={n.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      <AddCard buttonText="Add" onAdd={addNote} />
      {notes.map(displayNotes)}
      <Footer />
    </div>
  );
}
