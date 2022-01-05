import useSWR from 'swr'
import axios from 'axios'
import _setAuthHeader from '../services/_setAuthHeader'
import { GET_PROJECT } from '../services/_endPointes'

export function useProject(id){
    const fetcher = ()=>{
        const token = localStorage.getItem("APP_TOKEN")
        _setAuthHeader(token)
        return axios.get(`${GET_PROJECT}/${id}`)
    }
    const { data, error, mutate } = useSWR('use-project', fetcher, {revalidateOnMount:true, dedupingInterval: 10000})
    return {
        mutate,
        error,
        isLoading: !error && !data,
        project : data
    }
}