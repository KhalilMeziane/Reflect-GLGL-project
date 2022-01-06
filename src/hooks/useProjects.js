import useSWR from 'swr'
import axios from 'axios'
import _setAuthHeader from '../services/_setAuthHeader'
import { GET_PROJECTS } from '../services/_endPointes'

export function useProjects(){
    const fetcher = async()=>{
        const token = localStorage.getItem("REFLECT_TOKEN")
        _setAuthHeader(token)
        const response = await axios.get(GET_PROJECTS)
        return response.data
    }
    const { data, error, mutate } = useSWR('use-projects', fetcher, {revalidateOnMount:true})
    return {
        mutate,
        error,
        isLoading: !error && !data,
        projects : data
    }
}