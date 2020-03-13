import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import React from 'react';

class Profiling extends React.Component {
    // State will apply to the posts object which is set to loading by default
    state = {
        posts: [],
        isLoading: true,
        errors: null
    };
    // Now we're going to make a request for data using axios
    getPosts() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.setState({
                posts: response.data,
                isLoading: false
            });
        })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getPosts();
    }
    // Putting that data to use
    render() {
        const { isLoading, posts } = this.state;
        return (
            <React.Fragment>
                <h2>People Information</h2>
                <div>
                    {!isLoading ? (
                        posts.map(post => {
                            const { id, name, username, email } = post;
                            return (
                                <div key={id}>
                                    <h2>{name}</h2>
                                    <h3>{username}</h3>
                                    <h4>{email}</h4>
                                    <Button variant="contained" color="primary">View</Button>
                                    <h4>Random number: {Math.random()}</h4>
                                    <hr />
                                </div>
                            );
                        })
                    )
                        : (
                            <div>
                                <LinearProgress />
                                <LinearProgress color="secondary" />
                            </div>
                        )}
                </div>
            </React.Fragment>
        );
    }
}

export default Profiling;