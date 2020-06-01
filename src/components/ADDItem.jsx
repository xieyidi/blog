import React from 'react'
import { addaction } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// const mapDispatchToProps = (dispatch) => {
//     dispatch({
//         toggleTodo: id => dispatch(toggleTodo(id))
//     })
// }
const mapDispatchToProps = dispatch => ({
    addaction: id => dispatch(addaction(id))
})
const mapStateToProps = state => {
    return {
        items: state.items
    }
}

class TODOItem extends React.Component {
    constructor(props) {
        super(props)
    }
    handleAdd = () => {
        let { addaction } = this.props
        addaction()
    }
    render() {
        return (
            <div className="additem" onClick={() => { this.handleAdd() }}>
                <i>+</i>
                <span className="item_text">添加item</span>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOItem)