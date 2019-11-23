import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    main: {
      padding: '30px 0 0 0'
    }
  }))

export default function DefaultLayout({ children }) {
    const classes = useStyles()
    return (
        <>
            <Header />
            <main className={classes.main}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </main>

        </>
    )
}