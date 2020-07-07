import React,{ Component} from 'react'
import { connect } from 'react-redux'
class EditSong extends Component{
state={
selectedSong:{
    id:null,
    name:null,
    USername:null,
    year:null,
    imgSrc:null,
},
}

componentDidUpdate(){
    debugger;
    if(this.props.id)
    if(!this.state.selectedSong||(this.state.selectedSong&&this.state.selectedSong.id!==this.props.id)){
    let songs=this.props.songses.filter(s=>s.id===this.props.id)[0];
    console.log(songs)
    let mysong={...this.state.selectedSong} 
     mysong.USername=songs.USername;
     mysong.id=songs.id;
     mysong.name=songs.name;
     mysong.year=songs.year;
     console.log(mysong)
     this.setState({selectedSong:mysong})
    
    console.log(this.state.selectedSong)
    //this.setState({selectedSong:this.props.songses.filter(s=>s.id===this.props.id)})
   // console.log(this.state.selectedSong)
   }
}
// componentDidUpdate(){
//     debugger;
//     if(this.props.id)
//     if(!this.state.selectedSong||(this.state.selectedSong&&this.state.selectedSong.id!==this.props.id)){
//     let songs= this.props.songses;
//     songs=songs.filter(s=>s.id===this.props.id);
//     console.log(...songs)
//     this.setState({selectedSong:songs})
//     console.log(this.state.selectedSong)
//     //this.setState({selectedSong:this.props.songses.filter(s=>s.id===this.props.id)})
//    // console.log(this.state.selectedSong)
//    }
   





render(){
    let son = <p style={{ 'textAlign': 'center' }}>Please select a Song!</p>;
    if(this.props.id)
     son = <p style={{ 'textAlign': 'center' }}>loading .............!</p>;
   if(this.state.selectedSong.id)
    son=(
        <div className="edit">
<form>
    <label>שם</label>
    <input className="inputs" type="text" value={this.state.selectedSong.name}/>
    <label >זמר</label>
    <input className="inputs" type="text" value={this.state.selectedSong.USername}/>
    <label>נוצר בשנת</label>
    <input className="inputs" type="text" value={this.state.selectedSong.year}/> 
    <button className="btn">שמירה</button>
    <button className="btn">ביטול</button>
</form>
        </div>
    );
    return son;
}

}
const mapStateToProps=state=>{
  return{songses: state.songs};
}
export default connect(mapStateToProps)(EditSong)