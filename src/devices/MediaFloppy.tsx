import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaFloppy = (
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
      d="M3.969 1S1 1 1 3.969V12s0 .5.313.719L3 14.406V4c0-1 1-1 1-1h8s1 0 1 1v8c0 1-1 1-1 1h-1v2h1s3 0 3-2.969V3.97S15 1 12.031 1zM5 9c-.555 0-1 .445-1 1v4c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-4c0-.555-.445-1-1-1zm0 1h2v4H5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaFloppy)
export default ForwardRef