import React, { useRef, useEffect } from 'react';
import { Mount } from 'marketing/MarketingApp';

export default () =>{
    const ref = useRef(null);

    useEffect(() => {
        Mount(ref.current)
    }, [])

    return <div ref={ref} />
}