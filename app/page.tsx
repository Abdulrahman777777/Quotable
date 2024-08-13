"use client";

import Image from "next/image";
import Fetching from "./fetching";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [quote, setQuote] = useState({
    quote: "",
    image: "",
    author: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const select = useRef("" as any);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.336)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80vw",
      height: "50vh",
    },
  };
  return (
    <main className="w-screen h-screen">
      <div className="text w-screen h-half flex justify-center items-end flex-wrap pb-5">
        <h1 className="text-7xl font-Hand w-screen flex justify-center items-end h-full p-2">
          Quotable
        </h1>
        <h4 className="w-screen flex justify-center items-center font-Hand pb-10">
          Get a random quote to motivate you...
        </h4>
      </div>
      <div className="select-your-quote font-Hand flex justify-center align-top">
        <label htmlFor="quote-Category " className="font-Hand text-2xl m-5">
          Choose a Category:
        </label>
        <select
          ref={select}
          name="Catergory"
          id="Category"
          className="w-1/4 m-5 bg-black border-white border-4 rounded-md text-white font-Hand"
        >
          <option value="age" className="bg-black ">
            Age
          </option>
          <option className="bg-black" value="alone">
            Alone
          </option>
          <option className="bg-black" value="anger">
            Anger
          </option>
          <option className="bg-black" value="architecture">
            Architecture
          </option>
          <option className="bg-black" value="art">
            Art
          </option>
          <option className="bg-black" value="attitude">
            Attitude
          </option>
          <option className="bg-black" value="beauty">
            Beauty
          </option>
          <option className="bg-black" value="best">
            Best
          </option>
          <option className="bg-black" value="birthday">
            Birthday
          </option>
          <option className="bg-black" value="business">
            Business
          </option>
          <option className="bg-black" value="car">
            Car
          </option>
          <option className="bg-black" value="change">
            Change
          </option>
          <option className="bg-black" value="communication">
            Communication
          </option>
          <option className="bg-black" value="computers">
            Computers
          </option>
          <option className="bg-black" value="cool">
            Cool
          </option>
          <option className="bg-black" value="courage">
            Courage
          </option>
          <option className="bg-black" value="dad">
            Dad
          </option>
          <option className="bg-black" value="dad">
            Dating
          </option>
          <option className="bg-black" value="death">
            Death
          </option>
          <option className="bg-black" value="design">
            Design
          </option>
          <option className="bg-black" value="dreams">
            Dreams
          </option>
          <option className="bg-black" value="education">
            Education
          </option>
          <option className="bg-black" value="environmental">
            Environmental
          </option>
          <option className="bg-black" value="equality">
            Equality
          </option>
          <option className="bg-black" value="experience">
            Experience
          </option>
          <option className="bg-black" value="failure">
            Failure
          </option>
          <option className="bg-black" value="faith">
            Faith
          </option>
          <option className="bg-black" value="family">
            Family
          </option>
          <option className="bg-black" value="famous">
            Famous
          </option>
          <option className="bg-black" value="fear">
            Fear
          </option>
          <option className="bg-black" value="fitness">
            Fitness
          </option>
          <option className="bg-black" value="food">
            Food
          </option>
          <option className="bg-black" value="forgiveness">
            Forgiveness
          </option>
          <option className="bg-black" value="freedom">
            Freedom
          </option>
          <option className="bg-black" value="friendship">
            Friendship
          </option>
          <option className="bg-black" value="funny">
            Funny
          </option>
          <option className="bg-black" value="future">
            Future
          </option>
          <option className="bg-black" value="good">
            Good
          </option>
          <option className="bg-black" value="government">
            Government
          </option>
          <option className="bg-black" value="graduation">
            Graduation
          </option>
          <option className="bg-black" value="happiness">
            Happiness
          </option>
          <option className="bg-black" value="health">
            Health
          </option>
          <option className="bg-black" value="history">
            History
          </option>
          <option className="bg-black" value="home">
            Home
          </option>
          <option className="bg-black" value="hope">
            Hope
          </option>
          <option className="bg-black" value="humor">
            Humor
          </option>
          <option className="bg-black" value="imagination">
            Imagination
          </option>
          <option className="bg-black" value="inspirational">
            Inspirational
          </option>
          <option className="bg-black" value="intelligence">
            Intelligence
          </option>
          <option className="bg-black" value="jealousy">
            Jealousy
          </option>
          <option className="bg-black" value="knowledge">
            Knowledge
          </option>
          <option className="bg-black" value="leadership">
            Leadership
          </option>
          <option className="bg-black" value="learning">
            Learning
          </option>
          <option className="bg-black" value="legal">
            Legal
          </option>
          <option className="bg-black" value="life">
            Life
          </option>
          <option className="bg-black" value="love">
            Love
          </option>
          <option className="bg-black" value="marriage">
            Marriage
          </option>
          <option className="bg-black" value="medical">
            Medical
          </option>
          <option className="bg-black" value="men">
            Men
          </option>
          <option className="bg-black" value="mom">
            Mom
          </option>
          <option className="bg-black" value="money">
            Money
          </option>
          <option className="bg-black" value="morning">
            Morning
          </option>
          <option className="bg-black" value="movies">
            Movies
          </option>
          <option className="bg-black" value="morning">
            Success
          </option>
        </select>
      </div>
      <div
        onClick={async (e) => {
          const data = await Fetching(select.current.value);
          setQuote(data);
          setIsOpen(true);
        }}
        className="button flex justify-center align-middle"
      >
        <button className="p-3 bg-slate-400 text-black font-Hand">
          Get Quote
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
      >
        <div className="w-full h-full flex flex-col justify-around align-center">
          <h1 className="text-black">{`"${quote.quote}"`}</h1>
          <h5 className="text-black">~{quote.author}</h5>
        </div>
      </Modal>
    </main>
  );
}
