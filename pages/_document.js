import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&family=Mr+De+Haviland&display=swap" rel="stylesheet" />

          <meta property="og:title" content="Friendify - Your AI Personal Assistant" />
          <meta property="og:description"
            content="Get personalized recommendations and intuitive experiences with Friendify's
                      AI technology. Communicate through text, voice, image, and video inputs. Download now!" />

          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
          <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
          <base href="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
