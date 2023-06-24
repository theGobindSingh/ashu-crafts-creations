export default function Flag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
      viewBox="0 0 225 150"
      width="1350"
      height="900"
      className="flag"
    >
      <rect width="225" height="150" fill="#f93" />
      <rect width="225" height="50" y="50" fill="#fff" />
      <rect width="225" height="50" y="100" fill="#128807" />
      <g transform="translate(112.5,75)">
        <circle r="20" fill="#008" />
        <circle r="17.5" fill="#fff" />
        <circle r="3.5" fill="#008" />
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a">
                <circle
                  r="0.875"
                  fill="#008"
                  transform="rotate(7.5) translate(17.5)"
                />
                <path
                  fill="#008"
                  d="M 0,17.5 0.6,7 C 0.6,7 0,2 0,2 0,2 -0.6,7 -0.6,7 L 0,17.5 z"
                />
              </g>
              <use href="#a" transform="rotate(15)" />
            </g>
            <use href="#b" transform="rotate(30)" />
          </g>
          <use href="#c" transform="rotate(60)" />
        </g>
        <use href="#d" transform="rotate(120)" />
        <use href="#d" transform="rotate(-120)" />
      </g>
    </svg>
  );
}
