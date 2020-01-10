import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

describe('App component', () => {
  it('matches the snapshot', () => {
    const tree  = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
