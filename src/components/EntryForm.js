import React from "react";

export default () => {
  return (
    <form className="entry-form">
      <input
        className="entry-form__input"
        placeholder="Add details..."
        type="text"
      />
      <button className="entry-form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};
