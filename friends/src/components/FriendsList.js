import React from "react";
import AddFriend from "./AddFriend";
import {axiosWithAuth} from 

class FriendsList extends React.Component {
    state= {
        friends: [],
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get("/api/friends/")
        .then(res => {console.log(res.data);
            this.setState({ friends: res.data});
        })
        .catch(err => console.log(err));
    };
    render() {
        console.log(this.state, "working");
        return(
            <div>
                <AddFriend /> {this.state.friends.map(item => (
                    <div key ={item.id}>
                        <p>id: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>Email:{item.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default FriendsList;