//if I want to apply linking -> html -> a tag -> 
import { Link } from "react-router-dom"

export default function BlogPage() {
  return (
    <div>
        <p>Blog Page</p>
        <Link to={'/home'}>Take me to Home</Link>
    </div>
  )
}
