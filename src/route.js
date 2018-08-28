import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Third from './Third';

export default(
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Third' component={Third}/>
    </Switch>
)