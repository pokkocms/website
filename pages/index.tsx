import Head from "next/head";
import Document from "next/document";
import { Logo } from "../components/Logo";

const Home: React.FC<Document> = () => (
  <>
    <Head>
      <title>Pokko</title>
      <link rel="icon" type="image/png" href="/pokko.png" />
    </Head>
    <main>
      <div className="container">
        <div className="header">
          <Logo />
          <h1>Pokko is a better way to manage your content.</h1>
        </div>

        <div className="columns">
          <div className="column">
            <p>
              A content management system that features{" "}
              <strong>advanced data modelling</strong>,
              <strong>content inheritance</strong>,{" "}
              <strong>hierarchical content structure</strong>,{" "}
              <strong>integrated webhooks</strong>,{" "}
              <strong>localised data storage</strong> and more soon to come.
            </p>
            <p>
              You can contact us if you’re interested in learning more about our
              product.
            </p>
            <p>
              <a href="mailto:support@pokko.io">Contact us</a>
            </p>
          </div>
          <div className="column">
            <div className="panel">
              <h2 className="heading">Register your interest</h2>
              <p>
                To join our EAP (early access program), register your interest
                and we'll be in touch with a user account.
              </p>

              <input
                type="email"
                className="input"
                placeholder="Email address"
              />

              <button>Keep me posted</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
