import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BookmarkNew = (
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
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3.523 0c-1.09 0-1.914.68-2.23 1.293C.98 1.91.993 2.5.993 2.5v12.117l1.421-.71.031-.012 4-2a1.001 1.001 0 0 0-.895-1.79L4 10.883v-.004l-1.008.504V4.5L3 4.46V3c0-.555.445-1 1-1h4c.555 0 1 .445 1 1v3c0 .55.45 1 1 1s1-.45 1-1q.002-.054-.008-.11V2.5s.016-.582-.293-1.2C10.395.689 9.58 0 8.492 0zm0 0"
      />
      <path d="M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(BookmarkNew)
export default ForwardRef