
const initialState = {
  channels : [],
  audioClips: []
}

export default function spotifyReducer (state = initialState, action){

  switch(action.type){
    case 'GET_API_CHANNELS':
      return{
        ...state,
        channels : action.payload
      }
    
    case 'GET_API_AUDIO':
      return{
        ...state,
        audioClips : action.payload
      }
      
    default : return state;
  }
}