import React, {Component} from 'react';
import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

class BugTracker extends React.Component{
        render(){
          let { bugs, addNew, toggle, removeClosed } = this.props;
          return(
            <div>
              <BugStats bugs={bugs} />
              <BugEdit addNew={addNew} />
              <BugList {...{bugs, toggle, removeClosed}} />
            </div>
          )
        }
      }

export default BugTracker;