import { Component } from "react";

class Home extends Component {
  componentDidMount() {
    console.log("Home - DidMount-", this.props);
  }
  componentWillUnmount() {
    console.log("Home - WillUnMount-", this.props);
  }
  render() {
    return (
      <div>
        <h3>This is Home Page</h3>
        <h3>This is Home Page</h3>
        <h3>This is Home Page</h3>
        <h3>This is Home Page</h3>
      </div>
    );
  }
}

export default Home;
