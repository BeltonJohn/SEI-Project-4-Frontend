import React from 'react';
import getMeal from '../api/displaystats';

//Want to get data from backend endpoint (meals)
// Need to add all values of .data.carbon_footprint for each object
// Needs to display last 7 days worth of values

function Stats() {
  const [data, setData] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  // let carbonTotal = 0;

  React.useEffect(() => {
    const getData = async () => {
      const meals = await getMeal();
      console.log(meals);
      meals.sort();
      setData(meals);
      console.log(meals.items);

      meals.items.forEach((item) => {
        setTotal(total + parseInt(item.carbon_footprint));
        console.log('total is', item.carbon_footprint);
      });
    };
    getData();
  }, []);

  // if (data) {
  //   data.forEach((item) => {
  //     carbonTotal += parseFloat(meals.items.carbon_footprint);
  //     if (meals.items.carbon_footprint[0])
  //   })
  // }

  return <h1>{total}</h1>;
}

export default Stats;
