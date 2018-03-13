import { List, Avatar } from 'antd';
import React, { Component } from 'react';

class ListOfUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(result => result.json())
            .then(data => {
                console.log(data)
                this.setState({ users: data.results})
                console.log(this.state.users)
            })
            
    }

    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.state.users}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.picture.medium} />}
                            title={item.name.first + ' ' + item.name.last}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default ListOfUsers;