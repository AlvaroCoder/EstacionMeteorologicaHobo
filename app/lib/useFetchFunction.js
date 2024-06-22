'use client'

import { useEffect, useState } from "react";

export default function useFetchFunction(fetchFunction){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataResponse, setDataResponse] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        const fetchData=async ()=>{
            setLoading(true);
            setError(null);
            try {
                const result = await fetchFunction();
                if (isMounted) {
                    setDataResponse(result);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }
        fetchData();
        return ()=>{
            isMounted = false
        }
    },[fetchFunction]);
    return {dataResponse, loading, error}
}