import useSWR from 'swr'
import axios from 'axios'
import _setAuthHeader from '../services/_setAuthHeader'
import { GET_PROJECT } from '../services/_endPointes'

export function useProject(id){
    const fetcher = ()=>{
        const token = localStorage.getItem("REFLECT_TOKEN")
        _setAuthHeader(token)
        return axios.get(`${GET_PROJECT}/${id}`)
    }
    const { data, error, mutate } = useSWR('use-project', fetcher, {revalidateOnMount:true})
    return {
        mutate,
        error,
        isLoading: !error && !data,
        project : data
    }
}