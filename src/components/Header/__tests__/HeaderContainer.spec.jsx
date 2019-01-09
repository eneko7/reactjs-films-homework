import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import HeaderContainer from '../index';

const mockStore = configureMockStore();
const store = mockStore({
  film: {
    selectedFilm: ['prop1', 'prop12'],
  },
});

jest.mock('../Header', () => jest.fn().mockReturnValue(null));

describe('Header', () => {
  it('HeaderContainer.spec ', () => {
    TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderContainer />
        </MemoryRouter>
      </Provider>,
    );
    expect(HeaderContainer).toBeCalledTimes(1);
    expect(HeaderContainer.mock.calls[0][0]).toHaveProperty('selectedFilm', ['prop1', 'prop12']);
  });
});
