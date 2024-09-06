import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../app/componets/form';

describe('Form', () => {
  it('폼 제출 시 입력한 값이 표시되는지 확인합니다', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText('글을 입력하세요');
    const button = screen.getByText('전달'); 

    fireEvent.change(input, { target: { value: 'Hello, world!' } });
    fireEvent.click(button);

    expect(screen.getByText('Submitted: Hello, world!')).toBeInTheDocument();

  });
});
