import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div className="homePage">
        <h1>This is title</h1>
        <p>Hello home page</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    )
  }
}

export default HomePage;
