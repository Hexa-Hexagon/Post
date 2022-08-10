import React from 'react';
import { useState } from 'react';
import classes from './index.module.css'
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
        <div className={classes.post}>
            <div className={classes.postInner}>
                <div className={classes.postFront}>
                    <h1>{name}</h1>
                </div>
                <div className={classes.postBack}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <form className={classes.inpPostContainer}> 
                    <input className={classes.inpPost} id={`inp1${props.post.idInp1}`} value={name} onChange={e => setName(e.target.value)} type={'text'} placeholder="Name Posts:"/>
                    <input className={classes.inpPost} id={`inp2${props.post.idInp2}`} value = {description} type={'text'} onChange={e => setDescription(e.target.value)} placeholder="Description Posts:" />
                    </form>
                    <div className={classes.btnPostContainer}>
                    <button className={classes.btnPost} onClick={SavePost}>Save</button>
                    <button className={classes.btnPost} onClick={()=>{props.removePost(props.post)}}>Remove</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Post;