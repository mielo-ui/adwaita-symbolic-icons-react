import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MicrophoneDisabled = (
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
      d="M1.531.469.47 1.53l14 14 1.062-1.062-2.793-2.793A5.94 5.94 0 0 0 14 8.012V7h-1.5v1.012c0 .972-.305 1.87-.824 2.601l-1.094-1.09A2.96 2.96 0 0 0 11 8V4c0-1.66-1.34-3-3-3a2.993 2.993 0 0 0-2.996 2.941zM2 7v1.012c0 2.965 2.164 5.43 5 5.906V16h2v-2.082q.751-.13 1.426-.43l-1.164-1.164A4.6 4.6 0 0 1 8 12.5a4.466 4.466 0 0 1-4.5-4.488V7zm3.004 1.066a2.99 2.99 0 0 0 2.93 2.93zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MicrophoneDisabled)
export default ForwardRef