import { lazy, Suspense } from 'react'

import Page404 from './pages/Page404.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { Header } from './components/Header.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
] 


function App() {

  return (
  <main>
    <Header />
    <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
    </Suspense>
  </main>
  )
}

export default App
