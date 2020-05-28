import process from 'process'

let FIREBASE_CSV_TO_JSON_ENDPOINT='http://localhost:5001/hk-data-search-8703a/us-central1/curl_fetch'

if (process.env.NODE_ENV == 'production') {
  // analytics.disable();
}else{
  // development plant ?

}

const DEFAULT_LANG = 'zh'

export default {
  FIREBASE_CSV_TO_JSON_ENDPOINT,
  DEFAULT_LANG
}
