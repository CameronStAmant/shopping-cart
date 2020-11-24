import './ListItem.css';
import { useState, useEffect } from 'react';

const ListItem = (props) => {
  const [dImg, setDImg] = useState({});
  const [value, setValue] = useState(1);
  const cost = Math.floor(Math.random() * 200 + 50);

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
    let new1 = [dImg, parseInt(value), cost];
    // props.addToCart(new1[1]);
    props.cartItems(new1);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="ListItem">
        <img src={dImg.message} alt="dog" height="300px" width="300px" />
        <p>Dog | ${cost} | Add to cart</p>
        <form onSubmit={add}>
          <input
            type="number"
            id="items"
            value={value}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ListItem;
