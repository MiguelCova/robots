import React, { useState, useEffect } from 'react';
import './App.css';


import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

function App() {

  const [ robot, setRobots ] = useState({
    r: [],
    searchfield: ''
  });

  const getRobots = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
       return response.json();
    }).then(users => {
      setRobots({
        ...robot,
        r: users
      })
    })
  }

  useEffect(() => {
    getRobots();
  }, [])
   
  const searchChange = e => {
    setRobots({
      ...robot,
      searchfield: e.target.value
    })
  }

  const filterRobots = robot.r.filter(r => {
    return r.name.toLowerCase().includes(robot.searchfield.toLowerCase());
  })

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox search={searchChange}/>
      <Scroll>
      <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default App;
