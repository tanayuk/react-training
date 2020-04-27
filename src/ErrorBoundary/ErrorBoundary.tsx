import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };
  componentDidCatch = (error: any, info: any) => {
    this.setState({ hasError: true, errorMessage: error });
  };
  render() {
    if (this.state.hasError) {
      return <h1>エラーが発生しました</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
