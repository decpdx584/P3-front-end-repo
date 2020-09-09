import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



// onSubmit={handleSubmit}
const Profile = (props) => {
    let [title, setTitle] = useState('');
    let [gameUrl, setGameUrl] = useState('');
    let [cohort, setCohort] = useState('');
    let [description, setDescription] = useState('');
    let [screenshot, setScreenShot] = useState('');
    let [redirect, setRedirect] = useState(false);
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleUrl = (e) => {
        setGameUrl(e.target.value);
    }
    const handleCohort = (e) => {
        setCohort(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleScreenShot = (e) => {
        setScreenShot(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGame = { gameUrl, title, description, cohort, screenshot }
        axios.post(`${REACT_APP_SERVER_URL}/api/games/addgame`, newGame)
            .then(response => {
                console.log(response);
                setRedirect(true);
                setTitle('');
                setGameUrl('');
                setDescription('');
                setCohort('');
                setScreenShot('');
            })
            .catch(error => console.log(error));
        }


    console.log(props);
    const userData = props.user ?
    (<div>
        <h1 className="pixel-text">{props.user.name}'s Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p>
        <p><strong>Email:</strong> {props.user.email}</p>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Whats the name of your game</label>
                <input type="title" name="title" value={title} onChange={handleTitle} className="form-control" required />
            </div>
            <div className="form-group">
                <label htmlFor="gameUrl">Submit your game URL Below</label>
                <input type="gameUrl" name="gameUrl" value={gameUrl} onChange={handleUrl} className="form-control" required />
            </div>
            <div className="form-group">
                <label htmlFor="cohort">Whats your Cohort(Optional)</label>
                <input type="cohort" name="cohort" value={cohort} onChange={handleCohort} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Tell us something about your game (optional)</label>
                <input type="description" name="description" value={description} onChange={handleDescription} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="screenshot">Link a Screen Shot of your game (optional)</label>
                <input type="screenshot" name="screenshot" value={screenshot} onChange={handleScreenShot} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div>
            { props.user ? userData : errorDiv() }

        </div>
    );

}

export default Profile;
