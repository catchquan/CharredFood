import { useEffect, useState } from 'react';

export function useIsMounting(){
    let [isMounting, setIsMounting] = useState(false)
    useEffect(() => {
        let mountingTimer = setTimeout(() => {
            setIsMounting(true)
        }, 150)
        return() => clearTimeout(mountingTimer)
    }, [])

    return [isMounting, setIsMounting];
}