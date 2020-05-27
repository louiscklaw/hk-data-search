import React from 'react'

import TestGetJson from './test_get_json'

import {GlobalContext} from '../context/GlobalContext'

function ApiInfoTable({api_json}){
  let {trueIfNull, getAHref, json_in_csv_form, getJSON} = React.useContext(GlobalContext)

  return(
    <>
      <div>
        {
          api_json.result.resources.map(x => {
            return(
              <>
                <div style={{textAlign: 'left'}}>Resources</div>
                <table className="table" style={{width:'80%', margin:'auto'}}>
                  <thead>
                    <tr>
                      <th>title</th>
                      <th>value</th>
                      <td>Test</td>
                    </tr>
                  </thead>
                  <tbody>
                    {['name','description','id',].map(y => {
                      return(
                        <tr key={y}>
                          <td>{y}</td>
                          <td>{x[y]}</td>
                          <td></td>

                        </tr>
                      )
                    })}
                    {['url'].map(y => {
                      let test_get_csv = ''
                      if (true){
                        test_get_csv = <TestGetJson csv_url={x[y]}/>
                      }
                      return(
                        <tr key={y}>
                          <td>{y}</td>
                          <td><a href={x[y]} target="_blank">{x[y]}</a></td>
                          <td>
                            {test_get_csv}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>

                </table>
              </>
            )
          })
        }
      </div>



      <div>
        <div style={{textAlign: 'left'}}>General</div>
        <table className="table" style={{width:'80%', margin:'auto'}}>
        <thead>
          <tr>
            <th><abbr title="Position">property name</abbr></th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
            {
              ['title','type','notes','revision_id','url', ].map(x => {
                return(
                  <tr key={x}>
                    <th>result.{x}</th>
                    <td>{api_json.result[x]==null? "Null": api_json.result[x]}</td>
                  </tr>
                )
              })
            }

            {
              ['data_dictionary'].map(x => {
                return(
                  <tr key={x}>
                    <th>{x}</th>
                    <td>
                      <a href={api_json.result[x]} target="_blank">{api_json.result[x]}</a>
                    </td>
                  </tr>
                )
              })
            }
            {
              ['tags'].map(x => {
                return(
                  <tr key={x}>
                    <th>result.{x}</th>
                    <td>{api_json.result[x].length > 0 ? api_json.result[x].join(" ") :""}</td>
                  </tr>
                )
              })
            }


            {
              ['help'].map(x => {
                return(
                  <tr key={x}>
                    <th>{x}</th>
                    <td>
                      <a href={api_json[x]} target="_blank">{api_json[x]}</a>
                    </td>
                  </tr>
                )
              })
            }

        </tbody>
      </table>
      </div>
    </>
  )
}

export default ApiInfoTable