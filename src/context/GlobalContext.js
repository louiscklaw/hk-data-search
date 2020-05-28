import React from 'react';

import package_list from '../json_sample/package_list.json';
import raw_all_api_manifest from '../json_sample/all_api_manifest_99.json';

import run_config from '../run_config'

let default_state = {
  hello_state:'hello_state',
  package_list,
  raw_all_api_manifest,
  search_term: '',
  json_in_csv_form: {},
  helloworld: () => {},
  getApiManifestKeys: ()=>{},
  updateSearchTerm: ()=>{},
  getMatchApiManifest: ()=>{ return new Set([])},
  getApiByName: ()=>{},
  genApiTagsByName: ()=>{},
  trueIfNull: () => {return  false },
  getAHref: () => {}
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
    if(search_term.trim().length==0){
      return Object.entries(raw_all_api_manifest).map(x => x[0]).sort()
    }else{
      return Object.entries(raw_all_api_manifest)
        .filter( (x) =>  x[1].result[field].search(search_term) > -1 )
        .map(x => x[0])
    }
  }


  getResourcesFromApiManifest = (search_term, field) => {
    return Object.entries( raw_all_api_manifest ).filter( x => {
      let found = false
      x[ 1 ].result.resources.forEach(x => {
        if (x.description.search(search_term) > -1){
          found = true
        }
      })
      return found
    } )
    .map(x => x[0])
  }

  searchKeywordInField = (search_keyword, search_from_obj ,field_name) => {
    return search_from_obj[field_name].search(search_keyword) > -1
  }

  searchFromResourcesDescription = (search_keyword) => {
    let flatten_resources = []
    Object.entries(raw_all_api_manifest)
      .forEach( x => {
        x[1].result.resources.forEach( xx => {
          flatten_resources = [...flatten_resources, [x[0],xx]]
        })
      })

    let search_from_resources_name = flatten_resources
      .filter( x => this.searchKeywordInField(search_keyword, x[1], 'name'))
      .map( x => x[0])
    let search_from_resources_description = flatten_resources
      .filter( x => this.searchKeywordInField(search_keyword, x[1], 'description'))
      .map( x => x[0])
    return [...search_from_resources_name, ...search_from_resources_description]
  }

  getMatchApiManifest = (search_word) =>{
    // let filter_by_notes = raw_all_api_manifest.filter( (x) => x.notes.search('CCI') > -1 )
    let search_from_title = this.getResultsFromApiManifest(search_word, 'title')
    let search_from_resources_description = this.searchFromResourcesDescription(search_word)

    let combined_list = [...search_from_title, ...search_from_resources_description]

    let test = new Set(combined_list)
    return test
  }

  getApiByName = (api_name) => {
    return raw_all_api_manifest[api_name]
  }

  genApiTagsByName = (api_name) => {
    return ['XML','運輸','中華電力有限公司']
  }

  trueIfNull = (things_to_test) => {
    return 'should not use trueIfNull'
  }

  getAHref=(url)=>{
    return (
      <a href={url}>{url}</a>
    )
  }

  fetchAndReturnJSON(url, csv_url) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({
        target_csv: csv_url
      })
    })
    .then(res => res.text())
    .then(text => JSON.parse(text))
  }

  getJSON=(e, csv_url)=>{
    this.fetchAndReturnJSON(
      run_config.FIREBASE_CSV_TO_JSON_ENDPOINT,
      csv_url
      )
      .then(json => {
        this.setState({...this.state,json_in_csv_form: json})
      })
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
        genApiTagsByName: this.genApiTagsByName,
        getJSON: this.getJSON
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }

}

export default GlobalContextProvider