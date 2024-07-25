import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DaytimeSunrise = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="">
      <path d="M15.004 13.016h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2M12.25 8.352l-.707.707a1 1 0 0 0 0 1.414c.39.39 1.027.39 1.418 0l.707-.707a1.007 1.007 0 0 0 0-1.414 1.004 1.004 0 0 0-1.418 0M2.348 9.758l.707.707c.254.254.62.351.968.262.344-.094.614-.364.707-.711a1 1 0 0 0-.261-.965l-.707-.707a.995.995 0 0 0-1.672.445 1 1 0 0 0 .258.969M1 15h1c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1M8 9c-.55 0-1-.45-1-1V5H5V4h.008a1 1 0 0 1 .285-.707l2-2a1 1 0 0 1 1.414 0l2 2c.184.187.29.441.29.707H11v1H9v3c0 .55-.45 1-1 1M6 14c0-1.098.902-2 2-2s2 .902 2 2c0 .55.45 1 1 1s1-.45 1-1c0-2.215-1.785-4-4-4s-4 1.785-4 4c0 .55.45 1 1 1s1-.45 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DaytimeSunrise)
export default ForwardRef