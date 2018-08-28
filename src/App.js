import React, { Component } from 'react';
import './App.css';
import Third from './Third'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='WHOLEPAGE'>
      <div className='first'>
        FIRST
        <div className='second'>
          SECOND
          <div className="a">Second A</div>
          <div className="b">Second B</div>
            <div className="c">Second C
              <div className="d">Second D
                <div className="e">Second E
                  <div className="f"><p>Second F</p>
                    <Third>
                      This is a child Component
                    </Third>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                  <div className='g'><Link to='www.google.com'>This should float to the right.</Link></div>
      </div>
    )
  }
}

export default App;
