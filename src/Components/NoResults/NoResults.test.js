import renderer from 'react-test-renderer';

import NoResults from './index';

it('Renders correctly without data', () => {
  const tree = renderer.create(<NoResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
