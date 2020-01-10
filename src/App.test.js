import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('matches the snapshot', () => {
    const tree  = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
