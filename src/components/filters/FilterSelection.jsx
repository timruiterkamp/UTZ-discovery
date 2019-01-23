import React, { Component } from "react";
import { connect } from "react-redux";
import { setGlobalFilters } from "../../store/reducers/data/DataActions";
import styled from "styled-components";
import themeConfig from "../../theme/themeConfig";
import * as d3 from "d3";

const FilterGrid = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0.5em 0;
  }
`;

const Title = styled.h3`
  font-size: 1.25em;
  font-family: ${themeConfig.font.title};
  font-weight: bold;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? "#F7D73B" : "transparent")};
  border: 1px solid #f7d73b;
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 1em;

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  } */

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
export class FilterSelection extends Component {
  state = { checked: false };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <FilterGrid>
        <div>
          <Title>Houshold</Title>
          <p>Household head</p>
          <ul>
            <li>
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
                <span>Female</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
                <span>Male</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
                <span>Polygameus</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
                <span>Couple</span>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <Title>Crops</Title>
        </div>
        <div>
          <Title>Poverty and life quality</Title>
        </div>
      </FilterGrid>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: {
      filters: state.data.filters
    }
  };
};
const actions = { setGlobalFilters };

export default connect(
  mapStateToProps,
  actions
)(FilterSelection);
