import { ref } from 'vue'
import axios from 'axios';

// composable always prefix with 'use'
export async function useFetch(apiRequest: any = {}) {
    console.log("apiRequest: ", apiRequest)
    if(!apiRequest && Object.keys(apiRequest).length === 0) {
        console.info("apiRequest can not be empty!")    
        return;
    }

    const apiResponse: any = await axios(apiRequest)
        .then((res) => {
            console.log(res)
            if(res.status === 200) {
                return res.data
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch((err) => err)

    return apiResponse;
}