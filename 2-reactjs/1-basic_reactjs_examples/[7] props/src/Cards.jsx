import React from 'react';
import Image from './Image';
import CardTitle from './CardTitle';
function Card(props){
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <Image imageWebSeries={props.imageWebSeries} />
          <div className="card__info">
            <span className="card__category"> {props.titleWebSeries} </span>
            <CardTitle nameWebSeries={props.nameWebSeries} />
            <a href={props.linkWebSeries} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;