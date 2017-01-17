/* global document:false */
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRpg } from '../src/index';

const previewStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  border: 'solid #1a1a1a 10px',
  zIndex: '3',
};

const ImagePreview = ({ url }) => <img src={url} style={previewStyles} alt={url} width="50%" height="auto" />;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      padding: 10,
      columns: 3,
      popUp: false,
    };
  }
  paddingChanged(e) {
    this.setState({ padding: parseInt(e.target.value, 10) });
  }
  columnsChanged(e) {
    this.setState({ columns: parseInt(e.target.value, 10) });
  }

  /**
   * A generic callback function to be executed upon click of the image wrapper.
   * @param url - The URL prop of the object
   * @param obj - The syntheticMouseEvent object via react.
   */
  imagePopup(url, obj) {
    this.setState({ popUp: url });
    console.log(obj);
    setTimeout(() => this.setState({ popUp: false }), 1000);
  }

  getImages() {
    return [
      { url: 'http://james-oldfield.github.io/thailand/images/girl.adc2e72a.jpg', text:"heii", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://james-oldfield.github.io/thailand/images/RecliningBuddha.a1705a9a.jpg', text:"hello", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/545e7da07267083a1e8b4662/vsco_110814.jpg?w=709&dpr=2', text:"welcome", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab2a567167083b658b45df/vsco_062514.jpg?w=300&dpr=2', text:"this is", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab2a3a74670831708b4749/vsco_062514.jpg?w=300&dpr=2', text:"hddd", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab26fd75670897318b464c/vsco_062514.jpg?w=300&dpr=2', text:"hver", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab27657467082f588b4939/vsco_062514.jpg?w=300&dpr=2', text:"long tesetsdfasdfsdf", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab26b87267089b1d8b456f/vsco_062514.jpg?w=300&dpr=2', text:"this", clickHandler: this.imagePopup.bind(this) },
      { url: 'http://im.vsco.co/1/52d992e43ad70287923/545e7bab7567081e158b4575/vsco_110814.jpg?w=300&dpr=2', text:"hsdddkkdd", clickHandler: this.imagePopup.bind(this) },
    ];
  }

  render() {
    return (
      <div className="demo">
        <h1><a href="https://github.com/James-Oldfield/react-rpg">react-rpg</a></h1>
        <h2>react responsive photo grid <span className="version">v2.0</span></h2>
        <p>adjust padding:</p>
          <input type="range" min="0" max="100" className="paddingController" value={this.state.padding} onChange={this.paddingChanged.bind(this)} />
        <p>adjust columns at desktop breakpoint:</p>
          <input type="range" min="1" max="10" className="columsController" value={this.state.columns} onChange={this.columnsChanged.bind(this)} />

          { this.state.popUp !== false ? <ImagePreview url={this.state.popUp} /> : null }

        <ReactRpg imagesArray={this.getImages()} columns={[1, 2, this.state.columns]} padding={this.state.padding} />
      </div>
    );
  }
}

const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
