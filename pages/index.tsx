import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Document from "next/document";
import { Logo } from "../components/Logo";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [jobType, setJobType] = React.useState("");
  const [source, setSource] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!email) {
      setError("Please enter an  email address");
      return;
    } else if (!/[^@]+@[^.]+\..+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/8337392/ac26cc50-7c1d-4ad1-9005-8c67ba897ccb",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: email },
              { name: "job_type", value: jobType },
              { name: "lead_context", value: source },
            ],
          }),
        }
      );

      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <p>Thank you! We will be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} data-netlify>
      <input type="hidden" name="form-name" value="eap" />

      <input
        name="email"
        type="email"
        className={error ? "input is-danger" : "input"}
        placeholder="Email address"
        value={email}
        onChange={(ev) => {
          setEmail(ev.currentTarget.value);
          setError("");
        }}
      />
      <select
        name="jobType"
        className={error ? "input is-danger" : "input"}
        value={jobType}
        onChange={(ev) => {
          setJobType(ev.currentTarget.value);
          setError("");
        }}
      >
        <option>I am a...</option>
        <option>Back-end Developer</option>
        <option>Front-end Developer</option>
        <option>Business Analyst</option>
        <option>Content Creator</option>
        <option>Designer</option>
        <option>Marketer</option>
        <option>Other</option>
      </select>
      <select
        name="source"
        className={error ? "input is-danger" : "input"}
        value={source}
        onChange={(ev) => {
          setSource(ev.currentTarget.value);
          setError("");
        }}
      >
        <option>How did you hear about Pokko?</option>
        <option>Contact at Pokko</option>
        <option>Through a friend</option>
        <option>Word of mouth</option>
        <option>Other</option>
      </select>

      {error ? <p className="is-danger">{error}</p> : null}

      <div className="buttons">
        <button type="submit" disabled={loading}>
          Keep me posted
        </button>
        <Link href="/privacy">
          <a>Privacy policy</a>
        </Link>
      </div>
    </form>
  );
};

const Home: React.FC<Document> = () => (
  <>
    <Head>
      <title>Pokko - Content made better</title>
      <link rel="icon" type="image/png" href="/pokko.png" />
      <meta
        name="description"
        content="Pokko - a modern solution to complex content management"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pokko" />
      <meta
        property="og:description"
        content="Pokko - a modern solution to complex content management"
      />
      <meta
        property="og:image"
        content="https://www.pokko.io/pokko-sharing.png"
      />
      <meta property="og:url" content="https://www.pokko.io/" />
      <meta property="og:site_name" content="Pokko" />
    </Head>
    <main>
      <div className="container">
        <div className="header">
          <Logo />
          <h1>Pokko is a better way to manage your content</h1>
        </div>

        <div className="columns">
          <div className="column">
            <p>
              A content management system that features{" "}
              <strong>advanced data modelling</strong>,{" "}
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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
