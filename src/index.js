import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
  React.createElement('div', { className: 'me' }, 
    React.createElement('h1', {}, 'Andrea'),
    React.createElement('p', )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

