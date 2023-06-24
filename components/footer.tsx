import Link from "next/link";
import Heart from "./heart";
import Flag from "./flag";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <span>Made with</span>
        <Heart />
        <span>from</span>
        <Flag />
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
