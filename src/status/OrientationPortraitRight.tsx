import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const OrientationPortraitRight = (
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
      d="M13.063 2.168a1.11 1.11 0 0 0-1.114-1.113H4.105a1.11 1.11 0 0 0-1.113 1.113v11.738a1.11 1.11 0 0 0 1.113 1.114h7.844a1.11 1.11 0 0 0 1.113-1.114zm-3 5.84L6 12V4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(OrientationPortraitRight)
export default ForwardRef