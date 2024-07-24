import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const MostRuns = () => {
    const [topPlayers, setTopPlayers] = useState([]);
    useEffect(() => {
        fetch('https://www.iplt20.com/stats/2022/most-runs')
            .then(response => response.json())
            .then(data => setTopPlayers(data.stats.content))
            .catch(error => console.log(error));

            console.log(topPlayers)

    }, []);


    return (
        <div>
            <div>

                this is most runs

                {topPlayers.slice(0, 10).map((player, index) => (
                    <div key={index}>
                        <span>{index + 1}. {player.playerName} - {player.runs}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MostRuns