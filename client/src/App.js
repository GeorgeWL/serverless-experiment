import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styles from './app.module.scss';
import DeviceTable from './modules/DeviceTable';
import DeviceDetail from './modules/DeviceDetail';
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <header className={styles.header}>
          <h1>
            Measurement Aggregator
        </h1>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to='/devices' activeStyle={{ textDecoration: 'underline' }}>Device List</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path='/devices'>
              <DeviceTable />
            </Route>
            <Route path='/device/:deviceId'>
              <DeviceDetail />
            </Route>
            {/* assuming cause is no mention of GUI for adding device, no page needed for it and is done by some external peripheral */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
