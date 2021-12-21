import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Navbar/nav';
import Foot from './Footer/foot';
import Zilla from './Components/Zilla';
import Banner from './Components/Banner';
import Card from './Cards/AllCards';


ReactDOM.render(
    <Nav />,
  document.getElementById('nav')
);
ReactDOM.render(
  <Banner />,
document.getElementById('banner')
);
ReactDOM.render(
  <Zilla />,
document.getElementById('zilla')
);
ReactDOM.render(
  <Card />,
document.getElementById('card')
);
ReactDOM.render(
  <Foot />,
document.getElementById('foot')
);