#!/usr/bin/env bats

@test "helloworld firebase function" {
  result="$(curl -s http://localhost:5001/hk-data-search-8703a/us-central1/helloWorld)"
  [ "$result" = "Hello from Firebase!" ]
}

@test "test receiving json" {
  result="$(curl -s -d '{"no_target_csv": "{ target_csv: 'https://not_exist.hk/opendata/cev/cyberport_event.csv' }"}' -H "Content-Type: text/plain" -X POST http://localhost:5001/hk-data-search-8703a/us-central1/curl_fetch)"
  [ "$result" = "{\"result\":\"error\"}" ]
}

@test "test not existing url" {
  result="$(curl -s -d '{ "target_csv": "https://not_exist.hk/opendata/cev/cyberport_event.csv" }' -H "Content-Type: text/plain" -X POST http://localhost:5001/hk-data-search-8703a/us-central1/curl_fetch)"
  [ "$result" = "{\"result\":\"target_url_not_found\"}" ]
}

# curl -X POST -H "Content-Type: text/plain" --data "this is raw data" http://78.41.xx.xx:7778/
