import React, { Component } from "react";

class DisplayExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { position, employer, from, to } = this.props.exp;
    return (
      <div>
        <p>{position}</p>
        <p>{employer}</p>
        <p>
          {from} - {to}
        </p>
      </div>
    );
  }
}

export default DisplayExperience;
