import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketContainer from '../components/Rockets/RocketContainer';

it('Test Rocket component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <RocketContainer />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
