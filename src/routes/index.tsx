import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
      <Route path='/create' element={<CreatePage />} />
    </ReactRoutes>
  )
}

export default Routes
