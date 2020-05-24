import React from 'react';

import package_list from '../json_sample/package_list.json';
import raw_all_api_manifest from '../json_sample/all_api_manifest_99.json';

let default_state = {
  hello_state:'hello_state',
  package_list,
  raw_all_api_manifest,
  search_term: ''
}

export const GlobalContext = React.createContext(default_state)

class GlobalContextProvider extends React.Component {
  state = default_state

  helloworld(){
    return 'helloworld'
  }

  getApiManifestKeys = () => {
    return Object.keys(this.state.raw_all_api_manifest)
  }

  updateSearchTerm = (search_term) => {
    this.setState({...this.state, search_term})
  }

  searchApi = (search_term) => {
    return search_term
  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        helloworld: this.helloworld,
        getApiManifestKeys: this.getApiManifestKeys,
        updateSearchTerm: this.updateSearchTerm
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }

}

export default GlobalContextProvider