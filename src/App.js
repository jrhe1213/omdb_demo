// lib
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import HomePage from './pages/homePage/homePage'
import DetailPage from './pages/detailPage/detailPage'
import NotFound from './pages/errorPage/notFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/omdb/:id">
          <DetailPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
