import React ,{componnet, Component} from 'react'
import Song from './song'
import axios from '../axios'

class Songs extends Component{

    state={
songs:[],
selectedSong:null
    }
    componentDidMount(){
        axios.get('/gets').then(x=>{
             this.setState({songs:x.data})
            })
              
            
         };
     
selectedHandler=(id)=>{
    this.setState({selectedSong:id})
console.log(this.state.selectedSong);
}

render(){

const son= this.state.songs.map(s=>{
    return <Song name={s.name} key={s.id} USername={s.USername} year={s.year} clicked={()=>{this.selectedHandler(s.id)}}></Song>
  })
return(
    <div>
        <h1>:רשימת השירים שלי</h1>
        {son}
        
    </div>
);

}

}export default Songs