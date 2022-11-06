import React, { useState, useEffect, useCallback } from "react";

import LinksList from "./components/LinksList";
import AddLink from "./components/AddLink";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "../header/header";

function Main() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  const fetchLinksHandler = useCallback(async () => {
    setError(null);
    let accessTokenObj = JSON.parse(
      JSON.stringify(localStorage.getItem("access_token"))
    );
    try {
      const response = await fetch("https://vfls.herokuapp.com/home.json", {
        method: "GET",
        headers: {
          Authorization: `JWT ${accessTokenObj}`,
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedLinks = [];

      for (const key in data) {
        loadedLinks.push({
          id: data[key].id,
          initial_url: data[key].initial_url,
          new_url: data[key].new_url,
        });
      }

      setLinks(loadedLinks);
      console.log(loadedLinks);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchLinksHandler();
  }, [fetchLinksHandler]);

  async function shortLinkHandler(link) {
    let accessTokenObj = JSON.parse(
      JSON.stringify(localStorage.getItem("access_token"))
    );
    const response = await fetch("https://vfls.herokuapp.com/home", {
      method: "POST",
      body: JSON.stringify(link),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessTokenObj}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }

  let content = (
    <p>
      Found no links - Reload the page. If you are not authorised yet - go to{" "}
      <Link to="/login">login page</Link>
    </p>
  );

  if (links.length > 0) {
    content = <LinksList links={links} />;
  }

  return (
    <React.Fragment>
      <Header />
      <section>
        <AddLink onShortLink={shortLinkHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Main;
