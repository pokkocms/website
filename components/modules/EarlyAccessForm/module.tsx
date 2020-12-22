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
            <div className="eap-twocol__right">
              <form
                className="eap-twocol__form --flow"
                onSubmit={handleSubmit(submit)}
              >
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
            </div>
          )}
        </div>
      );
    }
    default: {
      const id = `input-${Math.random()}`;
      return (
        <div className="eap-twocol__container --basic">
          <div className="eap-twocol__left">
            <h2>{title}</h2>
            <p>{summary}</p>

            {state === "success" ? (
              <div className="eap-twocol__success">
                <p>{message ?? "Thank you!"}</p>
              </div>
            ) : (
              <form
                className="eap-twocol__form --inline"
                onSubmit={handleSubmit(submit)}
              >
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
          <div className="eap-twocol__right">
            <svg
              width="370"
              height="293"
              viewBox="0 0 370 293"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198.34 76.1652L194.553 162.529C194.075 173.442 202.966 182.464 213.884 182.145L349.596 178.185C359.762 177.888 367.849 169.562 367.849 159.392V76.9887C367.849 66.6054 359.431 58.188 349.048 58.188H217.123C207.059 58.188 198.781 66.1118 198.34 76.1652Z"
                stroke="#364059"
                strokeWidth="2.74721"
              />
              <path
                d="M241.884 136.553V266.845C241.884 276.968 233.869 285.274 223.753 285.634L62.4201 291.384C51.5147 291.772 42.5704 282.826 42.9619 271.92L47.846 135.878C48.2091 125.764 56.5138 117.752 66.6346 117.752H223.083C233.467 117.752 241.884 126.169 241.884 136.553Z"
                fill="white"
                stroke="#364059"
                strokeWidth="2.74721"
              />
              <path
                d="M168.946 0H46.0829L42.1067 92.9059L96.2288 91.2886L144.363 89.8492L168.946 89.1144V0Z"
                fill="#ABECDC"
              />
              <path
                d="M5.42057 27.5516L2.19571 82.417C1.55149 93.3774 10.3966 102.555 21.3732 102.316L156.79 99.3688C167.011 99.1463 175.182 90.7964 175.182 80.5725V28.6547C175.182 18.2714 166.764 9.854 156.381 9.854H24.1889C14.234 9.854 6.00469 17.6139 5.42057 27.5516Z"
                stroke="#364059"
                strokeWidth="2.74721"
              />
              <path
                d="M23.1192 11.1944H157.874C166.211 11.1944 173.053 17.5979 173.75 25.7551H7.24326C7.93974 17.5979 14.7817 11.1944 23.1192 11.1944Z"
                fill="#364059"
                stroke="#364059"
                strokeWidth="2.74721"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M191.599 207.147C194.433 207.147 195.072 201.653 195.072 198.837C195.072 196.021 192.774 193.738 189.94 193.738C187.107 193.738 184.809 196.021 184.809 198.837C184.809 201.653 188.765 207.147 191.599 207.147ZM204.591 208.469C206.735 208.469 207.219 204.283 207.219 202.138C207.219 199.993 205.48 198.253 203.335 198.253C201.189 198.253 199.45 199.993 199.45 202.138C199.45 204.283 202.445 208.469 204.591 208.469ZM196.41 215.684C196.41 217.829 195.925 222.015 193.781 222.015C191.636 222.015 188.641 217.829 188.641 215.684C188.641 213.539 190.38 211.799 192.525 211.799C194.671 211.799 196.41 213.539 196.41 215.684ZM204.607 222.015C206.753 222.015 207.236 217.829 207.236 215.684C207.236 213.539 205.496 211.799 203.351 211.799C201.206 211.799 199.466 213.539 199.466 215.684C199.466 217.829 202.462 222.015 204.607 222.015ZM218.045 215.684C218.045 217.829 217.562 222.015 215.416 222.015C213.271 222.015 210.276 217.829 210.276 215.684C210.276 213.539 212.015 211.799 214.16 211.799C216.306 211.799 218.045 213.539 218.045 215.684ZM193.918 235.561C196.062 235.561 196.547 231.376 196.547 229.23C196.547 227.085 194.808 225.346 192.662 225.346C190.517 225.346 188.778 227.085 188.778 229.23C188.778 231.376 191.773 235.561 193.918 235.561Z"
                fill="#364059"
              />
              <path
                d="M230.064 102.211H293.16M230.064 90.8896H269.727H230.064Z"
                stroke="#364059"
                strokeWidth="2.74721"
                strokeLinecap="round"
              />
              <path
                d="M349.376 56.668H217.771C207.388 56.668 198.97 65.0853 198.97 75.4687V76.2521H368.177V75.4687C368.177 65.0853 359.759 56.668 349.376 56.668Z"
                fill="#364059"
              />
              <path
                d="M98.8127 277.244H119.621L120.295 221.008L111.128 221.988L102.976 222.858L98.8127 223.302V277.244Z"
                fill="#ABECDC"
              />
              <path
                d="M163.396 277.244H184.203L184.878 249.194L175.71 249.683L167.558 250.117L163.396 250.34V277.244Z"
                fill="#ABECDC"
              />
              <path
                d="M131.104 277.244H151.912L152.586 199.115L143.419 200.475L135.267 201.686L131.104 202.303V277.244Z"
                fill="#ABECDC"
              />
              <path
                d="M135.494 192.991C133.073 180.562 121.969 157.574 118.625 164.717C114.444 173.646 116.058 199.206 121.705 200.695C127.353 202.182 119.138 164.892 112.097 167.518C106.465 169.62 109.75 180.532 112.097 185.725C111.266 178.723 110.198 168.918 98.6755 162.354"
                stroke="#1A1A30"
                strokeWidth="2.74721"
                strokeLinecap="round"
              />
              <path
                d="M131 149.374V43.3325H272.48V67.6194H327.348V145.201"
                stroke="#4FC6A9"
                strokeWidth="2.74721"
              />
              <path
                d="M66.5215 277.244H87.3299L88.0034 184.338L78.8369 185.955L70.6847 187.395L66.5215 188.129V277.244Z"
                fill="#ABECDC"
              />
              <path
                d="M49.2146 135.924C49.5531 126.55 57.2504 119.126 66.6304 119.126H223.083C232.708 119.126 240.51 126.928 240.51 136.553V151H48.6702L49.2146 135.924Z"
                fill="#364059"
                stroke="#364059"
                strokeWidth="2.74721"
              />
              <path
                d="M68.9698 143.173C72.8978 143.173 76.0821 139.751 76.0821 135.529C76.0821 131.308 72.8978 127.886 68.9698 127.886C65.0417 127.886 61.8574 131.308 61.8574 135.529C61.8574 139.751 65.0417 143.173 68.9698 143.173Z"
                fill="white"
              />
              <path
                d="M87.4617 143.173C91.3897 143.173 94.574 139.751 94.574 135.529C94.574 131.308 91.3897 127.886 87.4617 127.886C83.5337 127.886 80.3494 131.308 80.3494 135.529C80.3494 139.751 83.5337 143.173 87.4617 143.173Z"
                fill="white"
              />
              <path
                d="M105.954 143.173C109.882 143.173 113.066 139.751 113.066 135.529C113.066 131.308 109.882 127.886 105.954 127.886C102.026 127.886 98.8413 131.308 98.8413 135.529C98.8413 139.751 102.026 143.173 105.954 143.173Z"
                fill="white"
              />
              <path
                d="M314.73 113C319.69 118.634 323.495 125.191 325.924 132.297C328.352 139.403 329.36 146.918 328.886 154.413C328.415 161.908 326.472 169.237 323.17 175.981C319.868 182.724 315.27 188.751 309.641 193.716C304.012 198.682 297.461 202.489 290.362 204.92C283.263 207.352 275.755 208.359 268.267 207.886C260.779 207.414 253.457 205.469 246.719 202.164C239.982 198.858 233.961 194.257 229 188.623L255.613 165.148C257.494 167.284 259.776 169.029 262.331 170.282C264.885 171.535 267.662 172.272 270.501 172.452C273.34 172.631 276.187 172.249 278.878 171.327C281.57 170.405 284.054 168.962 286.188 167.079C288.322 165.196 290.065 162.911 291.317 160.354C292.569 157.798 293.306 155.019 293.485 152.177C293.664 149.335 293.282 146.486 292.361 143.792C291.44 141.098 289.998 138.611 288.117 136.475L314.73 113Z"
                fill="white"
                stroke="#364059"
                strokeWidth="2.74721"
              />
            </svg>
          </div>
        </div>
      );
    }
  }
};
