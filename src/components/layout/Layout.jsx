import React, { Fragment } from "react";
import Header from "./Header";
import Grid from "./Grid";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Grid>{props.children}</Grid>
    </Fragment>
  );
}
