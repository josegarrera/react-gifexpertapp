import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

    describe('Tests on AddCategory component', () => {
        
        const setCategories = jest.fn();
        let wrapper = shallow(<AddCategory setCategories={setCategories} />);
        
        beforeEach(() => {
            jest.clearAllMocks();
            wrapper = shallow(<AddCategory setCategories={setCategories} />);
        })

        test('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        test('should change the text box', () => {
            
            const input = wrapper.find('input');
            const value = 'hola mundo';
            input.simulate('change', {
                target: {
                    value,
                },
            });

            expect(wrapper.find('p').text()).toBe(value);

        });

        test('should not been called setCategories when nothing is submitted ', () => {
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {},
            });

            expect(setCategories).not.toHaveBeenCalled();
        });

        test('should call setCategories and clean the textbox', () => {
            
            const value = 'Hello World!';
            wrapper.find('input').simulate('change', {
                target: {
                    value,
                },
            });
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {},
            });
            
            expect(setCategories).toHaveBeenCalled();
            expect(setCategories).toHaveBeenCalledTimes(1);
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
            expect(wrapper.find('input').prop('value')).toBe('');


        });
    })