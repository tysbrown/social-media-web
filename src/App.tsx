import React from "react"
import "./App.css"
import { useQuery, gql } from "@apollo/client"

const App = () => {
  const Query = gql`
    query Query {
      hello
      userAccount {
        id
        first_name
        last_name
        age
      }
      post {
        id
        body
      }
    }
  `

  const { loading, error, data } = useQuery(Query)

  const renderData = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
      <div className="h-screen flex justify-center items-center">
        <div>
          <p>{data.hello}</p>
          {data.userAccount.map((user: any) => (
            <div key={user.id}>
              <div>{user.first_name}</div>
              <div>{user.last_name}</div>
              <div>{user.age}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <div>{renderData()}</div>
}

export default App
