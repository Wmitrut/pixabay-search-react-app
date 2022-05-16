import renderer from 'react-test-renderer';

import Empty from './index';

it('Renders correctly without data', () => {
  const tree = renderer.create(<Empty />).toJSON();
  expect(tree).toMatchSnapshot();
});
