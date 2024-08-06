import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DaytimeSunset = (
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
      <path d="M15 13h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m-2.754-4.66-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414M2.344 9.742l.707.707a1 1 0 1 0 1.414-1.414l-.707-.707a.99.99 0 0 0-.965-.258.994.994 0 0 0-.45 1.672M.996 14.984h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2M6 14c0-1.098.902-2 2-2s2 .902 2 2c0 .55.45 1 1 1s1-.45 1-1c0-2.215-1.785-4-4-4s-4 1.785-4 4c0 .55.45 1 1 1s1-.45 1-1M8 1c-.55 0-1 .45-1 1v3H5v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H11V5H9V2c0-.55-.45-1-1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DaytimeSunset)
export default ForwardRef