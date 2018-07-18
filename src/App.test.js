/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './components/PlayersList/PlayersList';

it('renders without crashing', () => {
    shallow(<App />);
});

it('should update player score', () => {
    const appComponent = shallow(<App />);
    const players = [
        {
            name: 'Kunegunde',
            score: 5
        }
    ];
    appComponent.setState({players});

    const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
    onScoreUpdate(0, 5);

    const playersAfterUpdate = appComponent.state().players;

    expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add new player', () => {
    const appComponent = shallow(<App />);
    const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
    onPlayerAdd('Anne');

    const players = appComponent.state().players;

    expect(players.length).toEqual(1);
    expect(players[0].name).toEqual('Anne');
    expect(players[0].score).toEqual(0);
});
