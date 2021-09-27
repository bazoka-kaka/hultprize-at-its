import styles from "../styles/Home.module.scss";

export default function ScrollDownArrow({ colorClass = "text-gray-700" }) {
  return (
    <figure
      className={`hidden ${styles.floatAnim} cursor-pointer md:inline-block rounded-xl`}
      style={{ transform: "translateX(-50%)" }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 text-white h-1w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 14l-3 3m0 0l-3-3m3 3V8m0 110-18 9 9 0 010 18z"
          //M112 268l-144 144 144-144m256 392v100
        />
      </svg>
    </figure>
  );
}
