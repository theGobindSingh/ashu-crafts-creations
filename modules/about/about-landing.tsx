import Image from "next/image";

export default function AboutLanding() {
  return (
    <div className="about-landing">
      <Image
        src="/assets/images/kiss.png"
        alt="about-landing-background"
        fill
        sizes="100%"
      />
      <div className="about-landing-text">
        <div className="text1">
          <h3>2+</h3>
          <span>Active years</span>
        </div>
        <div className="text2">
          <h3>150+</h3>
          <span>Content customers</span>
        </div>
        <div className="text3">
          <h3>200+</h3>
          <span>Unique commissions</span>
        </div>
        <div className="text4">
          <h3>50+</h3>
          <span>Hampers</span>
        </div>
      </div>
      <div className="about-landing-prose">
        <h3>/ About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span>Ashu</span>
      </div>
    </div>
  );
}
