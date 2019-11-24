import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../layouts/DefaultLayout'
import Loading from '../components/Loading/Loading'
import MockResultsList from '../components/MockResults'

import Filters from '../components/Filters'
import Feedback from '../components/feedback'



export default function Results() {

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
                    <p className='main-title'>Okay, we are finding what you need...</p>
                    <Loading />
                </>
                :
                <>
                    <p className='main-title'>Here we have some options for you</p>
                    <Filters />
                    <MockResultsList />
                    <Feedback />
                </>
            }


        </DefaultLayout>
    )
}
