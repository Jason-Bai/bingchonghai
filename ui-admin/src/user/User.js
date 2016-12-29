function User({name, description}) {
  return (
    <div>
      <h1 className="title">{name}</h1>
      <div className="description">{description}</div>
    </div>
  )
}

export default User
