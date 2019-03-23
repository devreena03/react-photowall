import React,{Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super();
        this.addPhoto = this.addPhoto.bind(this)
    }

    addPhoto(event){
        event.preventDefault();
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);
        const post = 
            {
                id:Number(new Date()),
                description: event.target.elements.description.value,
                imageLink: event.target.elements.link.value
            }
           this.props.startAddingPost(post);
           this.props.onHistory.push('/');
        
    }
        render(){
         return (
        
             <div className="form">
             <form onSubmit={this.addPhoto}>
                 <input type="text" placeholder="Link" name="link"/>
                 <input type="text" placeholder="Description" name="description"/>
                 <button>Post</button>
             </form>
         </div>
         )
        }
      }
    
    
export default AddPhoto;