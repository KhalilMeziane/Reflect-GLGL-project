import useSWR from 'swr'
import axios from 'axios'
import _setAuthHeader from '../services/_setAuthHeader'
import { GET_PROFILE } from '../services/_endPointes'

export function useProfile(){
    const fetcher = ()=>{
        const token = localStorage.getItem("REFLECT_TOKEN")
        _setAuthHeader(token)
        if(token){
            return axios.get(GET_PROFILE)
        }
        return false;
    }
    const { data, error, mutate } = useSWR('use-profile', fetcher, {revalidateOnMount:true} )
    return {
        mutate,
        error,
        isLoading: !error && !data,
        user : data
    }
}