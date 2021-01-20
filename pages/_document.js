import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from '../node_modules/next/document';
// } from "./node_modules/next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="css/style.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
