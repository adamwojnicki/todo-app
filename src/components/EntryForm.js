import React, { useState } from "react";

export default ({ handleSubmit }) => {
  const onSubmitClick = (e, text) => {
    e.preventDefault();
    handleSubmit(text);
  };
  const [text, setText] = useState("");
  return (
    <form className="entry-form" onSubmit={(e) => onSubmitClick(e, text)}>
      <input
        className="entry-form__input"
        placeholder="Add details..."
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="entry-form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};
