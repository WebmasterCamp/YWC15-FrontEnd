import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import config from '../config';
import seo from '../seo.json';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="th">
        <Head>
          <title>{seo.title}</title>
          {/* <link rel="stylesheet" href="/static/fonts/fonts.css" async />
          <link rel="stylesheet" href="/static/libs/bulma/bulma.min.css" async />
          <link rel="stylesheet" href="/static/libs/font-awesome/css/font-awesome.min.css" async /> */}
          {/* <link rel="stylesheet" href="/static/libs/flatpickr/flatpickr.css" async /> */}
          {/* <link rel="stylesheet" href="/static/libs/flatpickr/dark.css" async /> */}

          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ywcth" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={`${config.baseURL}/static/img/social/banner_fb.jpg`} />

          <meta property="og:title" content={seo.title} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={`${config.baseURL}/static/img/social/banner_fb.jpg`} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:site_name" content="Young Webmaster Camp 15" />
          <meta property="article:published_time" content="2017-10-29T14:10:00+07:00" />
          <meta property="article:modified_time" content="2017-10-29T14:10:00+07:00" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#1f2833" />
          <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#1f2833" />
          {styleTags}
        </Head>
        <body>
          {main}
          
          {/* Particle */}
          <div id="particles-js"></div>
          <style>{`
            .particles-js-canvas-el {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
          `}</style>
            
          <NextScript />
          <script src="/static/js/particle.js"/>
        </body>
      </html>
    );
  }
}