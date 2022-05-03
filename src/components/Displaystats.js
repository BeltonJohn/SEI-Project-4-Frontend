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
      console.log('MEALS', meals);
      setData(meals);
    };
    getData();
  }, []);

  React.useEffect(() => {
    let carbonTotal = 0;

    if (data) {
      data.forEach((x) => {
        x.items.forEach((y) => {
          console.log('FOR EACH', y);
          carbonTotal += y.carbon_footprint;
        });
      });

      setTotal(Math.round(carbonTotal));
    }
  }, [data]);

  return (
    <div className='hero is-fullheight-with-navbar' id='stats-background'>
      <body className='stats-container'>
        <section className='total'>
          <strong id='footprint-header'>Your Current Total Footprint: </strong>
          <h3>{total}kg/CO2e</h3>
          <div
            className='footprint'
            imageSource={require('../assets/foot.png')}
          />
        </section>
        <section>
          <div>
            {data &&
              data.map((x) => {
                console.log('X', x);
                return (
                  <div key={x.id} id='daily-total'>
                    <body className='day'>
                      <h3>
                        <strong>{x.day}</strong>
                      </h3>
                      <ul>
                        {x.items.map((y) => {
                          return (
                            <li key={y.id}>
                              {y.name} : {y.carbon_footprint}kg
                            </li>
                          );
                        })}
                      </ul>
                      <p>
                        <strong>Daily Total: </strong>
                        {x.items.reduce((x, y) => {
                          return Math.floor(x + y.carbon_footprint);
                        }, 0)}
                        kg
                      </p>
                    </body>
                  </div>
                );
              })}
          </div>
        </section>
      </body>
    </div>
  );
}

export default Stats;
