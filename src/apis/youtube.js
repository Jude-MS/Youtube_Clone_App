import axios from 'axios';

const KEY = 'AIzaSyDrVeXf3UwwbMW_yToqYGAvMtaZ11b39hU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})