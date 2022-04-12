import './App.css';
import Navbar from './components/Navbar';
import RouterMain from './pages/RouterMain';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from '../src/redux/store'

function App() {
  const Container = styled.div`
  /* background: #67bc98; */
  /* height: 100vh; */
`;
return (
    <Provider store = {store}>
<Container>
      <Navbar />
      <RouterMain />
      {/* <h4>Footer here</h4> */}
    </Container>
    </Provider>
  );
}

export default App;
