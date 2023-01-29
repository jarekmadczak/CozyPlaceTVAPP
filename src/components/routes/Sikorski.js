import React from "react";
import Welcome from "../pages/Welcome";
import Header from "../pages/Header";
import Sliders from "../pages/Sliders";

class Foo extends React.Component {
  constructor(){
    super();
    this.state = {loaded: false};
  }

  render(){
    return (
      <div>
        {this.state.loaded ? null :
          <div
            style={{
              background: 'red',
              height: '400px',
              width: '400px',
            }}
          />
        }
        <img
          style={this.state.loaded ? {} : {display: 'none'}}
          src={this.props.src}
          onLoad={() => this.setState({loaded: true})}
        />
      </div>
    );
  }
}
const Sikorski = () =>{
    return (
    <div >
    <Welcome />
    <Sliders />
    <Header />
  </div>
    );
};

export default Sikorski