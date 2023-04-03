import React from 'react';

import Card from './Cards';
import "./css/index.css";

import netflixWebSeries from './data/Netflix_web_series';

function netflixCard(currentValue, index, arr){
  return (
    <Card 
      key={currentValue.id}
      imageWebSeries={currentValue.imageWebSeries} 
      titleWebSeries={currentValue.titleWebSeries} 
      nameWebSeries={currentValue.nameWebSeries} 
      linkWebSeries={currentValue.linkWebSeries} 
    />
  );
}

const App = () => {
  return (
  	<>
  		<h1 className="headingStyle">List of top 5 Netflix series in 2020</h1>
    	{netflixWebSeries.map(netflixCard)}
  	</>
  );
};

export default App;