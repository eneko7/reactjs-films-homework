import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';

import MovieInfoButtons from '../index';

describe('MovieInfoButtons', () => {
    const shallowRenderer  = new ShallowRenderer();
    it('renders correctly', () => {
        shallowRenderer.render(<MovieInfoButtons />);
        const result = shallowRenderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });

    it('MovieInfoButtons -> Click (show info) ', () => {
        const output = renderer.create(<MovieInfoButtons annotation="There are growing dangers in the wizarding world og 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding" />);
        output.root.findByProps({ className: 'bottom_right_buttons_box_button_view bottom_right_buttons_box_button' }).props.onClick();
        expect(output).toMatchSnapshot();
    });
});