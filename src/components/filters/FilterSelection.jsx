import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setGlobalFilters } from "../../store/reducers/data/DataActions";
import styled from "styled-components";
import themeConfig from "../../theme/themeConfig";
import * as d3 from "d3";
import CheckBox from "./CheckBox";
import SelectionBox from "./SelectionBox";
import Radio from "./Radio";
import { Link } from "react-router-dom";

const FilterGrid = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;

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
const Text = styled.p`
  font-size: 1em;
  font-family: ${themeConfig.font.text};
  color: white;
  padding-top: 1em;
`;

const RangeInput = styled.input`
  -webkit-appearance: none;
  margin: 18px 0;
  width: 65%;

  ::-webkit-slider-thumb {
    height: 50px;
    width: 10px;
    border-radius: 3px;
    background: ${themeConfig.color.primary};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -21px;
    border-radius: 5px;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    background: #808080;
  }

  :focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
`;

const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ResetButton = styled.button`
  border: 1px solid white;
  font-size: 0.8em;
  font-family: ${themeConfig.font.text};
  background-color: transparent;
  padding: 0.5em 1em;
  border-radius: 15px;
  position: absolute;
  right: 0;
  top: -30px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: ${themeConfig.color.primary};
    color: #000;
  }
`;

const ApplyButton = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  bottom: -95px;
  right: -95px;
  background-color: ${themeConfig.color.primary};

  a {
    margin-left: 35px;
    font-size: 1em;
    font-weight: bold;
    margin-top: -60px;
    color: black;
  }
`;
export class FilterSelection extends Component {
  state = {
    checked: false,
    Female: false,
    Male: false,
    Polygameus: false,
    Couple: false,
    totalIncome: false,
    farmIncome: false,
    offFarmIncome: false,
    householdsizeValue: 15,
    landOwned: 35,
    cropSales: 10000,
    cropSelection: "crops",
    agricInput: "Agric inputs",
    agricInputYes: false,
    agricInputNo: false,
    severlyHungry: false,
    foodsecure: false,
    moderatelyHungry: false,
    mildlyHungry: false
  };

  handleHouseHoldSizeChange = event => {
    this.setState({ householdsizeValue: event.target.value });
  };

  handleLandOwnedChange = event => {
    this.setState({ landOwned: event.target.value });
  };

  handleCropsSelection = event => {
    this.setState({ cropSelection: event.target.value });
  };
  handleCropSales = event => {
    this.setState({ cropSales: event.target.value });
  };

  handleAgricInput = event => {
    this.setState({ agricInput: event.target.value });
  };

  handleRadioChange = event => {
    const target = event.target;

    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  resetFilters = () => {
    this.setState({ Female: false });
  };

  render() {
    return (
      <FilterGrid>
        {this.state.Female && (
          <Fragment>
            <ResetButton onClick={this.resetFilters}>
              Reset filters X
            </ResetButton>
            <ApplyButton>
              <Link to="/">Apply</Link>
            </ApplyButton>
          </Fragment>
        )}
        <div>
          <Title>Houshold</Title>
          <p>Household head</p>
          <CheckBox
            name={"Female"}
            checked={this.state.Female}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Male"}
            checked={this.state.Male}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Polygameus"}
            checked={this.state.Polygameus}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Couple"}
            checked={this.state.Couple}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <Text>Householdsize</Text>
          <label>
            <RangeInput
              id="typeinp"
              type="range"
              min="0"
              max="30"
              value={this.state.value}
              onChange={this.handleHouseHoldSizeChange}
              step="1"
            />
            <p>{this.state.householdsizeValue + " persons"}</p>
          </label>
          <Text>Income</Text>
          <CheckBox
            name={"Total income"}
            checked={this.state.totalIncome}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Farm Income"}
            checked={this.state.farmIncome}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Off farm income"}
            checked={this.state.offFarmIncome}
            handleCheckboxChange={this.handleCheckboxChange}
          />
        </div>
        <div>
          <Text>Land owned</Text>
          <label>
            <RangeInput
              id="landOwned"
              type="range"
              min="0"
              max="70"
              value={this.state.value}
              onChange={this.handleLandOwnedChange}
              step="5"
            />
            <p>{this.state.landOwned + "ha"}</p>
          </label>
          <Title>Crops</Title>
          <SelectionBox
            value={this.state.cropSelection}
            handleChange={this.handleCropsSelection}
            options={["Corn", "Cacao", "Millet"]}
          />
          <Text>Crop sales</Text>
          <label>
            <RangeInput
              id="cropSales"
              type="range"
              min="0"
              max="20000"
              value={this.state.value}
              onChange={this.handleCropSales}
              step="250"
            />
            <p>{"$" + this.state.cropSales}</p>
          </label>
          <Text>Agric inputs</Text>
          <ButtonContainer>
            <Radio
              name={"Yes"}
              checked={this.state.agricInputYes}
              handleChange={this.handleRadioChange}
            />
            <Radio
              name={"No"}
              checked={this.state.agricInputYes}
              handleChange={this.handleRadioChange}
            />
          </ButtonContainer>
          <SelectionBox
            value={this.state.agricInput}
            handleChange={this.handleAgricInput}
            options={["Agric inputs"]}
          />
        </div>
        <div>
          <Text>Irrigation</Text>
          <ButtonContainer>
            <Radio
              name={"Yes"}
              checked={this.state.agricInputYes}
              handleChange={this.handleRadioChange}
            />
            <Radio
              name={"No"}
              checked={this.state.agricInputYes}
              handleChange={this.handleRadioChange}
            />
          </ButtonContainer>
          <SelectionBox
            value={this.state.agricInput}
            handleChange={this.handleAgricInput}
            options={["Methods"]}
          />
          <Title>Poverty and life quality</Title>
          <CheckBox
            name={"Severly hungry"}
            checked={this.state.severlyHungry}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Mildly hungry"}
            checked={this.state.mildlyHungry}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Moderately hunger"}
            checked={this.state.moderatelyHungry}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <CheckBox
            name={"Foodsecure"}
            checked={this.state.foodsecure}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <Text>PPI Score</Text>
          <RangeInput
            id="landOwned"
            type="range"
            min="0"
            max="5"
            value={this.state.value}
            onChange={this.handleLandOwnedChange}
            step="1"
          />
          <Text>Foodshortage months</Text>
          <SelectionBox
            value={this.state.agricInput}
            handleChange={this.handleAgricInput}
            options={["Januari"]}
          />
          <Title style={{ paddingTop: "2em" }}>Total farmers</Title>
          <Title>10.771</Title>
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
