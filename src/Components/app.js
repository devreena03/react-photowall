
import {connect} from 'react-redux'
import Main from './Main';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions';
//import {removePost} from '../redux/actions';
import {withRouter} from 'react-router'

function mapStoreToPosts(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch);
}

const app = withRouter(connect(mapStoreToPosts, mapDispatchToProps)(Main));

export default app;