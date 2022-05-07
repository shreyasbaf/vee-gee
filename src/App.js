import './App.css';
import Navbar from './components/Navbar';
import RouterMain from './pages/RouterMain';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from '../src/redux/store'
import logo from './assets/images/logo.png'
import Footer from './pages/Footer';
function App() {
  const Container = styled.div`
  /* background-image: url('https://products.ls.graphics/mesh-gradients/images/23.-California_1.jpg'); */
  /* height: 100vh; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
`;

return (
    <Provider store = {store}>
    <Container>
      <Navbar />
      <RouterMain />
      {/* <h4>Footer here</h4> */}
      {/* <Footer /> */}
    </Container>
    </Provider>
  );
}

export default App;
