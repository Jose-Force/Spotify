import axios from "axios";

export const getApiChannels = () => {
  try {
    return async function(dispatch){
      const resultChannel = await axios.get('https://api.audioboom.com/channels/recommended');
      const channelsRecommended = await resultChannel.data.body;
      return dispatch({
        type : 'GET_API_CHANNELS',
        payload: channelsRecommended
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const getApiAudio = (id) =>{
  try {
    return async function(dispatch){
      const resultAudio = await axios.get(`https://api.audioboom.com/channels/${id}/audio_clips`)
      const audioClip = await resultAudio.data.body.audio_clips;
      
      return dispatch({
        type: 'GET_API_AUDIO',
        payload: audioClip
      })
    }
  } catch (error) {
    console.log(error);
  }
}