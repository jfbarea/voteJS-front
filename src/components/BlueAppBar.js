import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';
import Logo from './Logo.js';
import theme from './BlueAppBar.scss';

const BlueAppBar = () => (
  <AppBar theme={theme} title="Decide BEST Madrid">

    <Navigation type="horizontal">
      <Link href="http://" label="Inbox" icon="inbox" count={2}/>
      <Link href="http://" active label="Profile" icon="person" />
    </Navigation>
  </AppBar>
);

BlueAppBar.propTypes = {
  children: PropTypes.node
};

export default BlueAppBar;
