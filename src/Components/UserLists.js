import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from '../Redux/users/usersActions';
import { Link } from 'react-router-dom';

function UserLists() {
    const users = useSelector((state) => state.allUsers.users);

    const dispatch = useDispatch();


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const data = response.data;
                dispatch(setUsers(data));
            })
            .catch(error => {
                console.log(error);
            })
    }, [dispatch]);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    users.map(user => (
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/user/${user.id}`} key={user.id}>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {user.name}</h5>
                                        <p className="card-text">Phone: {user.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </>
    );
};

export default UserLists;