import { useParams } from "react-router-dom"
// import { useEffect } from "react";

export default function IndividualBlogPage() {
    const params = useParams();
    console.log(useParams());

    // useEffect(()=>{
    //     fetch(`http://localhost:3100/api/blog/${params.blogId}`)
    // },[params.id])

  return (
    <div>IndividualBlogPage {params.blogId}</div>
  )
}
