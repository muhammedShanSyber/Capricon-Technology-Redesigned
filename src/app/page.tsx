"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const faqs = [
    {
      question: "What is IT staff augmentation ? ",
      answer:
        "Staff augmentation is a flexible way to hire skilled IT resources from outside  your company and manage them as part of your internal IT team. These resources are employed  directly by a staff augmentation vendor, thus eliminating the cost and hassle of hiring full-time staff members.",
    },
    {
      question: "How can I control the remote team ?",
      answer:
        "The members of your remote team will be plugged into your systems. They will participate in daily  standups, following your regular workflow. Your dedicated customer success manager will smooth out your cooperation.",
    },
    {
      question: "What time zone do you work in ? ",
      answer:
        "Our developers are available 8 AM to 8 PM EST so there will be substantial business-day overlap between  time zones no matter where you are. We can match  the working hours of our team according to your schedule preference.",
    },
    {
      question: "How much does staff augmentation cost ?",
      answer:
        "The hourly rates are calculated individually for each project, as they’re based on the clients’  objectives and needs, the average price tag varies from $50 to $99 per hour. Nevertheless, compared to its  CEE competitors, the Capricon Technologies team features really attractive rates for the services delivered.",
    },
    {
      question:
        "What is the difference between staff augmentation & managed services ?",
      answer:
        "IT staff augmentation model assumes the only service commitment is hours of work. The outsourcing model  (or managed services) assumes that the supplier assumes all the risks of meeting the service commitment.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [faqs.length]);
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <Image
          src={"/landingpageimage.jpg"}
          alt="background image"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute w-full top-0 left-0">
        <nav className=" z-10 mr-96 ml-96 mt-6  rounded-xl border-2 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <a
              href="https://duckduckgo.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={"/LOGO.png"} width={50} height={50} alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Capricon Technologies
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-blue-700 bg-white hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white font-bold
              rounded-lg text-lg px-8 py-2 text-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-white"
              >
                Contact Us
              </button>
            </div>
            <div
              className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0  text-white text-base font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-white text-base font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0  text-white text-base font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute font-extrabold text-1xl top-0 text-white z-10 border-2 px-14 py-2  rounded-xl">
        96% Client <br /> Satisfaction
      </div>
      <div className="absolute font-extrabold text-1xl top-10 text-white z-10 border-2 px-14 py-2  rounded-xl">
        12 Months
        <br />
        Average Project Duration
      </div>
      <div className="absolute font-extrabold text-1xl top-20 text-white z-10 border-2 px-14 py-2  rounded-xl">
        20+
        <br />
        Projects Delivered
      </div>
      <div className="absolute font-extrabold text-8xl top-80 text-white z-10 ">
        Building Tomorrow’s <br /> Software, Today
      </div>

      {/* why choose us */}
      <section className=" bg-blue-500ray-50 relative">
        <Image
          src="/bg1.jpg"
          alt="background image"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
          <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className=" absolute  top-0 -right-1/4 z-0  opacity-10 ">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                className="w-96 z-0  h-full    object-fill fill-g text-g"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
                />
              </svg>
            </div>

            <div className=" absolute -bottom-0 -left-1/4 z-0  opacity-10 "></div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div className="max-w-xl mx-auto text-center">
                <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                  <p className="text-4xl font-bold tracking-widest text-g uppercase text-white">
                    Why Choose us
                  </p>
                </div>
              </div>
              <div className=" grid grid-cols-1 gap-2 mt-12 sm:grid-cols-2 lg:mt-20   ">
                <a
                  href="#"
                  className="transition-all  duration-1000    hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <Image
                    src="/blockchain.png"
                    alt="background image"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className=" absolute  bg-blue-500/50 top-0 left-0  z-30  transition-all duration-200    "></div>
                  <div className="py-2 px-9 relative  ">
                    <p className="mt-8 text-2xl font-bold text-white ">
                      BlockChain
                    </p>
                    <p className="mt-4 text-lg text-white font-bold">
                      Our Blockchain Development Lab serves as an extension of
                      your team, offering expert blockchain solutions without
                      the need for an in-house department. Gain exclusive access
                      to specialized talent, competitive rates, and seamless
                      project focus for all your blockchain initiatives.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="transition-all  duration-1000   hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <Image
                    src="/csd_image.jpg"
                    alt="background image"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className=" absolute   top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative  ">
                    <h3 className="mt-8 text-2xl font-bold text-white ">
                      Custom Software Development
                    </h3>
                    <p className="mt-4 text-lg text-white font-bold">
                      Capricon Technologies delivers bespoke software solutions
                      as a seamless extension of your business. Our Custom
                      Software Development Lab offers high-quality, scalable
                      software at competitive rates, freeing you to focus on
                      what you do best while we handle your unique development
                      needs.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="transition-all  duration-1000  hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <Image
                    src="/cloud.png"
                    alt="background image"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className=" absolute  top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative  ">
                    <h3 className="mt-8 text-2xl font-bold text-white ">
                      Cloud And DevOps Engineering{" "}
                    </h3>
                    <p className="mt-4 text-lg text-white font-bold">
                      Capricon Technologies offers Cloud And DevOps Engineering
                      as a seamless extension of your team, providing expert
                      cloud migration, management, And DevOps practices at
                      competitive rates. With our dedicated support, you gain
                      streamlined operations And optimized performance, letting
                      you focus on your core business while we handle the
                      complexities of cloud And DevOps.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="transition-all  duration-1000    hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <Image
                    src="/aiimage.jpg"
                    alt="background image"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className=" absolute top-0 left-0 w-24 h-1 z-30  transition-all duration-200    group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative  ">
                    <p className="mt-8 text-2xl font-bold text-white ">
                      Artificial Intelligence{" "}
                    </p>
                    <p className="mt-4 text-lg text-white font-bold">
                      Our AI Lab operates as an extension of your team, offering
                      expert AI development without the need for an in-house
                      division. Access specialized talent, competitive rates,
                      And dedicated focus on your AI innovations.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our products - carosel */}
      <div
        id="indicators-carousel"
        className="relative w-full bg-black"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <Image
              width={200}
              height={150}
              src="/docs/images/carousel/carousel-1.svg"
              // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              width={200}
              height={150}
              src="/docs/images/carousel/carousel-2.svg"
              // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              width={200}
              height={150}
              src={"/docs/images/carousel/carousel-3.svg"}
              // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              width={200}
              height={150}
              src="/docs/images/carousel/carousel-4.svg"
              // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              width={200}
              height={150}
              src="/docs/images/carousel/carousel-5.svg"
              // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* blog section */}
      <div className="relative text-white ">
        <Image
          src="/bg1.jpg"
          alt="background image"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <p className="relative text-3xl font-bold">BLOG</p>
        <article className="flex bg-white transition hover:shadow-xl w-[1100px]  relative rounded-2xl h-64 border-none ml-96 mt-20">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-96 relative ">
            <Image
              alt="1st image"
              src={"/blogimage1.png"}
              fill
              objectFit="cover"
              className="aspect-square "
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className=" p-4 sm:border-l-transparent sm:p-6">
              <h2 className="font-bold uppercase text-black">
                Unlock the Power of AI Tools to Boost Real Estate
              </h2>

              <p className="mt-2 text-base/relaxed text-black font-bold h-full">
                Looking for new ways to increase conversions, enhance customer
                engagement, and automate routine tasks? It’s time to try AI
                tools for real estate. According to the IBM Global AI Adoption
                Index 2022, artificial intelligence can save money by 54%, boost
                productivity by 53%, and improve the customer experience by 48%.
                <a>Read more</a>
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <p className="block bg-[#1B257A] px-5 py-3 text-center text-xs font-bold uppercase text-white ">
                ARTICLE
              </p>
            </div>
          </div>
        </article>

        <article className="flex bg-white transition hover:shadow-xl w-[1100px] mt-8 relative rounded-2xl h-64 border-none ml-96">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-96 relative ">
            <Image
              alt="1st image"
              src={"/blogimage2.png"}
              fill
              objectFit="cover"
              className="aspect-square "
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className=" p-4 sm:border-l-transparent sm:p-6">
              <h2 className="font-bold uppercase text-black">
                Data Science and Artificial Intelligence: The Power Duo for
                Technological Supremacy{" "}
              </h2>

              <p className="mt-2 text-base/relaxed text-black font-bold h-full">
                Artificial intelligence vs data science are trending terms
                today. Forecasts for their growth in the coming years confirm
                this. According to the studies, the data science market will
                grow from USD 95.3 billion in 2021 to USD 322.9 billion in 2026.
                The AI market was worth USD 136.55 billion in 2022. It will grow
                at a rate of 37.3% from 2023 to 2030.
                <a>Read more</a>
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <p className="block bg-[#1B257A] px-5 py-3 text-center text-xs font-bold uppercase text-white ">
                ARTICLE
              </p>
            </div>
          </div>
        </article>

        <article className="flex bg-white transition hover:shadow-xl w-[1100px] mt-8 relative rounded-2xl h-64 border-none ml-96">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-96 relative ">
            <Image
              alt="1st image"
              src={"/blogimage3.png"}
              fill
              objectFit="cover"
              className="aspect-square "
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className=" p-4 sm:border-l-transparent sm:p-6">
              <h2 className="font-bold uppercase text-black">
                7 Ways AI is Revolutionizing the FinTech Industry{" "}
              </h2>

              <p className="mt-2 text-base/relaxed text-black font-bold h-full">
                Financial technology (FinTech) & artificial intelligence (AI)
                are two cutting-edge innovations that have recently altered the
                financial sector. AI can boost economic growth by 26% and
                financial services revenue by 34%. It is pivotal for FinTech’s
                rapid advancements, enabling financial institutions & businesses
                to analyze vast amounts of data, identify patterns, & make
                data-driven decisions efficiently.
                <a>Read more</a>
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <p className="block bg-[#1B257A] px-5 py-3 text-center text-xs font-bold uppercase text-white ">
                ARTICLE
              </p>
            </div>
          </div>
        </article>
      </div>
      {/* faq section */}
      <div className="flex gap-8 p-8 relative ">
        <h3 className="relative text-white">FAQ</h3>
        <Image
          src="/bg2.jpg"
          alt="background image"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="w-1/2 ">
          <ul className="space-y-4 text-2xl font-bold">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`transition-opacity duration-500  ${
                  currentIndex === index
                    ? "opacity-100 text-[#7F14B2]"
                    : "opacity-95 text-white"
                }`}
              >
                <span className="mr-2 text-[#7F14B2]">•</span>
                {faq.question}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 text-lg p-4   shadow-lg relative">
          <Image
            src="/bg1.jpg"
            alt="background image"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          <p className="transition-opacity duration-500 absolute font-bold text-2xl text-white">
            {faqs[currentIndex].answer}
          </p>
        </div>
      </div>

      <section className="bg-[#1B257A]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-4xl text-white font-bold">Describe your project</p>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 ">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="company">
                    Company
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Company"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="Phone Number">
                    Phone Number
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="text"
                    id="phonenumber"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#1B257A] px-5 py-3 font-bold text-white sm:w-auto"
                  >
                    Get a quote
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2  relative">
              <Image
                src="/dyp_image.jpeg"
                alt="background image"
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "14px",
                }}
              />
              <p className=" absolute text-white font-bold text-2xl bottom-0 mb-10 p-4">
                Please, leave your contact details & describe your project
                below. We’ll get back to you within 24 hrs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#030722] text-white">
        <div className="mx-auto  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Image src={"/LOGO.png"} width={50} height={50} alt="Logo" />
              <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">
                Capricon Technologies
              </span>

              <p className="mt-4 max-w-xs ">
                Providing clients with system software services such as new
                technology development, software product development,
                re-engineering, and testing and release management.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5">
              <div>
                <p className="font-bold ">Technical Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>support@capricontechnology.com </li>
                  <li>+91 8420392469 </li>
                </ul>

                <p className="font-bold ">Sales Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>info@capricontechnology.com </li>
                  <li>+91 8420392469 </li>
                </ul>
              </div>
              <div>
                <p className="font-bold ">Industry</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>Application Services </li>

                  <li>DevOps </li>

                  <li>AI Development</li>
                  <li>Data Science</li>
                </ul>
              </div>

              <div>
                <p className="font-bold ">Technologies</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Full Stack
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      React Native
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      ReactJS
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Flutter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">About</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Compnany{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold ">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs ">Copyright Satyam Studio</p>
        </div>
      </footer>
    </>
  );
}
