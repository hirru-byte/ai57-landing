import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(ScrollTrigger);

const ColumnRanking = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  useGSAP(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 70%",
        end: "bottom top",
      },
    });
    const bar1 = svgRef.current.querySelector("#bar1") as HTMLElement;
    const bar2 = svgRef.current.querySelector("#bar2") as HTMLElement;
    const bar3 = svgRef.current.querySelector("#bar3") as HTMLElement;
    const bar4 = svgRef.current.querySelector("#bar4") as HTMLElement;
    const bar5 = svgRef.current.querySelector("#bar5") as HTMLElement;

    tl.to(bar1.querySelector(".barToAnimate") as HTMLElement, {
      y: 0,
      duration: 0.7,
      ease: "none",
    });
    tl.to(
      bar2.querySelector(".barToAnimate") as HTMLElement,
      {
        y: 0,
        duration: 0.7,
        ease: "none",
      },
      "<+=0.2"
    );
    tl.to(
      bar3.querySelector(".barToAnimate") as HTMLElement,
      {
        y: 0,
        duration: 0.7,
        ease: "none",
      },
      "<+=0.3"
    );
    tl.to(
      bar4.querySelector(".barToAnimate") as HTMLElement,
      {
        y: 0,
        duration: 0.7,
        ease: "none",
      },
      "<+=0.4"
    );
    tl.to(
      bar5.querySelector(".barToAnimate") as HTMLElement,
      {
        y: 0,
        duration: 0.7,
        ease: "none",
      },
      "<+=0.5"
    );
  }, [svgRef]);

  return (
    <svg ref={svgRef} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip-0">
          <path
            d="M -513.42 98.792 L -513.42 98.81 L -513.12 98.957 L -513.42 99.104 L -513.42 235.792 L -612.77 235.792 L -612.77 99.129 L -613.12 98.958 L -563.12 74.525 L -513.46 98.792 L -513.42 98.792 Z"
            style={{
              strokeWidth: 0.707,
              fill: "rgb(132, 248, 179)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            className="side left"
            transform="matrix(-1, 0, 0, -1, -0.000023, 0.000004)"
          ></path>
        </clipPath>
        <clipPath id="clip-1">
          <path
            d="M -513.55 98.327 L -513.55 98.345 L -513.25 98.492 L -513.55 98.639 L -513.55 325.679 L -612.9 325.679 L -612.9 98.662 L -613.25 98.492 L -563.25 74.06 L -513.58 98.327 L -513.55 98.327 Z"
            style={{
              strokeWidth: 0.675,
              fill: "rgba(142, 233, 128, 0.655)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            className="side left"
            transform="matrix(-1, 0, 0, -1, 0.000013, -0.000034)"
          ></path>
        </clipPath>
        <clipPath id="clip-2">
          <path
            d="M -513.42 98.327 L -513.42 98.345 L -513.12 98.492 L -513.42 98.639 L -513.42 356.327 L -612.77 356.327 L -612.77 98.663 L -613.12 98.492 L -563.12 74.059 L -513.46 98.327 L -513.42 98.327 Z"
            style={{
              strokeWidth: 0.707,
              fill: "rgba(27, 157, 16, 0.55)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            className="side left"
            transform="matrix(-1, 0, 0, -1, -0.000004, 0.000028)"
          ></path>
        </clipPath>
        <clipPath id="clip-3">
          <path
            d="M -613.01 97.773 L -612.89 97.773 L -613.36 97.546 L -563.36 73.113 L -513.7 97.381 L -513.66 97.381 L -513.66 97.399 L -513.36 97.546 L -513.66 97.693 L -513.66 413.341 L -563.12 413.341 L -563.12 413.733 L -613.01 413.733 L -613.01 97.773 Z"
            style={{
              strokeWidth: 0.685,
              fill: "rgba(16, 157, 54, 0.553)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            className="side left"
            transform="matrix(-1, 0, 0, -1, 0.000002, -0.000011)"
          ></path>
        </clipPath>
        <clipPath id="clip-4">
          <path
            d="M 53.869 144.417 L 54.341 144.417 L 53.521 144.052 L 103.521 121.807 L 153.184 143.902 L 153.22 143.902 L 153.22 143.918 L 153.521 144.052 L 153.22 144.186 L 153.22 559.902 L 53.869 559.902 L 53.869 144.417 Z"
            style={{
              strokeWidth: 0.675,
              fill: "rgba(16, 157, 39, 0.576)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            className="side left"
            transform="matrix(-1, 0, 0, -1, 0.000005, -0.000032)"
          ></path>
        </clipPath>
      </defs>
      <g
        className="barToClip"
        id="bar5"
        transform="matrix(1, 0, 0, 1, 68.93087, -105.842567)"
        style={{ clipPath: "url(#clip-4)" }}
      >
        <g className="barToAnimate" transform="matrix(1, 0, 0, 1, 0, 373)">
          <rect
            x="54.114"
            y="147.705"
            width="49.886"
            height="415.485"
            style={{ fill: "rgb(16, 117, 157)", strokeWidth: 0.675 }}
            className="side left"
          ></rect>
          <rect
            x="103.614"
            y="147.19"
            width="49.851"
            height="416"
            style={{ fill: "rgb(30, 171, 227)", strokeWidth: 0.675 }}
            className="side right"
          ></rect>
          <g>
            <rect
              x="109.451"
              y="40.649"
              width="54.725"
              height="40.649"
              style={{ fill: "rgb(34, 158, 207)", strokeWidth: 0.675 }}
              transform="matrix(0.913655, 0.406491, -1.230039, 0.547253, 53.765022, 58.358933)"
              className="top"
            ></rect>
            <g transform="matrix(1, 0, 0, 1, 666.778198, 46.409584)">
              <ellipse
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(247, 201, 0)",
                  fillRule: "nonzero",
                  paintOrder: "fill",
                  strokeWidth: 0,
                }}
                cx="-563.55"
                cy="98.433"
                rx="12"
                ry="12"
              ></ellipse>
              <text
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre",
                  fontSize: "16px",
                }}
                x="-568.29"
                y="104.001"
              >
                5
              </text>
            </g>
          </g>
        </g>
      </g>
      <g
        transform="matrix(1, 0, 0, 0.938827, 836.799255, 61.375057)"
        className="barToClip"
        style={{ clipPath: "url(#clip-3)" }}
        id="bar4"
      >
        <g
          className="barToAnimate"
          transform="matrix(1, 0, 0, 1, 0, 282.266663)"
        >
          <rect
            x="-612.77"
            y="98.719"
            width="49.886"
            height="315.96"
            style={{ fill: "rgb(16, 117, 157)", strokeWidth: 0.707 }}
            className="side left"
          ></rect>
          <rect
            x="-563.27"
            y="98.327"
            width="49.851"
            height="315.96"
            style={{ fill: "rgb(30, 171, 227)", strokeWidth: 0.707 }}
            className="side right"
          ></rect>
          <g>
            <rect
              x="111.301"
              y="43.904"
              width="55.65"
              height="43.904"
              style={{ fill: "rgb(34, 158, 207)", strokeWidth: 0.707 }}
              transform="matrix(0.898469, 0.439036, -1.138858, 0.556502, -613.118652, 0.761869)"
              className="top"
            ></rect>
            <g transform="matrix(1, 0, 0, 1.065159, 0.095093, -7.784992)">
              <ellipse
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(247, 201, 0)",
                  fillRule: "nonzero",
                  paintOrder: "fill",
                  strokeWidth: 0,
                }}
                cx="-563.55"
                cy="98.433"
                rx="12"
                ry="12"
              ></ellipse>
              <text
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre",
                  fontSize: "16px",
                }}
                x="-568.29"
                y="104.001"
              >
                4
              </text>
            </g>
          </g>
        </g>
      </g>
      <g
        transform="matrix(1, 0, 0, 1, 913.118958, 143.673019)"
        className="barToClip"
        style={{ clipPath: "url(#clip-2)" }}
        id="bar3"
      >
        <g className="barToAnimate" transform="matrix(1, 0, 0, 1, 0, 227)">
          <rect
            x="-612.77"
            y="98.646"
            width="49.886"
            height="257.681"
            style={{ fill: "rgb(16, 117, 157)", strokeWidth: 0.707 }}
            className="side left"
          ></rect>
          <rect
            x="-563.27"
            y="98.327"
            width="49.851"
            height="258"
            style={{ fill: "rgb(30, 171, 227)", strokeWidth: 0.707 }}
            className="side right"
          ></rect>
          <g>
            <rect
              x="111.301"
              y="43.904"
              width="55.65"
              height="43.904"
              style={{ fill: "rgb(34, 158, 207)", strokeWidth: 0.707 }}
              transform="matrix(0.898469, 0.439036, -1.138858, 0.556502, -613.118652, 0.761869)"
              className="top"
            ></rect>
            <g transform="matrix(1, 0, 0, 1, 0.667236, -1.494431)">
              <ellipse
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(247, 201, 0)",
                  fillRule: "nonzero",
                  paintOrder: "fill",
                  strokeWidth: 0,
                }}
                cx="-563.55"
                cy="98.433"
                rx="12"
                ry="12"
              ></ellipse>
              <text
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre",
                  fontSize: "16px",
                }}
                x="-568.29"
                y="104.001"
              >
                3
              </text>
            </g>
          </g>
        </g>
      </g>
      <g
        transform="matrix(1, 0, 0, 0.910484, 713.246582, 204.082382)"
        className="barToClip"
        style={{ clipPath: "url(#clip-1)" }}
        id="bar2"
      >
        <g
          className="barToAnimate"
          transform="matrix(1, 0, 0, 1, -0.127643, 197.696899)"
        >
          <rect
            x="-612.77"
            y="98.608"
            width="49.886"
            height="227.07"
            style={{ fill: "rgb(16, 117, 157)", strokeWidth: 0.707 }}
            className="side left"
          ></rect>
          <rect
            x="-563.27"
            y="98.327"
            width="49.851"
            height="227.352"
            style={{ fill: "rgb(30, 171, 227)", strokeWidth: 0.707 }}
            className="side right"
          ></rect>
          <g>
            <rect
              x="111.301"
              y="43.904"
              width="55.65"
              height="43.904"
              style={{ fill: "rgb(34, 158, 207)", strokeWidth: 0.707 }}
              transform="matrix(0.898469, 0.439036, -1.138858, 0.556502, -613.118652, 0.761869)"
              className="top"
            ></rect>
            <g transform="matrix(1, 0, 0, 1.098317, 0.25008, -11.426114)">
              <ellipse
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(247, 201, 0)",
                  fillRule: "nonzero",
                  paintOrder: "fill",
                  strokeWidth: 0,
                }}
                cx="-563.55"
                cy="98.433"
                rx="12"
                ry="12"
              ></ellipse>
              <text
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre",
                  fontSize: "16px",
                }}
                x="-568.29"
                y="104.001"
              >
                2
              </text>
            </g>
          </g>
        </g>
        <ellipse
          style={{ fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)" }}
          cx="-852.35"
          cy="-40.476"
          rx="7.599"
          ry="9.681"
        ></ellipse>
      </g>
      <g
        transform="matrix(1, 0, 0, 1, 813.118774, 264.208252)"
        className="barToClip"
        style={{ clipPath: "url(#clip-0)" }}
        id="bar1"
      >
        <g
          className="barToAnimate"
          transform="matrix(1, 0, 0, 1, 0.000183, 111.44503)"
        >
          <rect
            x="-612.77"
            y="98.497"
            width="49.886"
            height="136.83"
            style={{ fill: "rgb(16, 117, 157)", strokeWidth: 0.707 }}
            className="side left"
          ></rect>
          <rect
            x="-563.27"
            y="98.327"
            width="49.851"
            height="137"
            style={{ fill: "rgb(30, 171, 227)", strokeWidth: 0.707 }}
            className="side right"
          ></rect>
          <g>
            <rect
              x="111.301"
              y="43.904"
              width="55.65"
              height="43.904"
              style={{ fill: "rgb(34, 158, 207)", strokeWidth: 0.707 }}
              transform="matrix(0.898469, 0.439036, -1.138858, 0.556502, -613.118652, 0.761869)"
              className="top"
            ></rect>
            <g>
              <ellipse
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "rgb(247, 201, 0)",
                  fillRule: "nonzero",
                  paintOrder: "fill",
                  strokeWidth: 0,
                }}
                cx="-563.55"
                cy="98.433"
                rx="12"
                ry="12"
              ></ellipse>
              <text
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily: "Arial, sans-serif",
                  whiteSpace: "pre",
                  fontSize: "16px",
                }}
                x="-568.29"
                y="104.001"
              >
                1
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ColumnRanking;
