import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherSevereAlert = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      d="M6.008 2.068C2.726 2.068.044 4.75.045 8.031c0 3.282 2.681 5.963 5.963 5.963L7 14v-2l-.986-.006h-.008a3.946 3.946 0 0 1-3.961-3.963c0-2.2 1.76-3.963 3.96-3.963a3.96 3.96 0 0 1 3.67 2.473 1 1 0 0 0 .393.453h5.057q.072.001.142.008a4.5 4.5 0 0 0-3.714-1.97c-.15 0-.29.047-.438.062-1.053-1.826-2.96-3.024-5.107-3.026Z"
      style={{
        color: "#000",
        display: "inline",
        fill: "#222",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <path
      fill="currentColor"
      d="M8.875 8A.864.864 0 0 0 8 8.875v6.25c0 .492.383.875.875.875h6.25a.864.864 0 0 0 .875-.875v-6.25A.864.864 0 0 0 15.125 8zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="warning"
    />
  </svg>
)
const ForwardRef = forwardRef(WeatherSevereAlert)
export default ForwardRef