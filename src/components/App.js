// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // State to hold the dog image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch dog image when the component mounts
  useEffect(() => {
    // Fetch request to get random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL in the state
        setLoading(false); // Set loading to false after the image is fetched
      })
      .catch((error) => {
        console.error('Error fetching the dog image:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array means this runs only once on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display loading message while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display dog image after fetch
      )}
    </div>
  );
}

export default App;
