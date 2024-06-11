import { useTodosIds } from "../services/queries"

function Todo() {
  const { data, isPending, isError, fetchStatus } = useTodosIds()
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>there is an error!</span>
  }

  return (
    <div>
      <p>Query function status : {fetchStatus}</p>
      {data.map((id) => (
        <p>{id}</p>
      ))}
    </div>
  )
}

export default Todo
