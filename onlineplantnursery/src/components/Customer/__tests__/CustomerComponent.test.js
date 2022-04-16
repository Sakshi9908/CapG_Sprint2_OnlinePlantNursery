import React from 'react';
import CustomerComponent from '../CustomerComponent';
import "@testing-library/jest-dom";
test('test',()=>
{
    expect(true).toBe(true);
})
exports[`CustomerComponent should render initial layout`]=`
Array[
    <div>
    <input onChange={[Function]} type="text" />
    </div>,
]`;
exports[`CustomerComponent should render initial layout`]=`
Array[
    <div>
    <input onChange={[Function]} type="password" />
    </div>,
]`;
exports[`CustomerComponent should render initial layout`]=`
Array[
    <div>
    <input onChange={[Function]} type="email" />
    </div>,
]`;
exports[`CreateCustomerComponent should render initial layout`] = `
Array[
    <div>
    <button onChange={[Function]} type="submit" />
    </div>,
]`;
