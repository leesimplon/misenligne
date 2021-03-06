import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import PostFrontToBack from './Component/postWithUpload_frontToBack';
import ListTous from './Component/ListTous'
import AfficheProfil from './Component/AfficheProfil'
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route path="/" exact component={PostFrontToBack} />
        <Route path="/personne" exact component={ListTous} />
        <Route path="/personne/:personneId" exact component={AfficheProfil} />
      </div>
    </Router>     
    )
  }
}
export default App;