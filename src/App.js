import { BrowserRouter, Link, Navigate, Route, Redirect, Switch } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Films from './pages/Films'
import FilmDetails from './pages/FilmDetails'
import Most_Popular from './pages/Most_Popular'
import CheckOut from './pages/CheckOut'


function App() {
  const [cartIsEmpty] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Wonkymotion Film Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/films">Films</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/films/id/:id" >
            <FilmDetails />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/most_popular" >
            <Most_Popular />
          </Route>
          <Route exact path="/redirect" >
            <Redirect to="/about" />
          </Route>
          <Route exact path="/checkout">
              {cartIsEmpty ? <Route component={Films} />: <Route component={CheckOut} />} 
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App