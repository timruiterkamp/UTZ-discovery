import React, { Fragment } from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      {props.header ? <Header /> : ""}
      {props.children}
    </Fragment>
  );
}
