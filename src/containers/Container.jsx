import { connect } from 'react-redux'

import Counter from '../component/Counter'
import { incrementCount, decrementCount, resetCount } from '../actions'

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(incrementCount()),
        decrement: () => dispatch(decrementCount()),
        reset: () => dispatch(resetCount())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)