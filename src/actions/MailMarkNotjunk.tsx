import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailMarkNotjunk = (
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
      <path d="M3 1C1.355 1 0 2.355 0 4v5c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V4.2l4.613 3.077a2.505 2.505 0 0 0 2.774 0L14 4.2V7c0 .55.45 1 1 1s1-.45 1-1V4c0-1.645-1.355-3-3-3zm.8 2h8.4L8.276 5.613a.495.495 0 0 1-.554 0zM14.973 9.992c-.262 0-.52.106-.707.293l-3.293 3.293-1.293-1.293A1 1 0 1 0 8.266 13.7l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-.707-1.707m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MailMarkNotjunk)
export default ForwardRef