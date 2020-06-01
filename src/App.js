import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TODOBoard from './components/TODOBoard'
import * as TODOActions from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const App = ({items, actions}) => 
  (
    <div>
      <TODOBoard items={items} actions={actions} />
    </div> 
  )


const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TODOActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
