// Write your tests here
import React from "react"
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppFunctional from "./AppFunctional"

describe('AppFunctional', () => {
  test('render headings, buttons, and link correctly', () => {
    const {getByText, getByPlaceholderText} = render(<AppFunctional/>)
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
    expect(getByText('submit')).toBeInTheDocument()
    //test placeholder
    
    expect(getByPlaceholderText('type email')).toBeInTheDocument()
  })
  test('typing in input field changes its value', () =>{
    const {getByPlaceholderText} = render(<AppFunctional/>)
    const emailInput = getByPlaceholderText('type email')
    
    fireEvent.change(emailInput, {target: {value: 'test@example.com'}})
     expect(emailInput.value).toBe('test@example.com')
  })
})
// test('sanity', () => {
//   expect(true).toBe(false)
// })
