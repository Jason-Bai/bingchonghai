function Category({name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <div className="description">{description}</div>
    </div>
  )
}

export default Category;
