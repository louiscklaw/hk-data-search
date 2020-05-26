import React from 'react';

import package_list from '../json_sample/package_list.json';
import raw_all_api_manifest from '../json_sample/all_api_manifest_99.json';

let default_state = {
  hello_state:'hello_state',
  package_list,
  raw_all_api_manifest,
  search_term: '',
  helloworld: () => {},
  getApiManifestKeys: ()=>{},
  updateSearchTerm: ()=>{},
  getMatchApiManifest: ()=>{ return new Set([])},
  getApiByName: ()=>{},
  genApiTagsByName: ()=>{}
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

  getResultsFromApiManifest = (search_term, field) => {
    return   Object.entries(raw_all_api_manifest)
    .filter( (x) => { return x[1].result[field].search(search_term) > -1 })
    .map(x => x[0])
  }

  getResourcesFromApiManifest = (search_term, field) => {
    return Object.entries( raw_all_api_manifest ).filter( x => {
      let found = false
      x[ 1 ].result.resources.forEach(x => {
        if (x.description.search('CCI') > -1){
          found = true
        }
      })
      return found
    } )
    .map(x => x[0])
  }

  getMatchApiManifest = (search_word) =>{
    // let filter_by_notes = raw_all_api_manifest.filter( (x) => x.notes.search('CCI') > -1 )
    let test = new Set(this.getResultsFromApiManifest(search_word, 'title'))
    return test
  }

  getApiByName = (api_name) => {
    return raw_all_api_manifest[api_name]
  }

  genApiTagsByName = (api_name) => {
    return ['XML','運輸','中華電力有限公司']
  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        helloworld: this.helloworld,
        getApiManifestKeys: this.getApiManifestKeys,
        updateSearchTerm: this.updateSearchTerm,
        getMatchApiManifest: this.getMatchApiManifest,
        getApiByName: this.getApiByName,
        genApiTagsByName: this.genApiTagsByName
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }

}

export default GlobalContextProvider