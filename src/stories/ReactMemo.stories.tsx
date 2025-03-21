import React, {useState} from 'react';


export default {
    title: 'React.memo demo',
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{
        props.users.map((u, i) =><div key={i}>{u}</div> )
    }</div>
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().toDateString().split(' ').join('-')];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}