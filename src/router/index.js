import Home from '../screens/home/Home'
import Portfolio from '../screens/Portfolio'

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<Navigate replace to="/home"></Navigate>}></Route>
      </Routes>
    </BrowserRouter>)
}

export default Router
