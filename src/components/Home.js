import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [dImg, setDImg] = useState({});
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
  }, []);

  return (
    <div>
      <img id="mainImage" src={dImg.message} alt="dog" />
      <p id="mainText">
        Because every dog needs a family. Find your next pet{' '}
        <Link to="/shop">here</Link>.
      </p>
    </div>
  );
};

export default Home;
