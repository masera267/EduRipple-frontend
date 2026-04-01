import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchJoke = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(data);
        } catch (error) {
            console.error('Error fetching joke:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Random Joke Generator</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{joke.setup}</p>
                    <p><strong>{joke.punchline}</strong></p>
                    <button onClick={fetchJoke}>Get New Joke</button>
                </div>
            )}
        </div>
    );
};

export default JokeGenerator;