import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherShowers = (
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
      fill="currentColor"
      d="M14.691 10.637A4.48 4.48 0 0 0 16 7.465a4.49 4.49 0 0 0-5.727-4.328l1.204.586A5.955 5.955 0 0 0 5.957 0 5.956 5.956 0 0 0-.008 5.96c0 1.368.457 2.638 1.23 3.653a1 1 0 0 0 .923.39.99.99 0 0 0 .796-.605.99.99 0 0 0-.125-.992 4.05 4.05 0 0 1-.824-2.445A3.966 3.966 0 0 1 5.953 2c1.613 0 3.067.98 3.672 2.473a1 1 0 0 0 1.203.586q.33-.094.672-.094c1.375 0 2.5 1.12 2.5 2.5 0 .687-.277 1.308-.727 1.762a1 1 0 1 0 1.418 1.41m0 0"
    />
    <path d="M7 10v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1M4 9v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1m6 0v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1M7 14v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1m-3-1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1m6 0v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1m0 0" />
  </svg>
)
const ForwardRef = forwardRef(WeatherShowers)
export default ForwardRef