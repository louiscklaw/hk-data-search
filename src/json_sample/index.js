#!/usr/bin/env node
const fs = require('fs')

const fetch = require('node-fetch')
let all_api_json = {}

const PACKAGE_LIST_URL = 'https://data.gov.hk/tc-data/api/3/action/package_list'
const PACKAGE_DETAIL_URL = 'https://data.gov.hk/tc-data/api/3/action/package_show?id='

var getPackageDetailUrl = (package_name) => PACKAGE_DETAIL_URL+package_name

const all_api_manifest = async () => {
  fetch(PACKAGE_LIST_URL)
    .then(res => res.json())
    .then( async (res_json) => {
      for(api_name of res_json.result){
        var _ = await fetch(getPackageDetailUrl(api_name))
          .then(res=> res.json())
          .then(res_json => {
            all_api_json[api_name] = res_json
          })
      }
    })
    .then(() => {
      fs.writeFileSync('all_api_manifest.json', JSON.stringify(all_api_json))
    })
}

all_api_manifest()
