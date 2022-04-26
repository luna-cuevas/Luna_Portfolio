import React from 'react'
import ReactDom from 'react-dom'
import Hero from '../Hero'

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Hero />, div)
})