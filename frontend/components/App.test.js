// Write your tests here
import React from "react"
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppFunctional from "./AppFunctional"

describe ('AppFunctional', () => {
  test('render headings, buttons, and link correctly', () => {
    const {getByText, getByPlaceholderText, getByTestId} = render(<AppFunctional/>)
     //const {getByPlaceholderText} = render(<AppFunctional/>)
    //test headings
    expect(getByText (/Coordinates \(2, 2\)/i)).toBeInTheDocument();
    expect(getByText(/^You moved \d+ times$/i)).toBeInTheDocument();
    expect(getByText('reset')).toBeInTheDocument()
    //test buttons
    expect(getByText('LEFT')).toBeInTheDocument()
    expect(getByText('UP')).toBeInTheDocument()
    expect(getByText('RIGHT')).toBeInTheDocument()
    expect(getByText('DOWN')).toBeInTheDocument()
    expect(getByText('reset')).toBeInTheDocument()

    const submitButton = getByTestId('submit')
    expect(submitButton).toBeInTheDocument
    
    //test placeholder
    
    expect(getByPlaceholderText('type email')).toBeInTheDocument()
  })
  test ('typing in input field changes its value', async() =>{
    const {getByPlaceholderText} = render(<AppFunctional/>)
    const emailInput = getByPlaceholderText('type email')
    
    fireEvent.change(emailInput, {target: {value: 'test@example.com'}})
     expect(emailInput.value).toBe('test@example.com')

    //   jest.mock('axios', () => ({
    //   post: jest.fn(() => Promise.resolve({data:{message: 'lady win #31'}
    // })),
    //  }))
    // await fireEvent.click(getByTestId('submit'))
    // expect(await screen.findByText('lady win #31')).toBeInTheDocument()
   
     
  })
})

