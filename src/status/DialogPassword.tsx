import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DialogPassword = (
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
      d="M6 1a5 5 0 1 0 0 10 5 5 0 0 0 2.383-.617L9 11v2h2v2h4v-3l-4.309-4.309c.2-.543.305-1.113.309-1.691a5 5 0 0 0-5-5M5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DialogPassword)
export default ForwardRef