import React , { Component, createContext } from 'react'

class TestContextProvider extends Component {
  state = {
    hello_state:'hello_state'
  };
  helloworld(){
    return "helloworld"
  }
  render() {
    return (
      <TestContext.Provider value={{
          ...this.state,
          helloworld: this.helloworld
        }}>
        { this.props.children }
      </TestContext.Provider>
    );
  }
}

export const TestContext = createContext();
export default TestContextProvider;
