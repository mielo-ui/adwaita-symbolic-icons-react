import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemShared = (
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
      d="M13.031-.008a3 3 0 0 0-2.976 3.371L5.113 5.836a3.02 3.02 0 0 0-2.082-.844 3 3 0 0 0 0 6c.774 0 1.52-.305 2.074-.844l4.95 2.477a3 3 0 0 0-.024.367c0 1.66 1.344 3 3 3s3-1.34 3-3a3 3 0 0 0-3-3 3.02 3.02 0 0 0-2.074.844L6.004 8.363q.026-.182.027-.37 0-.185-.027-.368l4.95-2.477c.558.54 1.304.844 2.077.844a3 3 0 0 0 0-6m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmblemShared)
export default ForwardRef