import Link from "next/link";
import Head from "next/head";

const EventRegistration = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black px-36">
      <Head>
        <title>Event Registration</title>
        <meta name="description" content="event registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl text-center md:text-left">
          Coming soon. Please stay tune to Hult Prize at ITS social medias for
          announcements of registration.
        </h1>
        <Link href="/">
          <a
            style={{
              background:
                "linear-gradient(80.86deg, #db0a7f -9.3%, #ec83bd 125.39%)",
            }}
            className="px-3 py-1 text-xl duration-150 transform hover:scale-110 rounded-xl"
          >
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventRegistration;
