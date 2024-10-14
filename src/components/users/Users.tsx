import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

type IUsersProps = {
    lift:(user:IUser) => void;
}

const Users:FC<IUsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, []);

    return (
        <div>
            {
                users.map((value: IUser) => <User lift={lift} key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;