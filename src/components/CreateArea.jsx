import React, { useState } from "react";

function CreateArea(props) {
  const [expand, setExpand] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpand(false);
    event.preventDefault();
  }
  function Expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand ===true && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={Expand}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ===true ? "3" : "1"}
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
