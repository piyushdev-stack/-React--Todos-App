import { shallow } from 'enzyme';
import React from "react"
import Todolist from './Todolist';

it("Testing Todolist",()=>{
    const wrapper = shallow(<Todolist/>);
    const button = button.text();
    const result = button.text();
    expect (result).toBe("Edit")
})