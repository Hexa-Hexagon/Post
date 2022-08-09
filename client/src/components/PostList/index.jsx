import React , {useState} from 'react';
import Post from '../Post';
const PostList = () => {
    let [posts , setPosts] = useState([]);
    let [count , setCount] = useState(1);
    let [idInp1 , setIdInp1 ] = useState(1);
    let [idInp2 , setIdInp2 ] = useState(1)
    function AddPost(){
        const newPost={
            id:count,
            idInp1:idInp1,
            idInp2:idInp2
        }
        setPosts([...posts , newPost]);
        setCount(count+1);
        setIdInp1(idInp1+1);
        setIdInp2(idInp2+1);
    }
    const removePost=(post)=>{
        setPosts(posts.filter(p=>p.id!==post.id));
    }
    return (
    <>
        <header>
            <button onClick={AddPost}>crateNew</button>
        </header>
        <div >
            {posts.map(post=>
            <Post removePost={removePost} post = {post} key={post.id} />
            )}
        </div>
    </>
    );
};

export default PostList;