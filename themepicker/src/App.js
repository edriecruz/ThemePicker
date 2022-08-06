import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Layout from './Component/Layout'

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  />
      </Route>
    </Routes>

    </>
  );
}

export default App;
