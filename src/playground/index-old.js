import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//const tasks = ["ele1","ele2","ele3"];

// const element = React.createElement('ol', null,
//  tasks.map((task,index)=> React.createElement('li',{key: index},task))
// );

//JSX
// const ele = 
// <div><h1>Tasks </h1>
// <ol>
//     {tasks.map((task,index)=><li key={index}>{task}</li>)}
// </ol>
// </div>

// ReactDOM.render(ele, document.getElementById('root'));

class List extends Component {
    render(){
     return (<ol>
           {this.props.tasks.map((task,index)=><li key={index}>{task}</li>)}
      </ol>)
    }
  }
  
  class Title extends Component {
      render(){
       return <h1>{this.props.value} </h1>
      }
    }

      class Main extends Component {
        render(){
         return <div>
                    <Title value={'Tasks details'}/>
                    <List tasks = {['ele4','ele5']}/>
                    <List tasks = {["ele1","ele2","ele3"]}/>
                    <Title value={'Tasks details ends here'}/>
                </div>
        }
      }
      ReactDOM.render(<Main/>, document.getElementById('root'));
