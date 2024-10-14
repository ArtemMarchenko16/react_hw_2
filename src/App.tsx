import React, {FC, useState} from 'react';
import Users from "./components/users/Users";
import {IPosts} from "./models/IPosts";
import {IUser} from "./models/IUser";
import {getPosts} from "./services/api.service";


const App:FC = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);
    let lift = (user:IUser) => {
        getPosts(user)
            .then((response: IPosts[]) => {
                setPosts(response)
            })
    }

    return (
    <div>
      <Users lift={lift}/>

        <hr/>
            {
                posts.map(post => <div><br/>id:{post.id}
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>)
            }
        <hr/>
    </div>

  );
}

export default App;
