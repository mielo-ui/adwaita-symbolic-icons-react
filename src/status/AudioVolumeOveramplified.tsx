import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeOveramplified = (
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
      d="M7 1.008a.99.99 0 0 0-.77.351L3 5H2C.906 5 0 5.844 0 7v2c0 1.09.91 2 2 2h1l3.23 3.64c.211.255.493.364.77.36zM14 1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1m-4 2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeOveramplified)
export default ForwardRef