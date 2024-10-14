import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IUserProps = {
    user: IUser;
    lift:(user:IUser)=> void;

}

const User:FC<IUserProps> = ({user, lift}) => {
    return (

        <div key={user.id}><hr/> id: {user.id}  <div>name:{user.name}</div> username: {user.username} <div>email: {user.email}</div> <button onClick={() => {
            lift(user)
        }}>choose</button></div>

    );
};
export default User;