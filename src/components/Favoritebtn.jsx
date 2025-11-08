const FavoriteBtn = (props) => {
  const favorited = props.favorited;
  return (
    <button
      className={`"
          ${props.addStyling} 
          cursor-pointer
          rounded-full
          aspect-square
          p-2
          text-[var(--color-background)]
          backdrop-blur-[20px]
          bg-[rgba(150,146,146,0.25)];
          hover:[box-shadow:0_8px_24px_0_rgba(19,_21,_68,_0.12)]
          transition-box-shadow duration-200
        "`}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={favorited ? "var(--background)" : "none"}
        viewBox="0 0 1024 1024"
        className="icon"
        stroke="var(--background)"
        strokeWidth="60"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
    </button>
  );
};

export default FavoriteBtn;
