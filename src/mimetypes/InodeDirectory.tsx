import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InodeDirectory = (
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
      <path d="M1 4v1h8V4zm0 0" />
      <path d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V6c0-1.645-1.355-3-3-3H9.414L7.707 1.293A1 1 0 0 0 7 1zm0 2h3.586l1.707 1.707A1 1 0 0 0 9 5h4c.563 0 1 .438 1 1v6c0 .566-.437 1-1 1H3c-.562 0-1-.434-1-1V4c0-.562.438-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(InodeDirectory)
export default ForwardRef