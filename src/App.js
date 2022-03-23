import './App.css';
import Navbar from './components/Navbar';
import RouterMain from './pages/RouterMain';
import styled from 'styled-components';

function App() {
  const Container = styled.div`
  /* background: #67bc98; */
  /* height: 100vh; */
`;

  return (
<Container>
      <Navbar />
      <RouterMain />
    </Container>
  );
}

export default App;
