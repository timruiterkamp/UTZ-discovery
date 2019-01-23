# UTZ Discovery

In this project we visualized the Rhomis Dataset for UTZ and Rainforest Alliance, the product is a geographic tool to explore insights per country.

The product can be found here: [https://utz-discovery.netlify.com](https://utz-discovery.netlify.com)

## Table of contents

- [Installation of the project](#Installation-of-the-project)
- [Overview project](#Overview-research-case)
  - [How did you get here?](#How-did-you-get-here)
  - [Main challenge](#Main-challenge)
  - [The sub-challenge we chose to focus on](#The-sub-challenge-we-chose-to-focus-on)
  - [How does our product cover this challenge?](#How-does-our-product-cover-this-challenge)
- [Journey](#Journey)
- [How did I filter the data](#How-did-I-filter-the-data)
- [Conclusion](#Conclusion)
- [Techniques used](#Techniques-used)
- [Code description](#Code-description)
- [Sources](#Sources)
- [Todo / issues](#todo--issues)

## Installation of the project

```bash
git https://github.com/timruiterkamp/UTZ-discovery.git
cd UTZ-discovery
npm install or yarn
npm run dev or yarn start
```

# Overview case

## How did you get here

At the University of Applied Sciences Amsterdam me and my team got the possibility to visualize the Rhomis Dataset to give insight to Rainforest Alliance and UTZ. The dataset consists of 18000 farmers around the world with over 740 variables per farmer. This is a lot of data and the client didn't have any way to view this data.

So me and my team were on the same line from the start and start developing a geographical tool voor our client, so the client could research the data in a fun/interactive way.

## Main challenge

"Help us to better understand and explain how small farmers make a living (and how RA can better support them) "

## The sub-challenge we chose to focus on

Describe the social, demographic and economic characteristics of farmer households in particular countries, timeframes or for particular crops.

## How does our product cover this challenge?

This tool basically shows RHoMIS data on a map. The user can select countries and/
or regions on this map to see the data they contain. They can also compare data from different countries or regions. The data that the different places contain are mainly about households, incomes, crops, crop care and also a bit about poverty. In short, this tool shows the social, demographic and economic characteristics of farmer households around the world, based on RHoMIS data. Exploring and searching through this interactive data tool hopefully helps UTZ Rainforest Alliance to better understand how these farmers make a living.

# Journey 🗺 ️

So a big part of this product is the interactive world part and the ability to compare different countries with eachother.

![Intro screen](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/introscreen.png)

An important part with this is how the user will interact with the data. We came up with a simple step by step way so the user sees what he can expect.

![The world is yours](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/worldmap.png)

The world is yours! The world overview with the dots is the global map and every dot is a country we have any data on. The dots are clickable and will trigger the next step.

![Country insight](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/country-insight.png)

This is the screen you get to see if you click on a dot. The screen with the data of the country, amount of respondants and country name will appear on screen. The data can be walked through and filtered by clicking on different sections.

![Score ppi](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/score-ppi.png)

If you select the poverty icon, you will see the screen above with the Score ppi of the country and the HFIAS status of the farmers in that country.

![Active filter](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/activefilter.png)

When you select a country for comparison, a number will show up above the compare icon. The number stands for the amount of active countries in the compare section.

![Compare countries ](https://github.com/timruiterkamp/UTZ-discovery/blob/master/gh-images/compare-screen.png)

If you have selected like 3 countries, the above screen will be a visualization of the look and feel of the compare screen. The scroll, scrolls every section all at the same time and the menu is for all countries. So you can select poverty as in the global overview.

# How did I filter the data 🕵️‍♂️

We came to the realisation that total income divided by the amount of farmers would be inaccurate as some farmers are working with 30 people. So we decided to divide all that has to do with income by the total housesize of each farmer, this way we created a 'per capita' comparison, which is more realistic.

The code has been sometimes a bit of a mess due to the many variables I had to work with and make them usefull and useable for the product. Beneath there is a short list of how gathering the variables looks.

```javascript
  const totalFarmIncome = d3
    .nest()
    .key(d => d.farm_income.replace(".", ","))
    .entries(props.data);

  const CultivatedLand = d3
    .nest()
    .key(d => d.landcultivated)
    .entries(props.data);

  const OwnedLand = d3
    .nest()
    .key(d => d.landowned)
    .entries(props.data);

  const CalculatedTotalHouseSize = d3.sum(
    TotalHouseSize,
    d => parseInt(d.key) * d.size
  );

  const profitPerPerson = [
      { key: "farm", percentage: totalFarm / CalculatedTotalHouseSize },
      { key: "Offarm", percentage: totalOffFarm / CalculatedTotalHouseSize },
      {
        key: "value produce",
        percentage: totalCropProduceValue / CalculatedTotalHouseSize
      }

```

To be honest, due to some pressure on getting eveything done and trying things over and over again. I should look at the code and clean it up a bit. There are many things that can be handled functional for example which would reduce the amount of code in the file.

## Outcomes along the way 🚀

- There are 2 countries with polygameus households
- A country as Uganga earns just \$196 dollar per capita
- In all but 2 countries there are more single woman households than single men households. Overall couple is the best represented over all countries.
- In Uganda only 12.3% of the people say the are foodsecure which means 87.7% of the people is in need of food.

## Conclusion 📊

The product has been really fun to make, the data was fun to work with and it was a good challenge to get the correct numbers and display them correctly on screen. There have and are still challenges with rerendering maps based on zoom levels, creating filters over 180000 farmers and polishing the product. But if I look at proof of concept, this product will meet the standards. The compare tool with multiple countries is really usefull and can be used to get a lot of insights. So I'm willing to say that the product meets the requirements to proof the concept of geograpically research data and compare them to other countries.

## Techniques used

- Mapbox
- D3
- React-chartjs
- Javascript
- React
- Styled components

## Code description

| Files                         | Description                                   |
| ----------------------------- | --------------------------------------------- |
| index.js                      | React base                                    |
| ./src/\*                      | Folder with all the scripts and styling       |
| ./src/components              | Folder with all the scripts                   |
| ./src/components/filters      | Folder with all the filter files              |
| ./src/components/interface    | Folder with all the interface files           |
| ./src/components/layout       | Folder with all the layout files              |
| ./src/components/pages        | Folder with all the page files                |
| ./src/data                    | Folder with all the data                      |
| ./src/routes                  | Folder with all the routing                   |
| ./src/data/rhomis-data.csv    | File with all the farmers                     |
| ./src/data/worldGeoCodes.json | File with all the geocodes per country        |
| ./src/store/                  | Folder with the redux store                   |
| ./src/theme/                  | Folder with global theme file                 |
| ./src/utils/                  | Folder with utilities                         |
| ./gh-images                   | Folder with the images used in the readme     |
| ./assets                      | Folder with the icons used in the application |

## Sources

- [Rhomis data](https://www.rhomis.org/)
- [Mapbox information](https://www.mapbox.com/help/define-geocoding/)

## Todo / issues

[Link to issues](https://github.com/timruiterkamp/frontend-data/issues)

## License

[MIT LICENSE](license.txt)
