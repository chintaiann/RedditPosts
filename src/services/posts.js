import axios from 'axios'

const baseUrl = "https://api.pushshift.io/reddit/search/submission/?author="


const getPosts = async (username) => {
    const url = `${baseUrl}${username}`
    const response = await axios.get(url)
    if (response) {
        console.log(response.data.data)
        return response.data.data
    }
   
}

export default {getPosts}




