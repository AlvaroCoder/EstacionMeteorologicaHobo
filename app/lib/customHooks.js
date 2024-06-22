'use client'
import { useEffect, useState } from "react";
export function useFetch(url, setDataHobo) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataResponse, setDataResponse] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Something went wrong!");
                const jsonResponse = await response.json();
                setDataResponse(jsonResponse);
                setDataHobo(jsonResponse)
            } catch (error) {
                setError(error);

            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    return {dataResponse, loading, error}
}
