/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from "react";
import "./Contact.css";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  });

  return (
    <div className="Contact container" id="Contact">
      <div className="title">
        <h2>Contact </h2>
      </div>

      <form>
        <div className="nameInput">
          <label htmlFor="name"> Your full name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
          />
        </div>

        <div className="subjectInput">
          <label htmlFor="subject">your subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="enter your number"
          />
        </div>

        <div className="input">
          <label htmlFor="email">your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
          />
        </div>

        <div className="MessageInput">
          <label htmlFor="message">your message</label>
          <textarea
            placeholder="enter your message"
            name="message"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn "> Envoyer</button>

      </form>
    </div>
  );
};

export default Contact;
