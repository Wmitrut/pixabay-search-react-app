import renderer from 'react-test-renderer';

import Image from './index';

const image = {
  index: 1,
  tags: 'sun, flower, yellow',
  webFormatUrl: 'https://hosstools.com/wp-content/uploads/2020/10/black-oil-sunflower.jpg',
};

it('Renders correctly', () => {
  const tree = renderer
    .create(<Image image={image} index={image.index} key={image.index} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
