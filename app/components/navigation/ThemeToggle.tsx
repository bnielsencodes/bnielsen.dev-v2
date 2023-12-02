import clsx from "clsx";

export default function ThemeToggle({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) {
  return (
    <div
      className="relative w-[75px] h-[75px] lg:w-[36px] lg:h-[36px] cursor-pointer group"
      onClick={toggleTheme}
    >
      {/* sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className={clsx(
          "absolute top-1/2 left-1/2 w-[68px] h-[68px] fill-neutral-500 -translate-x-1/2 -translate-y-1/2 duration-300 transition-all lg:w-[32px] lg:h-[32px] lg:group-hover:fill-darkThemeHover",
          {
            "opacity-100 scale-100 rotate-0": darkMode,
            "opacity-0 scale-95 -rotate-[15deg]": !darkMode,
          }
        )}
      >
        <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" />
      </svg>

      {/* moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className={clsx(
          "absolute top-1/2 left-1/2 w-[72px] h-[72px] fill-neutral-200 -translate-x-1/2 -translate-y-1/2 duration-300 transition-all lg:w-[32px] lg:h-[32px] lg:group-hover:fill-lightThemeHover",
          {
            "opacity-0 scale-95 -rotate-[15deg]": darkMode,
            "opacity-100 scale-100 rotate-0": !darkMode,
          }
        )}
      >
        <path d="M 15.90625 5.96875 C 15.863281 5.976563 15.820313 5.988281 15.78125 6 C 15.316406 6.105469 14.988281 6.523438 15 7 L 15 8 L 14 8 C 13.96875 8 13.9375 8 13.90625 8 C 13.355469 8.027344 12.925781 8.496094 12.953125 9.046875 C 12.980469 9.597656 13.449219 10.027344 14 10 L 15 10 L 15 11 C 14.996094 11.359375 15.183594 11.695313 15.496094 11.878906 C 15.808594 12.058594 16.191406 12.058594 16.503906 11.878906 C 16.816406 11.695313 17.003906 11.359375 17 11 L 17 10 L 18 10 C 18.359375 10.003906 18.695313 9.816406 18.878906 9.503906 C 19.058594 9.191406 19.058594 8.808594 18.878906 8.496094 C 18.695313 8.183594 18.359375 7.996094 18 8 L 17 8 L 17 7 C 17.011719 6.710938 16.894531 6.433594 16.6875 6.238281 C 16.476563 6.039063 16.191406 5.941406 15.90625 5.96875 Z M 28.3125 12.96875 L 27 13.15625 C 20.21875 14.125 15 19.957031 15 27 C 15 34.71875 21.28125 41 29 41 C 36.042969 41 41.871094 35.78125 42.84375 29 L 43.03125 27.6875 L 41.71875 27.875 C 41.136719 27.957031 40.566406 28 40 28 C 33.359375 28 28 22.640625 28 16 C 28 15.433594 28.042969 14.863281 28.125 14.28125 Z M 26.03125 15.53125 C 26.023438 15.691406 26 15.835938 26 16 C 26 23.71875 32.28125 30 40 30 C 40.164063 30 40.308594 29.976563 40.46875 29.96875 C 39.128906 35.132813 34.589844 39 29 39 C 22.359375 39 17 33.640625 17 27 C 17 21.410156 20.867188 16.867188 26.03125 15.53125 Z M 7.90625 17.96875 C 7.863281 17.976563 7.820313 17.988281 7.78125 18 C 7.316406 18.105469 6.988281 18.523438 7 19 C 6.96875 19 6.9375 19 6.90625 19 C 6.355469 19.027344 5.925781 19.496094 5.953125 20.046875 C 5.980469 20.597656 6.449219 21.027344 7 21 C 6.996094 21.359375 7.183594 21.695313 7.496094 21.878906 C 7.808594 22.058594 8.191406 22.058594 8.503906 21.878906 C 8.816406 21.695313 9.003906 21.359375 9 21 C 9.359375 21.003906 9.695313 20.816406 9.878906 20.503906 C 10.058594 20.191406 10.058594 19.808594 9.878906 19.496094 C 9.695313 19.183594 9.359375 18.996094 9 19 C 9.011719 18.710938 8.894531 18.433594 8.6875 18.238281 C 8.476563 18.039063 8.191406 17.941406 7.90625 17.96875 Z" />
      </svg>
    </div>
  );
}
