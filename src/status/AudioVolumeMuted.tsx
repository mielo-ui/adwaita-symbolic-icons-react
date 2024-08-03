import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeMuted = (
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
      <path d="M7 1.008a.99.99 0 0 0-.77.351L3 5H2C.906 5 0 5.844 0 7v2c0 1.09.91 2 2 2h1l3.23 3.64c.211.255.493.364.77.36zM10 5a1 1 0 0 0-.707 1.707L10.586 8 9.293 9.293a1 1 0 1 0 1.414 1.414L12 9.414l1.293 1.293a1 1 0 1 0 1.414-1.414L13.414 8l1.293-1.293a1 1 0 1 0-1.414-1.414L12 6.586l-1.293-1.293A1 1 0 0 0 10 5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeMuted)
export default ForwardRef