import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
