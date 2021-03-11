import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return (
        <Head>
            <title>{title} - Destiny 2</title>
        </Head>
    )
}
export default PageTitle