import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GoodsPanel from './index';

const mockStore = configureStore([]);

describe('GoodsPanel', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      common: {
        goodsList: [
          {
            id: 1,
            category: 'Clothing',
            price: 20,
            color: 'red',
            rating: 4
          },
          {
            id: 2,
            category: 'Shoes',
            price: 30,
            color: 'blue',
            rating: 5
          }
        ],
        goodsFilter: '',
        goodsColors: [],
        sortingDirection: 'default',
        minPriceValue: null,
        maxPriceValue: null
      }
    });
  });

  test('renders a list of goods with default sorting', () => {
    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Clothing')).toBeInTheDocument();
    expect(screen.getByText('Shoes')).toBeInTheDocument();
  });

  test('renders a list of goods filtered by category', () => {
    store = mockStore({
      common: {
        ...store.getState().common,
        goodsFilter: 'Clothing'
      }
    });

    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Clothing')).toBeInTheDocument();
    expect(screen.queryByText('Shoes')).not.toBeInTheDocument();
  });

  test('renders a list of goods filtered by color', () => {
    store = mockStore({
      common: {
        ...store.getState().common,
        goodsColors: ['red']
      }
    });

    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Clothing')).toBeInTheDocument();
    expect(screen.queryByText('Shoes')).not.toBeInTheDocument();
  });

  test('renders a list of goods sorted by high price', () => {
    store = mockStore({
      common: {
        ...store.getState().common,
        sortingDirection: 'highPrice'
      }
    });

    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Shoes')).toBeInTheDocument();
    expect(screen.getByText('Clothing')).toBeInTheDocument();
  });

  test('renders a list of goods sorted by low price', () => {
    store = mockStore({
      common: {
        ...store.getState().common,
        sortingDirection: 'lowPrice'
      }
    });

    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Clothing')).toBeInTheDocument();
    expect(screen.getByText('Shoes')).toBeInTheDocument();
  });

  test('renders a list of goods sorted by rating', () => {
    render(
      <Provider store={store}>
        <GoodsPanel />
      </Provider>
    );

    expect(screen.getByText('Shoes')).toBeInTheDocument();
    expect(screen.getByText('Clothing')).toBeInTheDocument();
  });

  // add more tests as needed
});
