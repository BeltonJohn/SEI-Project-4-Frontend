import React from 'react';
import getMeal from '../api/displaystats';

//Want to get data from backend endpoint (meals)
// Need to add all values of .data.carbon_footprint for each object
// Needs to display last 7 days worth of values

function Stats() {
  const [data, setData] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [foods, setFoods] = React.useState([]);

  // let carbonTotal = 0;

  React.useEffect(() => {
    const getData = async () => {
      const meals = await getMeal();
      const foods = meals.map((meal) => meal.items);
      console.log('MEAL ITEMS', foods);

      setData(meals);
      setFoods(foods);
    };
    getData();
  }, []);

  React.useEffect(() => {
    let carbonTotal = 0;
    if (foods) {
      console.log('TRYING FOR EACH")', foods);
      foods.forEach((x) => {
        x.forEach((y) => {
          carbonTotal += y.carbon_footprint;
        });
      });
      console.log('CARBON TOTAL', carbonTotal);
      setTotal(carbonTotal);
    }
  }, [foods]);

  return <h1>{total}</h1>;
}

export default Stats;
