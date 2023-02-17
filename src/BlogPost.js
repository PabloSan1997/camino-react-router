import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdatas } from "./blogData";
function BlogPost(){
    const {slug} = useParams();
    const auth= useAuth();
    const navegar = useNavigate('/blog');
    const blogpost = blogdatas.find(post=>post.slug===slug);
    const couldDelete = auth.user?.isAdmin || blogpost.autor===auth.user?.userName;
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
       {couldDelete && (
        <button>Eliminar Blog</button>
       )}
       </>
    );
}
export{BlogPost}