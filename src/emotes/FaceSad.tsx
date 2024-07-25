import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceSad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.559 0 1.031.473 1.031 1.031V7c0 .558-.472 1-1.03 1-.56 0-1-.442-1-1v-.969C5 5.473 5.44 5 6 5m4 0c.559 0 1 .473 1 1.031V7c0 .558-.441 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5m3 5.943c-.996-.637-4.016-.917-5-.917-.983 0-3.804-.051-5 .917v-.5c0-.681 1.744-1.404 5-1.404s5 .871 5 1.404z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceSad)
export default ForwardRef