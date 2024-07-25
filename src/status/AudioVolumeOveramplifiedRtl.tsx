import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeOveramplifiedRtl = (
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
      d="M9 1.008a.99.99 0 0 1 .77.351L13 5h1c1.094 0 2 .844 2 2v2c0 1.09-.91 2-2 2h-1l-3.23 3.64A.97.97 0 0 1 9 15zM2 1c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V2c0-.55.45-1 1-1m4 2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeOveramplifiedRtl)
export default ForwardRef