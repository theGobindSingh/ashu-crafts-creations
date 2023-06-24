import Link from "next/link";
import Heart from "./heart";
import Flag from "./flag";

export default function Footer() {
  return (
    <footer className="footer">
      <Link
        href="https://www.hymnsofweb.com/"
        rel="noreferrer noopener"
        target="_blank"
        className="foot-link"
      >
        <span className="foot-s1 txt">Made with</span>
        <Heart />
        <span className="foot-s2 txt">from</span>
        <Flag />
        <span className="foot-s3 txt">by Hymns of Web</span>
      </Link>
    </footer>
  );
}
