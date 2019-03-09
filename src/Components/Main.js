import React,{Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component {

  constructor(){
    super()
  }

    render(){
      console.log(this.props.posts);
     return <div>
      <Route exact path="/" render={()=>(
        <div>
        <Title/>
        <Photowall posts={this.props.posts} />
      </div>
      )} />
          
      <Route path="/add-photo" render={({history})=>(
           <div><Title/>  
                {/* <AddPhoto onAddPhoto = {(post)=>{
                  console.log(post);
                  this.addPhoto(post);
                  history.push('/');
                }
                }/> */}
                
                </div>
       )} />      
       </div>
    }
  }

export default Main;

//props are  meant to be read only immutable data,its not change over time
  //state - represent data that can be changed over time.
  //state management - to add some photos dynamically and remove them dynamically we need 
  // state management, if we add a photo it will update the array and then render method 
  //has to notify to render the UI again, for that we need to use constrauctor method of class
