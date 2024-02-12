export default function Footer() {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="35px"
        height="35px"
      >
        <path
          className="fill-neutral-300 dark:fill-neutral-400"
          opacity=".35"
          d="M52,97c-2.033,0-3.977-0.971-5.197-2.597L42.3,88.4c-0.84-1.122-1.3-2.506-1.3-3.9V46.894	C34.219,43.026,30,38.047,30,30c0-12.131,9.869-22,22-22s22,9.869,22,22c0,8.047-4.219,15.201-11,19.068V84.5	c0,1.395-0.46,2.778-1.296,3.896L57.2,94.4C55.977,96.029,54.033,97,52,97z"
        />
        <path
          fill="#ededed"
          d="M50,95c-2.033,0-3.977-0.971-5.197-2.597L40.3,86.4c-0.84-1.122-1.3-2.506-1.3-3.9V47.068	C32.219,43.201,28,36.047,28,28c0-12.131,9.869-22,22-22s22,9.869,22,22c0,8.047-4.219,15.201-11,19.068V82.5	c0,1.395-0.46,2.778-1.296,3.896L55.2,92.4C53.977,94.029,52.033,95,50,95z"
        />
        <polygon
          fill="#d9eeff"
          points="54.5,82.5 50,88.5 45.5,82.5 45.5,33.5 54.5,33.5"
        />
        <circle fill="#f4665c" cx="50" cy="28" r="14.191" />
        <path
          fill="none"
          stroke="#272727"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M65.5,28	c0-8.56-6.94-15.5-15.5-15.5S34.5,19.44,34.5,28c0,6.995,4.635,12.902,11,14.831V82.5l4.5,6l4.5-6V42.831	C60.865,40.902,65.5,34.995,65.5,28z"
        />
        <path
          fill="none"
          stroke="#272727"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M50,18.5	c-5.137,0-9.307,4.017-9.493,9.144"
        />
      </svg>

      <p className="text-neutral-100 dark:text-neutral-500 tracking-wide">
        <span className="font-sans font-light">find me in</span> Oregon, US
      </p>
    </div>
  );
}
