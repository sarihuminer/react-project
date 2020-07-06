import React,{component, Component} from 'react'

class EditSong extends Component{
state={
id:null,
song:null
}

componentDidUpdate(){
    //this.state.post=this.props.id;
    if(this.props.id)
   if(!this.state.song||(this.state.song&&this.state.song.id!==this.props.id))
   console.log('new')
//axios.get('/posts/'+this.props.id).then(res=>{
//this.setState({post:res.data});
//})
}

render(){
    return(
        <div className="edit">
<form>
    <label>שם</label>
    <input className="inputs" type="text"></input>
    <label >זמר</label>
    <input className="inputs" type="text"></input>
    <label>נוצר בשנת</label>
    <input className="inputs" type="text"></input>
    <button className="btn">שמירה</button>
    <button className="btn">ביטול</button>
</form>
        </div>
    );
}

}export default EditSong