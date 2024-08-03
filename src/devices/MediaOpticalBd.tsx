import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaOpticalBd = (
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
      d="M8 0C3.594 0 0 3.594 0 8s3.594 8 8 8 8-3.594 8-8-3.594-8-8-8m0 2c3.313 0 6 2.688 6 6s-2.687 6-6 6-6-2.687-6-6 2.688-6 6-6m0 3a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 5m0 1a2 2 0 1 1-2 2c0-1.105.895-2 2-2m0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaOpticalBd)
export default ForwardRef