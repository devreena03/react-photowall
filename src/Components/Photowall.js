import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall(props) {
    return<div>
         <Link className="add-icon" to="/add-photo"></Link>
    {/* <a className="add-icon" href="#/add-photo" onClick={()=>props.onSwitchScreen('addphoto')}></a> */}
    <div className="photo-grid">
        {props.posts
        .sort((x,y)=> {
            return y.id - x.id;
        })
        .map((post, index)=>
        <Photo key={index} post={post} onRemovePhoto = {props.onRemovePhoto}/>)
        }
</div></div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired
}

// class Photowall extends Component {
//     render(){
//      return <div className="photo-grid">
//          {this.props.posts.map((post, index)=><Photo key={index} post={post}/>)}
//      </div>
//     }
//   }


  export default Photowall;