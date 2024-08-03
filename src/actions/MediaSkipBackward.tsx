import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaSkipBackward = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M15 3v10c0 1-1.086 1-1.086 1h-.113c-.211 0-.418-.047-.602-.148L4.801 9.05c-.375-.207-.563-.63-.563-1.051s.188-.844.563-1.05l8.398-4.802c.184-.101.39-.148.602-.148h.113S15 2 15 3M1.5 2h1c.277 0 .5.223.5.5v11c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-11c0-.277.223-.5.5-.5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MediaSkipBackward)
export default ForwardRef