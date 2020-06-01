import TODOItem from './TODOItem'
import ADDItem from './ADDItem'
import React from 'react'

export default class TODOBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }

    render() {
        // console.log('vvv', this.props)
        const { items } = this.props
        const items_p = items['items']
        console.log('vvv', items_p, '\n', this.props)
        const l = items_p.length
        // console.log('vvv', l, '\n', this.props)
        let todo_items = []
        for (let i=0; i<l; i++) {
            console.log(items_p[i])
            todo_items.push(<TODOItem item = {items_p[i]}/>)
        }
        todo_items.push(<ADDItem/>)
        return (
            <div className="board-wrap">
                {todo_items}
            </div>
        )
    }
}