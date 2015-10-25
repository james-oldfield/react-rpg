/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import { ReactRpg } from "../src/index";

const images = [
  { url: "http://james-oldfield.github.io/thailand/images/girl.adc2e72a.jpg" },
  { url: "http://james-oldfield.github.io/thailand/images/RecliningBuddha.a1705a9a.jpg" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/545e7da07267083a1e8b4662/vsco_110814.jpg?w=709&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/53ab2a567167083b658b45df/vsco_062514.jpg?w=300&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/53ab2a3a74670831708b4749/vsco_062514.jpg?w=300&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/53ab26fd75670897318b464c/vsco_062514.jpg?w=300&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/53ab27657467082f588b4939/vsco_062514.jpg?w=300&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/53ab26b87267089b1d8b456f/vsco_062514.jpg?w=300&dpr=2" },
  { url: "http://im.vsco.co/1/52d992e43ad70287923/545e7bab7567081e158b4575/vsco_110814.jpg?w=300&dpr=2" }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padding: 10,
      columns: 3
    };
  }
  paddingChanged(e) {
    this.setState({ padding: parseInt(e.target.value) });
  }
  columnsChanged(e) {
    this.setState({ columns: parseInt(e.target.value) });
  }
  render() {
    return (
      <div className="demo">
        <h1><a href="https://github.com/James-Oldfield/react-rpg">react-rpg</a></h1>
        <h2>react responsive photo grid</h2>
        <p>adjust padding:</p>
          <input type="range" min="0" max="100" className="paddingController" value={this.state.padding} onChange={this.paddingChanged.bind(this)} />
        <p>adjust colums:</p>
          <input type="range" min="1" max="10" className="columsController" value={this.state.columns} onChange={this.columnsChanged.bind(this)} />

        <ReactRpg imagesArray={images} columns={this.state.columns} padding={this.state.padding} />
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
