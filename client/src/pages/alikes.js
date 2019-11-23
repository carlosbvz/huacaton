import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import Loading from '../components/Loading/Loading'
import MockAlikesList from '../components/MockAlikes'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function Alikes() {

  const [loading, setLoading] = useState(true)

  const loadingTime = 3000;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, loadingTime);
  }, [])

  return (
    <DefaultLayout>

      {loading ?
        <>
          <p className='main-title'>Please wait while we process your request...</p>
          <Loading />
        </>
        :
        <>
          <p className='main-title'>Are you looking for someone like them?</p>
          <MockAlikesList />
          <br /><br /><br />
          <Link to="/results">
            <Button variant="contained" color="primary" fullWidth>
              Next >
      </Button>
          </Link>
        </>
      }


    </DefaultLayout>
  )
}
