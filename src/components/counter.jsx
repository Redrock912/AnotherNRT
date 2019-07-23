import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.state.value++;

    // property can be named anything. it just points that this value is doing sth to this component
    this.setState({ value: this.state.value });
  };

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // picks the 'count' property of 'this.state' :p
    const { value: count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
