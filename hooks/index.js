import { useState, useEffect } from "react"
import axios from 'axios'

const BASE_URL = `https://${process.env.NEXT_PUBLIC_BASE_URL}`

export const useQuery = (path,options)=>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const handleNetwork = (query)=>{
        setLoading(true)
        options.params = query ? {...options?.params,...query}:{...options?.params}
        axios({
            method:"GET",
            baseURL:BASE_URL,
            url:path,
            ...options
        }).then((res)=>{
            setLoading(false)
            setData(res.data)
            options?.onCompleted ? options.onCompleted(res.data):null
        })
    }


    useEffect(()=>{
        if(path){
            handleNetwork()
        }
        
    },[])

    return {data,loading,refetch:handleNetwork}
}

export const useLazyQuery = (path,options)=>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const handleNetwork = (query)=>{
        setLoading(true)
        options.params = query ? {...options?.params,...query}:{...options?.params}
       return new Promise((resolve,reject)=>{
            axios({
                method:"GET",
                baseURL:BASE_URL,
                url:path,
                ...options
            }).then((res)=>{
                setLoading(false)
                setData(res.data)
                options?.onCompleted ? options.onCompleted(res.data):null
                resolve(res.data)
            }).catch((error)=>{
                reject(error)
            })
       })
    }


    return [handleNetwork,{data,loading,refetch:handleNetwork}]
}

export const useMutation = (path,options)=>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const handleNetwork = (query)=>{
        setLoading(true)
        return new Promise((resolve, reject)=>{
            axios({
                method:"POST",
                baseURL:BASE_URL,
                url:path,
                ...{...options,...query}
            }).then((res)=>{
                setLoading(false)
                setData(res.data)
                options?.onCompleted ? options.onCompleted(res.data):null
                resolve(res.data)
            }).catch((error)=>{
                setLoading(false)
                reject(error)
            })
        })
    }


    return [handleNetwork,{data,loading}]
}