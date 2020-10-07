import React from "react";
import renderer from "react-test-renderer";
import PageLayout from "./index";
import TestingEnvironment from "../../test-util/router";
jest.mock('../header', () => 'Header');
jest.mock('../aside', () => 'Aside');
jest.mock('../footer', () => 'Footer');

describe('PageLayout Component', () => {
    it('should render pagelayout component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                  loggedIn: true,
                  id: '123'
                }
              }}>
                <PageLayout />
            </TestingEnvironment>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});