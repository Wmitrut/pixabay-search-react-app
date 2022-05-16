import renderer from 'react-test-renderer';

import HeaderSearch from './index';

it('Renders correctly without data', () => {
  const tree = renderer.create(<HeaderSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
