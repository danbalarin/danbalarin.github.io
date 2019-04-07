import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link href="/static/css/social.css" rel="stylesheet" />
                    <link href="/static/css/lato.css" rel="stylesheet" />
                    <title key="title">Dan Balarin</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp