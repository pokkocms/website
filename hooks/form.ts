import * as React from "react";

export type RegisterFormInput = {
  email: string;
  jobType?: string;
  source?: string;
};

type RegisterFormState = "idle" | "loading" | "error" | "success";

type RegisterFormSubmitFn = (input: RegisterFormInput) => Promise<void>;

type RegisterFormHook = () => [
  RegisterFormSubmitFn,
  { state: RegisterFormState; message?: string }
];

const textFromHtml = (input: string): string => {
  const el = document.createElement("div");
  el.innerHTML = input;

  const { textContent } = el;

  el.remove();

  return textContent;
};

export const useRegisterForm: RegisterFormHook = () => {
  const [state, setState] = React.useState<RegisterFormState>("idle");
  const [message, setMessage] = React.useState<string | undefined>();

  const submit: RegisterFormSubmitFn = async (input: RegisterFormInput) => {
    try {
      setMessage(undefined);
      setState("loading");
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/8337392/ac26cc50-7c1d-4ad1-9005-8c67ba897ccb",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: input.email },
              { name: "job_type", value: input.jobType },
              { name: "lead_context", value: input.source },
            ].filter((ent) => Boolean(ent.value)),
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage(textFromHtml(data?.inlineMessage ?? ""));
        setState("success");
      } else {
        if (data.errors && data.errors[0].errorType === "INVALID_EMAIL") {
          setMessage("Invalid email address");
        } else {
          setMessage("Something went wrong");
        }
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return [submit, { state, message }];
};
