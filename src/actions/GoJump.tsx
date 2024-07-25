import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoJump = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0a5.01 5.01 0 0 0-5 5v10c0 .55.45 1 1 1s1-.45 1-1V5c0-1.68 1.32-3 3-3s3 1.32 3 3v3.586L9.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L13 8.586V5c0-2.754-2.246-5-5-5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoJump)
export default ForwardRef