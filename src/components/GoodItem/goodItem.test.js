import React from 'react';
import { render, screen } from '@testing-library/react';
import GoodItem from './index';

describe('GoodItem', () => {
  const props = {
    imageUrl: 'assets/search.svg',
    category: 'Clothing',
    price: 19.99,
    color: 'Black',
    rating: 4.5,
  };

  it('renders an image with the specified URL', () => {
    render(<GoodItem {...props} />);
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', props.imageUrl);
  });

  it('renders a "no image" icon if no image URL is provided', () => {
    render(<GoodItem {...props} imageUrl={null} />);
    const icon = screen.getByAltText('No image available');
    expect(icon).toBeInTheDocument();
  });

  it('displays the category text', () => {
    render(<GoodItem {...props} />);
    const category = screen.getByText(props.category);
    expect(category).toBeInTheDocument();
  });

  it('displays the color text', () => {
    render(<GoodItem {...props} />);
    const color = screen.getByText(props.color);
    expect(color).toHaveTextContent(props.color);
  });

  it('displays the price text', () => {
    render(<GoodItem {...props} />);
    const price = screen.getByText(props.price);
    expect(price).toHaveTextContent(props.price);
  });

  it('displays the rating text', () => {
    render(<GoodItem {...props} />);
    const rating = screen.getByText(props.rating);
    expect(rating).toHaveTextContent(props.rating);
  });
});
