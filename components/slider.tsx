import { useEffect, useRef, Children, useCallback } from "react";
import type { PropsWithChildren, MutableRefObject, CSSProperties } from "react";

interface SliderProps {
  prevBtnRef: MutableRefObject<any>;
  nextBtnRef: MutableRefObject<any>;
  breakpoints: {
    min: number;
    max: number;
    items: number;
  }[];
  customTransition?: CSSProperties["transition"];
}

export default function Slider(props: PropsWithChildren<SliderProps>) {
  const {
    children,
    prevBtnRef,
    nextBtnRef,
    breakpoints = [{ min: 0, max: 9999, items: 1 }],
    customTransition = "all 0.3s ease",
  } = props;

  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const singleHeight = useRef<number>(0);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const showItems = useRef<number>(0);
  const totalItems = useRef<number>(Children.count(children));

  function sliderLogic() {
    const wrapperHeight = Math.round(
      sliderWrapperRef.current?.offsetHeight ?? 0
    );
    singleHeight.current = Math.round(wrapperHeight / showItems.current);
    const containerHeight = singleHeight.current * totalItems.current;
    if (sliderContainerRef.current !== null) {
      sliderContainerRef.current.style.height = containerHeight + "px";
      sliderContainerRef.current.style.gridTemplateRows = `repeat(${totalItems.current}, ${singleHeight.current}px)`;
    }
  }

  function resizePartialLogic() {
    for (let i = 0; i < breakpoints.length; i++) {
      if (
        (breakpoints[i]?.min ?? 999999) < document.body.clientWidth &&
        (breakpoints[i]?.max ?? -1) > document.body.clientWidth
      ) {
        showItems.current = breakpoints[i]?.items ?? 0;
        break;
      }
    }
    if (sliderContainerRef.current !== null) {
      sliderContainerRef.current.style.top = "0px";
    }
  }

  function resizeLogic() {
    resizePartialLogic();
    sliderLogic();
  }

  useEffect(() => {
    try {
      prevBtnRef.current.addEventListener("click", upClickHandler);
      nextBtnRef.current.addEventListener("click", downClickHandler);
    } catch {
      alert("Something went wrong with button refs");
    }
    resizePartialLogic();
    window.addEventListener("resize", resizeLogic);
    return () => {
      window.removeEventListener("resize", resizeLogic);
      try {
        prevBtnRef.current.removeEventListener("click", upClickHandler);
        nextBtnRef.current.removeEventListener("click", downClickHandler);
      } catch {
        //
      }
    };
  }, []);

  useEffect(() => {
    sliderLogic();
  }, [sliderWrapperRef, sliderContainerRef, showItems.current, totalItems]);

  const upClickHandler = useCallback(() => {
    const top = Number(
      sliderContainerRef.current?.style.top.replace("px", "") ?? 0
    );
    if (
      top < 0 &&
      sliderContainerRef.current !== null &&
      top < singleHeight.current * (totalItems.current - showItems.current)
    ) {
      sliderContainerRef.current.style.top = top + singleHeight.current + "px";
    }
  }, [sliderContainerRef, singleHeight, showItems.current, totalItems]);

  const downClickHandler = useCallback(() => {
    const top = Number(
      sliderContainerRef.current?.style.top.replace("px", "") ?? 0
    );
    if (
      top <= 0 &&
      sliderContainerRef.current !== null &&
      top > singleHeight.current * (totalItems.current - showItems.current) * -1
    ) {
      sliderContainerRef.current.style.top = top - singleHeight.current + "px";
    }
  }, [sliderContainerRef, singleHeight, showItems.current, totalItems]);

  return (
    <div
      className="slider-wrapper"
      ref={sliderWrapperRef}
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="slider-container"
        ref={sliderContainerRef}
        style={{
          display: "grid",
          transition: customTransition,
          position: "absolute",
        }}
      >
        {children}
      </div>
    </div>
  );
}
