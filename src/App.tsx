import React, { FC, useRef } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

const App: FC = () => {
  const about = useRef<HTMLHeadingElement>(null);
  const portfolio = useRef<HTMLHeadingElement>(null);
  const blog = useRef<HTMLHeadingElement>(null);
  const contact = useRef<HTMLHeadingElement>(null);
  return (
    <BrowserRouter>
      <Navbar
        about={about}
        portfolio={portfolio}
        blog={blog}
        contact={contact}
      />
      <Switch>
        <Route exact path="/">
          <Home
            about={about}
            portfolio={portfolio}
            blog={blog}
            contact={contact}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
