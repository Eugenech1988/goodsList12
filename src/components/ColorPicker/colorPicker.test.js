import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ColorPicker from './index';
import { setGoodsColorsArray } from 'actions/commonActions';

const mockStore = configureStore([]);

describe('ColorPicker', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      common: {
        goodsColorsArray: []
      }
    });
    store.dispatch = jest.fn();
  });

  it('renders the ColorPicker component with all available colors', () => {
    render(
      <Provider store={store}>
        <ColorPicker/>
      </Provider>
    );

    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText(/Black/i)).toBeInTheDocument();
    expect(screen.getByText(/White/i)).toBeInTheDocument();
    expect(screen.getByText(/Red/i)).toBeInTheDocument();
    expect(screen.getByText(/Blue/i)).toBeInTheDocument();
  });

  it('updates the filtered colors when a checkbox is clicked', async () => {
    render(
      <Provider store={store}>
        <ColorPicker/>
      </Provider>
    );

    const blackCheckbox = screen.getByLabelText(/black/i);
    const whiteCheckbox = screen.getByLabelText(/white/i);
    const redCheckbox = screen.getByLabelText(/red/i);

    expect(blackCheckbox.checked).toBe(false);
    expect(whiteCheckbox.checked).toBe(false);
    expect(redCheckbox.checked).toBe(false);

    fireEvent.click(screen.getByText(/black/i));

    expect(blackCheckbox.checked).toBe(true);
    expect(whiteCheckbox.checked).toBe(false);
    expect(redCheckbox.checked).toBe(false);
    expect(store.dispatch).toHaveBeenCalledWith(setGoodsColorsArray(['black']));

    fireEvent.click(screen.getByText(/white/i));

    expect(blackCheckbox.checked).toBe(true);
    expect(whiteCheckbox.checked).toBe(true);
    expect(redCheckbox.checked).toBe(false);
    expect(store.dispatch).toHaveBeenCalledWith(setGoodsColorsArray(['black', 'white']));

    fireEvent.click(screen.getByText(/red/i));

    expect(blackCheckbox.checked).toBe(true);
    expect(whiteCheckbox.checked).toBe(true);
    expect(redCheckbox.checked).toBe(true);
    expect(store.dispatch).toHaveBeenCalledWith(setGoodsColorsArray(['black', 'white', 'red']));
  });
});
