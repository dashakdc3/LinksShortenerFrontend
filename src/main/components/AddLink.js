import React, { useRef } from "react";
import classes from "./AddLink.module.css";

function AddLink(props) {
  const initial_url = useRef("");

  function submitHandler(event) {
    const link = {
      initial_url: initial_url.current.value,
    };

    props.onShortLink(link);
    document.getElementById("title").value = "";
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title" className={classes.name}>
          Initial Url
        </label>
        <input type="text" id="title" ref={initial_url} />
      </div>
      <button className={classes.btn}>Short the Link</button>
    </form>
  );
}

export default AddLink;
