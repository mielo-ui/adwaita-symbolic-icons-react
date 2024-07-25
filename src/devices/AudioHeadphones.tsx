import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioHeadphones = (
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
    <path
      fill=""
      d="M8 0a7 7 0 0 0-7 7v6s0 2 2 2h1c.555 0 1-.445 1-1v-4c0-.555-.5-1-1-1 0 0-1 0-1-1V7c0-1.785.953-3.437 2.5-4.332a5.01 5.01 0 0 1 5 0A5 5 0 0 1 13 7v1c0 1-1 1-1 1-.5 0-1 .445-1 1v4c0 .555.445 1 1 1h1c2 0 2-2 2-2V7a7.005 7.005 0 0 0-7-7m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioHeadphones)
export default ForwardRef