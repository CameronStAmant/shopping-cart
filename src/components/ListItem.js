import './ListItem.css';
import { useState, useEffect } from 'react';

const ListItem = (props) => {
  const [dImg, setDImg] = useState({});
  const [value, setValue] = useState(1);
  const [cost, setCost] = useState(Math.floor(Math.random() * 200 + 50));
  const nameList = [
    'Abby',
    'Abe',
    'Addie',
    'Abbott',
    'Alexis',
    'Ace',
    'Alice',
    'Aero',
    'Allie',
    'Aiden',
    'Alyssa',
    'Amber',
    'Albert',
    'Angel',
    'Alden',
    'Anna',
    'Alex',
    'Annie',
    'Alfie',
    'Ariel',
    'Alvin',
    'Ashley',
    'Amos',
    'Aspen',
    'Andy',
    'Athena',
    'Angus',
    'Autumn',
    'Apollo',
    'Ava',
    'Archie',
    'Avery',
    'Aries',
    'Baby',
    'Artie',
    'Bailey',
    'Ash',
    'Basil',
    'Austin',
    'Bean',
    'Axel',
    'Bella',
    'Bailey',
    'Belle',
    'Bandit',
    'Betsy',
    'Barkley',
    'Betty',
    'Barney',
    'Bianca',
    'Baron',
    'Birdie',
    'Baxter',
    'Biscuit',
    'Bear',
    'Blondie',
    'Beau',
    'Blossom',
    'Benji',
    'Bonnie',
    'Benny',
    'Brandy',
    'Bentley',
    'Brooklyn',
    'Billy',
    'Brownie',
    'Bingo',
    'Buffy',
    'Blake',
    'Callie',
    'Blaze',
    'Camilla',
    'Blue',
    'Candy',
    'Bo',
    'Carla',
    'Boomer',
    'Carly',
    'Brady',
    'Carmela',
    'Brody',
    'Casey',
    'Brownie',
    'Cassie',
    'Bruce',
    'Chance',
    'Bruno',
    'Chanel',
    'Brutus',
    'Chloe',
    'Bubba',
    'Cinnamon',
    'Buck',
    'Cleo',
    'Buddy',
    'Coco',
    'Buster',
    'Cookie',
    'Butch',
    'Cricket',
    'Buzz',
  ];
  const [name, setName] = useState(nameList[Math.floor(Math.random() * 100)]);

  let dogData;
  const fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
      mode: 'cors',
    });
    dogData = await response.json();
    setDImg(dogData);
  };

  useEffect(() => {
    fetchDogImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = (event) => {
    let new1 = [dImg, parseInt(value), cost, name];
    props.shopItems(new1);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="ListItem">
        <img src={dImg.message} alt="dog" height="300px" width="300px" />
        <div>
          {name} | ${cost}{' '}
          <form onSubmit={add} id="form">
            <input
              type="number"
              id="items"
              value={value}
              onChange={handleChange}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
