import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
  return (
    <li className={classes.movie}>
      <h2>
        Initial url:
        <a href={props.initial_url}>
          <h3>{props.initial_url}</h3>
        </a>
      </h2>
      <h2>
        New url:
        <a href={props.new_url}>
          <h3>{props.new_url}</h3>
        </a>
      </h2>
    </li>
  );
};

export default Link;
