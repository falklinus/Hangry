import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/restaurants').then(res => {
      setRestaurants(res.data);
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        restaurants.map(rest => (
          <div className="restaurant" key={rest._id}>
            {rest.name}
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
