import React from 'react';
import {Meteor} from 'meteor/meteor';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import News from './News.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx'

const App = () => (
  <div>
      <AccountsUIWrapper />
      <News />
  </div>




);

export default App;
