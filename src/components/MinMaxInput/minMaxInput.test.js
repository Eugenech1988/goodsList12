import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MinMaxInput from './index';
import { setMinPriceValue, setMaxPriceValue, setGoodsFilter } from 'actions/commonActions';

const mockStore = configureStore([]);

describe('MinMaxInput component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      minPriceValue: null,
      maxPriceValue: null
    });
    component = render(
      <Provider store={store}>
        <MinMaxInput />
      </Provider>
    );
  });

  test('dispatches setMinPriceValue on min input change', async () => {
    const minInput = component.getByPlaceholderText('min');
    fireEvent.change(minInput, { target: { value: '10' } });
    await waitFor(() => {
      const actions = store.getActions();
      const expectedAction = setMinPriceValue(10);
      expect(actions).toEqual([expectedAction]);
    })
  });

  it('dispatches setMaxPriceValue on max input change', async () => {
    const maxInput = component.getByPlaceholderText('max');
    fireEvent.change(maxInput, { target: { value: '20' } });
    await waitFor(() => {
      const actions = store.getActions();
      const expectedAction = setMaxPriceValue(20);
      expect(actions).toEqual([expectedAction]);
    })
  });

  test('debounces min input changes by 300ms', async () => {
    const minInput = component.getByPlaceholderText('min');
    fireEvent.change(minInput, { target: { value: '10' } });
    fireEvent.change(minInput, { target: { value: '20' } });
    expect(store.getActions()).toEqual([]);
    jest.advanceTimersByTime(300);
    await waitFor(() => {
      const actions = store.getActions();
      const expectedAction = setMinPriceValue(20);
      expect(store.getActions()).toEqual([setMinPriceValue(20)]);
    })
  });

  test('debounces max input changes by 300ms', async () => {
    const maxInput = component.getByPlaceholderText('max');
    fireEvent.change(maxInput, { target: { value: '20' } });
    fireEvent.change(maxInput, { target: { value: '30' } });
    expect(store.getActions()).toEqual([]);
    jest.advanceTimersByTime(300);
    await waitFor(() => {
      const actions = store.getActions();
      const expectedAction = setMaxPriceValue(30);
      expect(actions).toEqual([expectedAction]);
    })
  });
});
