import React from 'react'
import { delectaction } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// const mapDispatchToProps = (dispatch) => {
//     dispatch({
//         actions: bindActionCreators(TODOActions, dispatch)
//     })
// }
const mapDispatchToProps = dispatch => ({
    delectaction: id => dispatch(delectaction(id))
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
    handleDelect = (index) => {
        let { delectaction } = this.props
        delectaction(index)
    }
    render() {
        console.log('ccc', this.props)
        let { item } = this.props
        let text = item.text
        let index = item.index
        return (
            <div className="todoitem" onClick={(index)=>{this.handleDelect(index)}}>
                <i>{index}</i>
                <span className="item_text">{text}</span>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOItem)