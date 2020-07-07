import React ,{componnet, Component} from 'react'
import Song from './song'
import axios from '../axios'
import Edit from './editSong'
import {connect}from 'react-redux'
class Songs extends Component{

    state={
songs:[],
selectedSong:null
    }
    componentDidMount(){
        axios.get('/gets').then(x=>{
             this.setState({songs:x.data})
             this.props.onload(x.data)
            })
              
            
         };
     
selectedHandler=(id)=>{
    this.setState({selectedSong:id})
console.log(id);
}

render(){

const son= this.state.songs.map(s=>{
    return <Song name={s.name} key={s.id} USername={s.USername} year={s.year} clicked={()=>{this.selectedHandler(s.id)}}></Song>
  })
return(
    <div>
        <h1 id="listH1">:רשימת השירים שלי</h1>
        <button className="btn">הוסף</button>
     
       <input className="inputs" placeholder="הקש שם זמר לחיפוס"></input>
       <br/>
        {son}
        <Edit id={this.state.selectedSong}></Edit>
    </div>
);

}

}
const mapDispatchToProps = dispatch => {
    return {
        onload: (value) => dispatch({ type: 'LOAD',value:value }),
        clickedDecrement: () => dispatch({ type: 'DELETE' }),
        clickedAdd: (value) => dispatch({ type: 'EDIT', value: value }),
        clickedSubtract: (value) => dispatch({ type: 'lOAD', value:value })
    }
}
export default connect(null,mapDispatchToProps)(Songs)