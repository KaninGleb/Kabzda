import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'useMemo',
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')

    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemoExample = () => {
    console.log('HelpsToReactMemoExample')
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya']);

    const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users]);

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().toTimeString().slice(0, 8)];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState<number>(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular ' + new Date().toTimeString().slice(0, 8)];
            setBooks(newBooks);
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular ' + new Date().toTimeString().slice(0, 8)];
        setBooks(newBooks);
    }, []);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret')

    return (
        <div>
            <button onClick={props.addBook}>Add book</button>
        </div>
    )
}

const Book = React.memo(BooksSecret);