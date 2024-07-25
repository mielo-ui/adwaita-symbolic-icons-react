import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaSeekForward = (
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
      <path d="M2 4c.18 0 .36.047.516.14l5 3a1.002 1.002 0 0 1 0 1.72l-5 3a1 1 0 0 1-.516.136C1 12 1 11 1 11V5S.996 4 2 4m0 0" />
      <path d="M9 4c.18 0 .36.047.516.14l5 3a1.002 1.002 0 0 1 0 1.72l-5 3a1 1 0 0 1-.516.136C8 12 8 11 8 11V5s-.004-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MediaSeekForward)
export default ForwardRef