// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { setDataLoaded } from "../../../store/reducers/home/HomeActions";
// import styled from "styled-components";

// const Button = styled.button`
//   padding: 0.75em 1em;
//   border-radius: 1em;
// `;

// class JourneyButton extends Component {
//   setNewHomeInterface = e => {
//     e.preventDefault();

//     this.props.setDataLoaded(true);
//   };

//   render() {
//     console.log(this.props.state.dataLoaded);
//     return (
//       <Button onClick={this.setNewHomeInterface}>{this.props.children}</Button>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     state: {
//       dataLoaded: state.home.dataLoaded
//     }
//   };
// };

// const actions = {
//   setDataLoaded
// };

// export default connect(
//   mapStateToProps,
//   actions
// )(JourneyButton);
