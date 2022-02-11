import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import { selectedUser } from '../Redux/selectedUser/selectedActions';
import { useParams } from 'react-router-dom';  

function User() {
    const user = useSelector(state => state.user.selectedUser);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                const data = response.data;
                dispatch(selectedUser(data));
            })
            .catch(error => {
                console.log(error);
            });
    }, [dispatch, userId]);
    console.log(userId);
    return (
        <div className="card" style={{width: '18rem'}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.phone}</li>
            </ul>
        </div>
    );
};

export default User;