import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Make another server call or sth
    }
  }

  componentWillUnmount() {
    console.log("Counter - UnMount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // picks the 'count' property of 'this.state' :p
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
