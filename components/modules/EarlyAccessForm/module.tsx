import { useForm } from "react-hook-form";
import { EarlyAccessFormModuleFragment } from "../../../api/queries";
import { RegisterFormInput, useRegisterForm } from "../../../hooks/form";

export const EarlyAccessFormModule: React.FC<EarlyAccessFormModuleFragment> = ({
  title,
  summary,
  style,
  link,
}) => {
  const [submit, { state, message }] = useRegisterForm();
  const { register, handleSubmit, errors } = useForm<RegisterFormInput>();

  switch (style) {
    case "twocol": {
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
          {state === "success" ? (
            <div className="eap-twocol__right">
              <p>{message ?? "Thank you!"}</p>
            </div>
          ) : (
            <form className="eap-twocol__right" onSubmit={handleSubmit(submit)}>
              <label htmlFor={id}>
                It’s time to do something unconventional
              </label>
              <div className="control">
                <input
                  id={id}
                  type="email"
                  placeholder="Your email"
                  className={errors.email ? "input --danger" : "input"}
                  name="email"
                  ref={register({ required: "This field is required" })}
                />
                {errors.email ? (
                  <p className="message --danger">{errors.email.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="button"
                disabled={state === "loading"}
              >
                Register now
              </button>
            </form>
          )}
        </div>
      );
    }
    default: {
      const id = `input-${Math.random()}`;
      return (
        <div className="eap-basic__container">
          <h2>{title}</h2>
          {summary ? <p>{summary}</p> : null}
          {state === "success" ? (
            <div className="eap-basic__success">
              <p>{message ?? "Thank you!"}</p>
            </div>
          ) : (
            <form className="eap-basic__form" onSubmit={handleSubmit(submit)}>
              <div className="control">
                <input
                  id={id}
                  type="email"
                  placeholder="Your email"
                  className={errors.email ? "input --danger" : "input"}
                  name="email"
                  ref={register({ required: "This field is required" })}
                />

                {errors.email ? (
                  <p className="message --danger">{errors.email.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="button"
                disabled={state === "loading"}
              >
                Register now
              </button>
            </form>
          )}
        </div>
      );
    }
  }
};
