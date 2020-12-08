import { EarlyAccessFormModuleFragment } from "../../../api/queries";

export const EarlyAccessFormModule: React.FC<EarlyAccessFormModuleFragment> = ({
  title,
  summary,
  style,
  link,
}) => {
  switch (style) {
    case "twocol":
      const id = `input-${Math.random()}`;
      return (
        <div className="eap-twocol__container">
          <div className="eap-twocol__left">
            <h2>{title}</h2>
            <p>{summary}</p>
            {link && link.__typename === "Link" ? (
              <a href={link.target}>{link.text}</a>
            ) : null}
          </div>
          <form className="eap-twocol__right">
            <label htmlFor={id}>It’s time to do something unconventional</label>
            <input
              id={id}
              type="email"
              className="input"
              placeholder="Your email"
            />
            <button type="submit" className="button">
              Register now
            </button>
          </form>
        </div>
      );
    default:
      return <>other form</>;
  }
};
