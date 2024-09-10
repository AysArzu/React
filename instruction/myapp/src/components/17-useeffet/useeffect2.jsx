import React, { useEffect } from 'react'

export const Useeffect2 = () => {
 
    useEffect(() => {
        console.log('MOUNTING2')
        return () => {
            console.log("UNMOUNTING@: Buradaki kodlar componint DOM dan atilmadan hemen once calisir");
        }
    }, [])


  return (
    <div>useeffect1</div>
  )
}
