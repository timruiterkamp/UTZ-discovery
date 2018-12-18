import React, { Fragment } from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}
