import React,{Component} from 'react';
import List from './List';
import Title from './Title';

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

export default Main;