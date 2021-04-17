export const InputUserRequest = () => {
  return (
    <div className="forms-api-console__input--container">
      <label className="forms-api-console__textarea-label">Запрос:</label>
      <textarea
        className="forms-api-console__input-textarea"
        onChange={(e) => {
          // try {
          //   console.log(JSON.parse(e.currentTarget.value))
          // } catch {
          //   console.log(e.currentTarget.value)
          // }
        }}
      />
    </div>
  )
}
