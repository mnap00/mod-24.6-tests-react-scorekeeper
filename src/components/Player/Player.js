import React from 'react';
import './Player.css';

const Player = (props) => (
    <li className='Player'>
        <span className='Player__name'>{props.name}</span>
        <span className='Player__score'>{props.score}</span>
        <button
            className='Player__button'
            onClick={() => props.onPlayerScoreChange(1)}
        >+</button>
        <button
            className='Player__button'
            onClick={() => props.onPlayerScoreChange(-1)}
        >-</button>
        <button
            className='Player__button'
            onClick={() => props.onPlayerRemove()}
        >X</button>
    </li>
);

export default Player;
