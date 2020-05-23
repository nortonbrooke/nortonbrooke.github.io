import React from 'react';
import ReactDOM from 'react-dom';
import Separator from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Separator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
