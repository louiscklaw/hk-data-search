import React from 'react'

function TableSample({api_json}){
  console.log(api_json)
  return(
    <table class="table" style={{width:'80%', margin:'auto'}}>
  <thead>
    <tr>
      <th><abbr title="Position">property name</abbr></th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {
        ['help'].map(x => {
          return(
            <>
              <th>{x}</th>
              <td>{api_json[x]}</td>
            </>
          )
        })
      }
    </tr>
  </tbody>
</table>
  )
}

export default TableSample