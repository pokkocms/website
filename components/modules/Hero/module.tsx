import * as React from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { HeroModuleFragment } from "../../../pokko/queries";
import { useRegisterForm, RegisterFormInput } from "../../../hooks/form";
import { Navbar } from "../../Navbar/module";

export const HeroModule: React.FC<HeroModuleFragment> = ({
  title,
  heroBody,
  image,
}) => {
  const [submit, { state, message }] = useRegisterForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  return (
    <div className="hero__container">
      <Navbar />
      <div className="hero__content">
        <div className="hero__left">
          <h1>
            <ReactMarkdown components={{ p: React.Fragment }}>
              {title}
            </ReactMarkdown>
          </h1>
          <p>{heroBody}</p>

          {state === "success" ? (
            <div className="control">
              <p className="message">{message ?? "Thank you!"}</p>
            </div>
          ) : (
            <form
              className="eap-twocol__form --inline"
              onSubmit={handleSubmit(submit)}
            >
              <div className="control">
                <input
                  type="email"
                  placeholder="Your email"
                  className={errors.email ? "input --danger" : "input"}
                  {...register("email", { required: "This field is required" })}
                />

                {errors.email ? (
                  <p className="message --danger">{errors.email.message}</p>
                ) : null}
                {state === "error" && message ? (
                  <p className="message --danger">{message}</p>
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
        <div className="hero__right">
          <img src={image?.url} />
        </div>
      </div>
    </div>
  );
};
