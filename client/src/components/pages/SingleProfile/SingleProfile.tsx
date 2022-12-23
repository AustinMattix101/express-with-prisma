import { Link, useParams } from "react-router-dom"

function SingleProfile() {
    const { username } = useParams();
  return (
    <section className="section product">
        <h2>Single Profile</h2>
        <h3>{username}</h3>
        <Link to="/profile">Back to Profile</Link>
    </section>
  )
}

export default SingleProfile