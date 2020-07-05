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
        <div>
<form>
    <label>שם</label>
    <input type="text"></input>
    <label>זמר</label>
    <input type="text"></input>
    <label>נוצר בשנת</label>
    <input type="text"></input>
    
</form>
        </div>
    );
}

}export default EditSong