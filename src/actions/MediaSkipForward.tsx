import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaSkipForward = (
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
      <path d="M1 3v10c0 1 1.086 1 1.086 1h.113c.211 0 .418-.047.602-.148l8.398-4.801c.375-.207.563-.63.563-1.051s-.188-.844-.563-1.05L2.801 2.147A1.24 1.24 0 0 0 2.199 2h-.113S1 2 1 3M14.5 2h-1c-.277 0-.5.223-.5.5v11c0 .277.223.5.5.5h1c.277 0 .5-.223.5-.5v-11c0-.277-.223-.5-.5-.5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MediaSkipForward)
export default ForwardRef