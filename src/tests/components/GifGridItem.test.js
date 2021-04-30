import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';



    describe('Tests on <GifGridItem />', () => {

        const id = 19;
        const title = 'A title';
        const url = 'https://google.com/something.jpg';
        const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

        test('Should render component', () => {
            expect(wrapper).toMatchSnapshot();
        });

        test('Should have a paragraph with the title', () => {
            const p = wrapper.find('p');
            expect(p.text().trim()).toBe(title);    
        });

        test('Should have an image with src equals to url and alt equals to title', () => {
            const img = wrapper.find('img');
            expect(img.props().src).toBe(url);
            expect(img.props().alt).toBe(title);
        });

        test('Should have the className animate__fadeIn', () => {
            const div = wrapper.find('div');
            expect(div.props().className).toContain('animate__fadeIn')
            // otra forma
            // expect(div.props().className.includes('animate__fadeIn')).toBe(true);
        });
    });