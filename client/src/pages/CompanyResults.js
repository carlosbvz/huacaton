import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../layouts/DefaultLayout'
import Loading from '../components/Loading/Loading'
import MockCompanyResults from '../components/MockCompanyResults'
import JobFilters from '../components/JobFilters'

export default function CompanyResults() {

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
                    <JobFilters />
                    <MockCompanyResults />
                    
                </>
            }


        </DefaultLayout>
    )
}
