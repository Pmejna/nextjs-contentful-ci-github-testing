import { Fragment } from 'react';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Main, Head, NextScript } from 'next/document';

import { extractCritical, EMOTION_CACHE_KEY } from 'lib/cache/emotion';

export default class GemDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, ids, css } = extractCritical(initialProps.html);

    return {
      ...initialProps,
      html,
      styles: [
        <Fragment key="next-emotion-styles">
          {initialProps.styles}
          <style data-emotion={`${EMOTION_CACHE_KEY} ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </Fragment>,
      ],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}