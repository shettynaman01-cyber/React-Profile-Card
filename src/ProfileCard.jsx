function ProfileCard(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default ProfileCard