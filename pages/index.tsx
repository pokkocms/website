import Head from "next/head";
import Document from "next/document";

const Home: React.FC<Document> = () => (
  <>
    <Head>
      <title>Pokko</title>
      <link rel="icon" type="image/png" href="/pokko.png" />
    </Head>
    <main>
      <div className="banner">
        <div className="banner--left">
          <img src="/pokko.png" style={{ width: 128 }} alt="Pokko" />
          <h1>Pokko</h1>
          <h3>A better way to manage your content.</h3>

          <hr />

          <span className="heading">Features</span>
          <ul>
            <li>Advanced data modelling</li>
            <li>Content inheritance</li>
            <li>Hierarchical content structure</li>
            <li>Integrated webhooks</li>
            <li>Localised data storage</li>
            <li>
              <em>... and more</em>
            </li>
          </ul>
        </div>
        <div className="banner--right">
          <h2 className="heading">Register interest</h2>
          <p>
            To join our EAP (early access program), register your interest and
            we'll be in touch with a user account.
          </p>
          <form action="">
            <input type="email" placeholder="Email address" className="input" />
            <button type="submit">Keep me posted</button>
          </form>
        </div>
      </div>
    </main>
  </>
);

export default Home;
