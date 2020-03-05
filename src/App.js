import React, { Component } from 'react'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }) 

        if(this.state.robots.length === 0){
            return <h1 className='tc'>Loading...</h1>
        }

        return (
            <div className='tc'>
                <h1 className='grow shadow-100 f1'>Robots</h1><hr/>
                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App