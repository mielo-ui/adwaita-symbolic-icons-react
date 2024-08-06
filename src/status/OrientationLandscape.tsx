import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const OrientationLandscape = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M2.156 3c-.613 0-1.113.496-1.113 1.113v7.844c0 .617.5 1.117 1.113 1.117h11.739c.617 0 1.117-.5 1.117-1.117V4.113c0-.617-.5-1.113-1.117-1.113zM8 6l4 4H4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(OrientationLandscape)
export default ForwardRef