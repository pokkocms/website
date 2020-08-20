import Head from "next/head";
import Document from "next/document";

const Home: React.FC<Document> = () => (
  <>
    <Head>
      <title>Pokko</title>
    </Head>
    <main>
      <p>
        Go <a href="https://app.pokko.io/">here</a>.
      </p>
    </main>
  </>
);

export default Home;
