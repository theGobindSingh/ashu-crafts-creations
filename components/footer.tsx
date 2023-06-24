import Link from "next/link";

export default function Footer() {
  console.log("Made by");
  console.log(`   
    ___    __    __              
   /   |  / /_  / /_  ____ ______
  / /| | / __ \\/ __ \\/ __ '/ ___/
 / ___ |/ /_/ / / / / /_/ (__  ) 
/_/  |_/_.___/_/ /_/\\__,_/____/  
                                 
`);
  console.log("Chatterjee\nof");
  console.log(`
 | |  | |                          
 | |__| |_   _ _ __ ___  _ __  ___ 
 |  __  | | | | '_ ' _ \\| '_ \\/ __|
 | |  | | |_| | | | | | | | | \\__ \\
 |_|  |_|\\__, |_| |_| |_|_| |_|___/
          __/ |                    
         |___/                     `);
  console.log(`
         __ 
        / _|
   ___ | |_ 
  / _ \\|  _|
 | (_) | |  
  \\___/|_|  
            
            `);
  console.log(` __          __  _     
 \\ \\        / / | |    
  \\ \\  /\\  / /__| |__  
   \\ \\/  \\/ / _ \\ '_ \\ 
    \\  /\\  /  __/ |_) |
     \\/  \\/ \\___|_.__/ 
                       
                       `);
  return (
    <footer className="footer">
      <p>
        <span>Made with</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="heart"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        <span>from</span>
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
        <span>by</span>
        <Link
          href="https://www.hymnsofweb.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Hymns of Web
        </Link>
      </p>
    </footer>
  );
}
