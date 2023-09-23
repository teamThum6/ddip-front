import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
    </ReactRoutes>
  )
}

export default Routes
