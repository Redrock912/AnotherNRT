import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  // arrow function enables this to be called!
  handleIncrement = product => {
    console.log(product);
    // react doesn't change when you change the value!
    // you need to tell react that it changed!
    this.setState({ count: this.state.count + 1 });
  };

  // wrapper for a function is redundant
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "btn m-2 ";
    classes += this.state.count === 0 ? "btn-warning" : "btn-primary";
    return classes;
  }
}

export default Counter;
