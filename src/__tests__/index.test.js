import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../app/page';


describe('Counter', () => {

  it('맨 처음 카운트가 0으로 표시되는지 확인', () => {
    render(<Home />);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();

  });

  it('버튼 클릭 시 카운트가 1로 증가하는지 확인', () => {
    render(<Home />);
    fireEvent.click(screen.getByText(/UP/i)); 
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

  });
});