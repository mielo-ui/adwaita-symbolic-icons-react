import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeMutedRtl = (
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
      <path d="M9 1.008a.99.99 0 0 1 .77.351L13 5h1c1.094 0 2 .844 2 2v2c0 1.09-.91 2-2 2h-1l-3.23 3.64A.97.97 0 0 1 9 15zM6 5a1 1 0 0 1 .707 1.707L5.414 8l1.293 1.293a1 1 0 1 1-1.414 1.414L4 9.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L2.586 8 1.293 6.707a1 1 0 1 1 1.414-1.414L4 6.586l1.293-1.293A1 1 0 0 1 6 5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeMutedRtl)
export default ForwardRef