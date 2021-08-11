import { render, screen } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Form from './Mycomponents/Form';
import Todolist from './Mycomponents/Todolist';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

describe("Testing of the CRUD app", ()=>{
  test("Tocheck weather the create button is there or not",()=>{
    const wrapper = shallow(<Form />);

    expect(wrapper.find(".add-Button").text()).toBe("Enter")
  });
  
  test("for todo list",()=>{
    const wrapper = shallow(<Todolist/>).dive();
    expect(wrapper.find("#Edit").text()).toBe("Edit")
})
})


























// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("veer");
//   expect(linkElement).toBeInTheDocument();
// });
