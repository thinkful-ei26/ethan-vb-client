import React from 'react';
import {connect} from 'react-redux';
import Sidebar from "react-sidebar";
// import requiresLogin from '../common/requires-login';
import { display, focusOn } from '../actions/navigation'
import { fetchTrips, fetchMyTrips } from '../actions/trips';
import { clearAuth } from '../actions/auth';
import {Link} from 'react-router-dom';
import { clearAuthToken } from './local-storage';
// import './sidebar.scss';

const mql = window.matchMedia(`(min-width: 900px)`);

class SidebarNav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  toggleCategory(category){
    this.setState({[category]: !this.state[category]});
  }

 render(){
    return(
      <React.Fragment>
        {!this.state.sidebarDocked && 
        <button 
          className="open-sidebar" 
          onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}>
          <i className="fa fa-bars"></i>
        </button>}
        <Sidebar
          sidebar=
          {
            <nav className="sidebar" style={{display: `${!this.state.sidebarOpen && !this.state.sidebarDocked ? 'none' : 'inherit'}`}}>
              {/* <button
                className="nav-parent"
                onClick={()=>{
                  this.toggleCategory('showForum')
                }}
              >
              <i className="fas fa-edit"></i> Forums {this.state.showForum ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
              </button> */}
              <section className="options">
                <Link 
                  to="/home"
                  className="content" 
                  onClick={()=>{
                    this.onSetSidebarOpen(false)
                    this.props.dispatch(display('my-trips'))
                    this.props.dispatch(fetchMyTrips())
                  }
                  }>All Trips
                </Link>
                <Link 
                  to="/home"
                  className="content" 
                  onClick={()=>{
                  this.onSetSidebarOpen(false)
                  this.props.dispatch(display('all-trips'))
                  this.props.dispatch(fetchMyTrips())
                  } 
                }
                >My Trips
                </Link>
                <Link 
                  to="/home"
                  className="content" 
                  onClick={()=>{
                  this.onSetSidebarOpen(false)
                  this.props.dispatch(display('new-trip'))
                  } 
                }
                >Add A New Trip
                </Link>
                <Link 
                  to="/"
                  className="content" 
                  onClick={()=>{
                  this.logOut()
                  } 
                }
                >Log Out
                </Link>
              </section>}
            </nav>
          }
          children=""
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { position: 'fixed', top: 55, background: 'rgb(237, 236, 217)', width: 200, }, root: {position: 'relative', boxShadow: 0}, }}
        >
        </Sidebar>
        </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  display: state.navigation.display,
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
});

export default (connect(mapStateToProps)(SidebarNav));