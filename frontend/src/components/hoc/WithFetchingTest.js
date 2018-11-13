import TestRenderer from 'react-test-renderer';
import WithFetching from "./WithFetching";

describe('tests if fetch is performed', () => {
  it('does fetch and tests if state is updated', () => {
    const testRenderer = TestRenderer.create(<WithFetching />)
  });
});