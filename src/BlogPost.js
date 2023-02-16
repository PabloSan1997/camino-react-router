import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdatas } from "./blogData";
function BlogPost(){
    const {slug} = useParams();
    const navegar = useNavigate('/blog');
    const blogpost = blogdatas.find(post=>post.slug===slug);
    const returnToBlog = ()=>{
    navegar('/blog');
    }
    return(
       <>
       <h2>{blogpost.tittle}</h2>
       <p>{blogpost.content}</p>
       <p>Autor: {blogpost.autor}</p>
       <button
       onClick={returnToBlog}
       >Regresar</button>
       </>
    );
}
export{BlogPost}