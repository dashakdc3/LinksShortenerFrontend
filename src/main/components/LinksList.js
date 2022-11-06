import React from "react";

import Link from "./Link";
import classes from "./LinksList.module.css";

const LinksList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.links.map((link) => (
        <Link
          key={link.id}
          initial_url={link.initial_url}
          new_url={link.new_url}
        />
      ))}
    </ul>
  );
};
export default LinksList;
