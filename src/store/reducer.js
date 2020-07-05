const initialState={
    songs:[]
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                songs:state.songs.add(action.value)
            };
            case 'DELETE':
                return{
                    ...state,
                    counter:state.counter-1
                };  
                case 'ALTER':
            return{
                ...state,
                counter:state.counter-action.value
            }; 
            case 'LOAD':
                console.log('load')
                return{
                    ...state,
                    song:action.value,
                    
                }; 
            
    } 
    return state;     
};export default rootReducer;