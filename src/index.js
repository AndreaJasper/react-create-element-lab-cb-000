import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
  React.createElement('div', { className: 'me' }, 
    React.createElement('h1', {}, 'Andrea'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', { className: 'my-interests' },
      [
        React.createElement('li', {}, 'Javacript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Video Games'),
        React.createElement('li', {}, 'Horses'),
      ]
    )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

