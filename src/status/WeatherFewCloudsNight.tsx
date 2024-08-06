import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherFewCloudsNight = (
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
    <g fill="currentColor">
      <path d="M8.766 7.316A3.86 3.86 0 0 1 8.164 2.5c.203-.324.2-.738-.004-1.063-.207-.32-.578-.5-.957-.457A7.07 7.07 0 0 0 .918 8.004c0 1.934.777 3.691 2.043 4.969a.994.994 0 0 0 1.676-.434 1 1 0 0 0-.254-.969 5.07 5.07 0 0 1-1.465-3.566 5.09 5.09 0 0 1 4.508-5.035l-.961-1.52a5.869 5.869 0 0 0 .906 7.305 1 1 0 0 0 1.414-.024 1 1 0 0 0-.02-1.414m0 0" />
      <path d="m8.113 11.098 1.516-.614A2.996 2.996 0 0 0 5 13c0 1.66 1.34 3 3 3h4c2.215 0 4-1.785 4-4s-1.785-4-4-4a3.99 3.99 0 0 0-3.887 3.098M14 12c0 1.098-.902 2-2 2H8c-.547 0-1-.453-1-1s.453-1 1-1c.191 0 .379.055.543.16a.994.994 0 0 0 1.516-.613A2 2 0 0 1 12 10c1.098 0 2 .902 2 2m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(WeatherFewCloudsNight)
export default ForwardRef