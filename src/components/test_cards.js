import React from 'react'
import styled from 'styled-components'

import {GlobalContext} from '../context/GlobalContext'

import TestCard from './test_card'

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`

function TestCards(){
  let {getMatchApiManifest, getApiByName, genApiTagsByName, search_term} = React.useContext(GlobalContext);
  var test = getMatchApiManifest(search_term)
  console.log([...test])
  return(
    <>
      <Container>
        {
          [...test].map( x => {
            let api_full_info = getApiByName(x)
            let api_tags = genApiTagsByName(x)
            return(
              <TestCard
                key={x}
                api_name={x}
                name={api_full_info.result.title}
                description={api_full_info.result.notes}
                tags={api_tags}
                last_update={api_full_info.result.metadata_modified}
              />
            )
          })
        }
      </Container>
    </>
  )
}

export default TestCards

// function TestCards(){
//   let {getMatchApiManifest, getApiByName, genApiTagsByName} = React.useContext(GlobalContext);

//   return (
//     <Container>
//       {
//         [...getMatchApiManifest('CCI')].map( x => {
//           let api_full_info = getApiByName(x)
//           let api_tags = genApiTagsByName(x)

//           return (
//             <TestCard
//               key={x}
//               api_name={x}
//               name={api_full_info.result.title}
//               description={api_full_info.result.notes}
//               tags={api_tags}
//               last_update={api_full_info.result.metadata_modified}
//             />
//           )
//         })
//       }
//     </Container>
//   )
// }

// export default TestCards
