import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SortingButtons from './index';
import { setSortingDirection } from 'actions/commonActions';

const mockStore = configureMockStore([]);

describe('SortingButtons', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      sortingDirection: 'popular',
    });

    component = render(
      <Provider store={store}>
        <SortingButtons />
      </Provider>
    );
  });

  it('should render three buttons', () => {
    const buttons = component.getAllByRole('button');
    expect(buttons.length).toEqual(3);
  });

  it('should dispatch setSortingDirection with lowPrice when Price From Low To High button is clicked', () => {
    const lowHighButton = component.getByText('Price From Low To High');
    fireEvent.click(lowHighButton);
    const actions = store.getActions();
    const expectedAction = setSortingDirection('lowPrice');
    expect(actions).toEqual([expectedAction]);
  });

  it('should dispatch setSortingDirection with highPrice when Price From High To Low button is clicked', () => {
    const highLowButton = component.getByText('Price From High To Low');
    fireEvent.click(highLowButton);

    const actions = store.getActions();
    const expectedAction = setSortingDirection('highPrice');
    expect(actions).toEqual([expectedAction]);
  });

  it('should dispatch setSortingDirection with popular when Popular First button is clicked', () => {
    const popularButton = component.getByText('Popular First');
    fireEvent.click(popularButton);

    const actions = store.getActions();
    const expectedAction = setSortingDirection('popular');
    expect(actions).toEqual([expectedAction]);
  });
});
