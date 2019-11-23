import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'

const useStyles = makeStyles(theme => ({
    main: {
      padding: '30px 0 0 0',
      maxWidth: '500px',
      margin: ' 0 auto'
    }
  }))

export default function DefaultLayout({ children }) {
    const classes = useStyles()
    return (
        <>
            {/* <Header /> */}
            <main className={classes.main}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </main>
        </>
    )
}