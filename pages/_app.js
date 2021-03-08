import React from 'react'
import 'tailwindcss/tailwind.css'
import Layout from '../Components/Components/Layout'


const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp