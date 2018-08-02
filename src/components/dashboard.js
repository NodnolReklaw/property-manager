import React, { Component } from 'react';
import TabNav from './tabnav';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state={
            tabs: [
                {
                    title: 'Newsletter',
                    active: false,
                    component: <h4>Hey there - newsletter</h4>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey there - Requests</h4>
                },
            ]
        }
    }

    handleTabChange = (title) => {

    }

    render() {
      return (
        <div className='dashboard'>
            <TabNav handleTabChange={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
        </div>
      )
      
  
    }
  }
  
  export default Dashboard;