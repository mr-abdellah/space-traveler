import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionsContainer from '../components/Missions/MissionsContainer';
import store from '../redux/store';

it('Test missions component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MissionsContainer />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
