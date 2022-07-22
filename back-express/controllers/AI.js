
import axios from 'axios';

export const getAI = async () => {
    const res = await axios.get('http://localhost:8000/images/AI')
    return res.data
}

export const AI = () => await getAI()