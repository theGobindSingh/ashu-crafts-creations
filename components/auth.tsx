import Link from "next/link";
import { RefObject, useState, forwardRef, Ref } from "react";
import { GiCancel } from "react-icons/gi";

const AuthComponent = (_: any, passedRef: Ref<HTMLDialogElement>) => {
  const [isLoginSel, setIsLoginSel] = useState<boolean>(true);
  const ref = passedRef as RefObject<HTMLDialogElement>;
  const closeHandler = () => {
    if (ref?.current) {
      ref.current.close();
    }
  };
  function loginFunc() {
    setIsLoginSel(true);
  }
  function signUpFunc() {
    setIsLoginSel(false);
  }
  return (
    <dialog id="auth-modal" ref={ref}>
      <button type="button" onClick={closeHandler} className="closebtn">
        <GiCancel />
      </button>
      <div className="top-toggle">
        <button
          type="button"
          onClick={loginFunc}
          className={isLoginSel ? "activebtn" : "passivebtn"}
        >
          Login
        </button>
        <button
          type="button"
          onClick={signUpFunc}
          className={isLoginSel ? "passivebtn" : "activebtn"}
        >
          Sign-Up
        </button>
      </div>
      {isLoginSel ? (
        <form className="login-form">
          <input type="text" id="username" placeholder="Username/email" />
          <input type="password" id="password" placeholder="Password" />
          <div className="check-stuff">
            <div className="check-box">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <Link href="/">Forgot Password</Link>
          </div>
          <button id="loginbtn">Login</button>
          <span>or</span>
          <button type="submit" title="google">
            &nbsp;&nbsp;Login with google
          </button>
        </form>
      ) : (
        <form className="signup-form">
          <input type="text" id="username" placeholder="Username" />
          <input type="email" id="username" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button id="signupbtn">Sign Up</button>
          <span>or</span>
          <button type="submit" title="google">
            &nbsp;&nbsp;Sign-up with google
          </button>
        </form>
      )}
    </dialog>
  );
};

export default forwardRef<HTMLDialogElement, {}>(AuthComponent);
