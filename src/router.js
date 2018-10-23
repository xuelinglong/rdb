import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home/Home';
import Message from './views/msg/Message';
import Push from './views/push/Push';
import User from './views/user/User';
import TopicDetail from './views/home/topicDetail/TopicDetail';
import TopicDetailDisaus from './views/home/disqus/Disqus';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/topicDetail/:id' component={TopicDetail}/>
      <Route exact path='/topicDetail/:id/disqus' component={TopicDetailDisaus}/>
      <Route path='/message' component={Message}/>
      <Route path='/push' component={Push}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)

export default Main;
