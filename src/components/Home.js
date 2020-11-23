import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <img src={dImg.message} alt="dog" widht="200px" height="200px" />
      <p>
        Because every dog needs a family. Find your next pet{' '}
        <Link to="/shop">here</Link>.
      </p>
    </div>
  );
};

export default Home;
