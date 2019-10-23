import React from 'react';

const HOC = Component => {
  class NewComponent extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <Component
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default HOC;
