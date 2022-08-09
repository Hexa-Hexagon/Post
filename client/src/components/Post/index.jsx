import React from 'react';
import { useState } from 'react';
const Post = (props) => {
    let [name , setName ] = useState('');
    let [description , setDescription ] = useState('') 
        function SavePost(){
        const inp1 = document.getElementById(`inp1${props.post.idInp1}`);
        inp1.value = null;
        const inp2 = document.getElementById(`inp2${props.post.idInp2}`);
        inp2.value = null;
    }
    return (
        <div style={{border: "2px solid black" , marginTop:"15px"}}>
            <div>
                <div >
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <form>
                    <input id={`inp1${props.post.idInp1}`} value={name} onChange={e => setName(e.target.value)} type={'text'} placeholder="Name Posts:"/>
                    <input id={`inp2${props.post.idInp2}`} value = {description} type={'text'} onChange={e => setDescription(e.target.value)} placeholder="Description Posts:" />
                    </form>
                    <div>
                    <button onClick={SavePost}>Save</button>
                    <button onClick={()=>{props.removePost(props.post)}}>Remove</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Post;