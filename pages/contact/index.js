import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const msgRef = useRef();
  const reRef = useRef();
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const reToken = await reRef.current.executeAsync();
    reRef.current.reset();
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const telRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (emailRegex.test(emailRef.current.value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
    if (telRegex.test(telRef.current.value)) {
      setTelError("");
    } else {
      setTelError("Please enter a valid telephone number.");
    }
    if (
      emailRegex.test(emailRef.current.value) &&
      telRegex.test(telRef.current.value)
    ) {
      const formData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        telephone: telRef.current.value,
        message: msgRef.current.value,
      };
      /*
           Remove console.log(formData) and use it for what you need (future purposes)
           As there is no backend the ReCAPTCHA serves no purpose, however it returns a token upon completion
           Use the token for verification through google.  
           */
      console.log(formData);
      console.log(reToken);
    }
  }
  /*
    Have a NEXT_PUBLIC_RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY (you need secret for backend verification) in .env.local for the ReCAPTCHA to work. 
    Tested with invisible v2 ReCAPTCHA through my personal account and keys. -- Jihal
  */
  return (
    <div>
      <img src="/assets/images/contact_image.png" alt="Contact us image"></img>
      <h2 class="font-bold text-center mt-6 text-2xl">Have some questions?</h2>
      <p class="text-base text-center mt-4">
        Get in touch with our support team and let us know how we can help.
      </p>
      <form class="p-4" onSubmit={submitHandler}>
        <div class="flex flex-col justify-center items-center mb-6">
          <input
            class="bg-white text-fig-purple placeholder-fig-purple border-2 border-fig-purple border-solid w-1/4 h-10 mb-6"
            type="text"
            placeholder="Enter your first name"
            required
            id="firstName"
            ref={firstNameRef}
          />
          <input
            class="bg-white text-fig-purple placeholder-fig-purple border-2 border-fig-purple border-solid w-1/4 h-10 mb-6"
            type="text"
            placeholder="Enter your last name"
            required
            id="lastName"
            ref={lastNameRef}
          />
          <input
            class="bg-white text-fig-purple placeholder-fig-purple border-2 border-fig-purple border-solid w-1/4 h-10 mb-6"
            type="text"
            placeholder="Enter a valid email address"
            required
            id="email"
            ref={emailRef}
          />
          {emailError && (
            <div class="text-red-600 -mt-6 mb-6"> {emailError} </div>
          )}
          <input
            class="bg-white text-fig-purple placeholder-fig-purple border-2 border-fig-purple border-solid w-1/4 h-10 mb-6"
            type="text"
            placeholder="Enter your phone number"
            required
            id="tel"
            ref={telRef}
          />
          {telError && <div class="text-red-600 -mt-6 mb-6"> {telError} </div>}
          <textarea
            class="bg-white text-fig-purple placeholder-fig-purple border-2 border-fig-purple border-solid w-1/4 h-auto"
            id="msg"
            placeholder="Enter your message"
            required
            rows="5"
            ref={msgRef}
          />
        </div>
        <div class="flex justify-center items-center">
          <button
            class="text-xl cursor-pointer bg-fig-purple text-[#D5C6B2] p-2 border-2 border-fig-purple border-solid "
            type="submit"
          >
            Submit
          </button>
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
      </form>
    </div>
  );
}
