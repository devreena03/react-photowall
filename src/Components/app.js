
import {connect} from 'react-redux'
import Main from './Main'

function mapStoreToPosts(state) {
    return {
        posts: state
    }
}

const app = connect(mapStoreToPosts)(Main)

export default app;