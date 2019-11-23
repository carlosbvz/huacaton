import React, { useEffect, useState, createContext } from 'react'
import firebase from 'firebase'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const getCurrentDeviceDimensions = () => {
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
        return {
            isMobile:  windowWidth < 768,
            isTablet:  windowWidth >= 768 && windowWidth < 1200,
            isDesktop: windowWidth > 1200
        }
    }

    // Basic resolution detector
    const [device, setDevice] = useState(getCurrentDeviceDimensions())
    const [user, setUser] = useState({displayName: 'Patito'})

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          setUser(user)
        } else {
          // No user is signed in.
        }
      })

    // Global colors
    const colors = {
        white: '#fff',
        primaryBlue: '#001032',
        secondaryBlue: '#0d2166',
        primaryRed: '#8e2349'
    }

    useEffect(() => {
        const updateDimensions = () => {
            setDevice(getCurrentDeviceDimensions())
        }
        window.addEventListener('resize', updateDimensions)
        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    },[user])
    
    return (
        <GlobalContext.Provider value={[device, colors, user]}>
            { props.children }
        </GlobalContext.Provider>
    )
}

