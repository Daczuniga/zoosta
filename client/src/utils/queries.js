const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedUsers {
        userId
        comment
        description
      }
      
      }
    }
  }
`

// const GraphQL = async (query, variables) => {
//   try {
//     const data = await fetch(SERVER_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query,
//         variables,
//       }),
//     })
//     const jsonData = await data.json()
//     console.log(jsonData)
//     return jsonData
//   } catch (err) {
//     console.error(err)
//   }
// }

GraphQL(QUERY_ME);