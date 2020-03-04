import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    const cardComponent = robots.map((robot, index) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
    })
    return (
        <div>
            {cardComponent}
            {/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
        </div>
    )
}

export default CardList