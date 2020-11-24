import './ListItem.css';
import { useState, useEffect } from 'react';

const ListItem = (props) => {
  const [dImg, setDImg] = useState({});
  const [value, setValue] = useState(1);

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
    console.log(typeof value);
    props.addToCart(parseInt(value));
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const onChange = () => {};

  return (
    <div>
      <div className="ListItem">
        <img src={dImg.message} alt="dog" height="300px" width="300px" />
        <p>Dog | $100 | Add to cart</p>
        <form onSubmit={add}>
          <input
            type="number"
            id="items"
            // max="2"
            // min="1"
            value={value}
            onChange={handleChange}
          />
          <input type="submit" />
          {/* <button onClick={add}>Add</button> */}
        </form>
      </div>
    </div>
  );
};

export default ListItem;
