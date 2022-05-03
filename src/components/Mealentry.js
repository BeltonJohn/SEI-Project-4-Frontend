import React from 'react';
import { createMeal } from '../api/daysmeals';
import { useNavigate } from 'react-router-dom';

function MealNew() {
  const navigate = useNavigate();
  const [meal, setMeal] = React.useState({
    day: '',
    items: [],
  });

  function removeFromArray(array, value) {
    var index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  function handleDaySelect(event) {
    let selectedDay = event.target.value;
    console.log(`Selected day is  ${selectedDay}`);
    setMeal({
      ...meal,
      day: event.target.value,
    });
  }

  function handleSelect(event) {
    let selectedFoodComponentId = event.target.value;
    console.log(`Selected item: ${selectedFoodComponentId}`);

    // if the foodComponentId exists in the array - do nothing - helps avoid duplicates
    // if the foodComponentId doesn't exist in the array, add it -
    let mealItems = meal.items;
    console.log(`Current meal items: ${mealItems}`);

    // if previously selected item is present, remove it
    let previouslySelectedItem = event.target.getAttribute(
      'data-previously-selected-item'
    );
    console.log(`Previously selected item: ${previouslySelectedItem}`);

    if (previouslySelectedItem) {
      console.log(
        `Removing previously selected item: ${previouslySelectedItem}`
      );
      removeFromArray(mealItems, parseInt(previouslySelectedItem));
    }

    console.log(`Adding new item to meals: ${selectedFoodComponentId}`);
    mealItems.push(parseInt(selectedFoodComponentId));

    console.log(`Added new item to meals: ${mealItems}`);

    event.target.setAttribute(
      'data-previously-selected-item',
      selectedFoodComponentId
    );

    setMeal({
      ...meal,
      items: mealItems,
    });
  }

  function handleSubmit(event) {
    console.log('creating meal');
    event.preventDefault();
    const getData = async () => {
      try {
        await createMeal(meal);
        navigate('/stats');
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }

  return (
    <>
      <section id='meal-background'>
        <form
          className='my-3 column is-half is-offset-one-quarter box'
          onSubmit={handleSubmit}
        >
          <div className='control'>
            <h3>Day</h3>
            <div className='dropdown-content' name='selectList' id='dayList'>
              <select className='options' onChange={handleDaySelect}>
                <option value=''>Please Select</option>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuseday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
              </select>
            </div>
          </div>
          <br />
          <div className='control'>
            <h3>Meat </h3>
            <div className='dropdown-content' name='selectList' id='meatList'>
              <select className='options' onChange={handleSelect}>
                <option value=''>Please Select</option>
                <option value='5'>Beef</option>
                <option value='6'>Pork</option>
                <option value='7'>Chicken</option>
                <option value='8'>Fish</option>
              </select>
            </div>
          </div>
          <div className='control'>
            <h3>Carbs </h3>
            <div className='dropdown-content' name='selectList' id='meatList'>
              <select className='options' onChange={handleSelect}>
                <option value=''>Please Select</option>
                <option value='9'>Rice</option>
                <option value='10'>Pasta</option>
                <option value='11'>Bread</option>
                <option value='12'>Potato</option>
              </select>
            </div>
          </div>
          <div className='control'>
            <h3>Dairy </h3>
            <div className='dropdown-content' name='selectList' id='meatList'>
              <select className='options' onChange={handleSelect}>
                <option className='dropdown-item' value=''>
                  Please Select
                </option>
                <option value='13'>Cheese</option>
                <option value='14'>Milk</option>
                <option value='15'>Butter</option>
                <option value='16'>Eggs</option>
              </select>
            </div>
          </div>
          <div className='field is-grouped'>
            <div className='control'>
              <button
                type='submit'
                className='button is-success is-fullwidth'
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default MealNew;
