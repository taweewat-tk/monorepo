import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { TestComponent, Ui } from '@monorepo/ui';
import '../styles.css';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const title = 'React One';
  return (
    <StyledApp>
      <NxWelcome title="react-one" />
      <div className="w-full text-center text-red-600">{title}</div>
      <Ui />
      <TestComponent title={title} />
    </StyledApp>
  );
}

export default App;
