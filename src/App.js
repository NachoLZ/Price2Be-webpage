import React, { useRef, useEffect } from 'react';
import { HashRouter ,useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Team from './views/Team';
import Contact from './views/Contact';
import Mision from './views/Mision';

// Initialize Google Analytics
ReactGA.initialize('UA-178639050-1');

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <HashRouter >

        <Switch>
          <AppRoute redirect exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute redirect exact path="/team" component={Team} layout={LayoutDefault} />
          <AppRoute redirect exact path="/mision" component={Mision} layout={LayoutDefault} />
          <AppRoute redirect exact path="/contactus" component={Contact} layout={LayoutDefault} />
        </Switch>
        </HashRouter>
      )} />
  );
}

export default App;