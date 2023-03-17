import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchInput from './index';
import { setGoodsFilter, setSortingDirection } from 'actions/commonActions';

const mockStore = configureStore([]);

describe('SearchInput', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      goodsFilter: ''
    });
    component = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
  });

  test('renders search input', () => {
    const input = component.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
  });

  test('dispatches setGoodsFilter on input change', async () => {
    const input = component.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });
    await waitFor(() => {
      const actions = store.getActions();
      const expectedAction = setGoodsFilter('test');
      expect(actions).toEqual([expectedAction]);
    });
  });

  test('debounce input change', () => {
    jest.useFakeTimers();
    const input = component.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(input, { target: { value: 'testing' } });
    jest.advanceTimersByTime(200);
    expect(store.getActions()).toEqual([]);
    jest.advanceTimersByTime(200);
    const actions = store.getActions();
    const expectedAction = setGoodsFilter('testing');
    expect(actions).toEqual([expectedAction]);
    jest.useRealTimers();
  });
});
