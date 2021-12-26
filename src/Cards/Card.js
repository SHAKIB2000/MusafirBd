import React from 'react';
function Card(props){
    return (
      <div className='display'>
    <div className="card">
      <div className='overflow'>
        <img src={props.image} className="card-image"></img>
        </div>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="card-stats" style={{background: props.color}}>
      <div className="stat">
          <div>{props.read}<sup>m</sup></div>
          <div>read</div>
      </div>
    <div className="stat border">
      <div>{props.views}</div>
      <div>views</div>
    </div>
    <div className="stat">
      <div>{props.comments}</div>
      <div>comments</div>
    </div>
  </div>

  </div>
  </div>);
}
export default Card;