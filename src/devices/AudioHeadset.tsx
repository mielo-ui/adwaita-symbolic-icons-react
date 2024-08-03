import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioHeadset = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 0a7 7 0 0 0-7 7v3c0 2 2 2 2 2h1c.555 0 1-.445 1-1V8c0-.555-.445-1-1-1H3c0-1.785.953-3.437 2.5-4.332a5.01 5.01 0 0 1 5 0A5 5 0 0 1 13 7h-1c-.555 0-1 .445-1 1v3c0 .555.5 1 1 1h1c0 1.168-.437 1.477-.95 1.73-.507.254-1.05.27-1.05.27H7c-.55 0-1 .45-1 1s.45 1 1 1h4s.957.012 1.95-.48C13.937 15.023 15 13.832 15 12V7a7.005 7.005 0 0 0-7-7m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioHeadset)
export default ForwardRef