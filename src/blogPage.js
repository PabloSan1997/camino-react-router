import React from "react";
import { Link, Outlet} from "react-router-dom";
import { blogdatas } from "./blogData";

function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <Outlet/>
      <ul>
        {blogdatas.map((post) => (
          <BLogLink post={post} key={post.slug}/>
        ))}
      </ul>
    </>
  );
}

function BLogLink({post}) {
  return( <li>
    <Link to={`/blog/${post.slug}`}>{post.tittle}</Link>
  </li>);
}


export { BlogPage };
