import { useState } from "react"

import { PostList } from "./postlist";
function PostInput()
{

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [list,setList]=useState([]);

    const handleVerify=(id)=>{

        console.log("toggle triggered")
        const updatedList =list.map((e)=>{

            if(e.id==id)
            {
                e.verify = !e.verify
            }

            return e;

        })

        setList(updatedList)

    }
      
    

    const handleADD=()=>{
        
        console.log("title",title);
        console.log("body",body);
        setList(
            [...list,{
                title:title,
                body:body,
                verify:false,
                id:Math.random()
            }]
        )

        console.log("list",list)

    }


    return (
        <div style={{display:"flex",flexDirection:"column",margin:"10px auto" ,width:"60%",gap:"10px"}}>
            <h1>POST </h1>
            <input placeholder="enter title " value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}></input>
       
            <textarea placeholder="enter body " value={body} onChange={(e)=>{
                setBody(e.target.value)
            }}></textarea>
            <button onClick={handleADD}>ADD POST</button>
            <PostList list={list} handleVerify={handleVerify}></PostList>
        </div>
    )
}

export {PostInput}