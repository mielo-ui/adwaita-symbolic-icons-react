import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatIndentMore = (
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
      d="M1 1v2h14V1zm0 4v6h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 2 5.003V5zm6 0v2h8V5zm0 4v2h8V9zm-6 4v2h11v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatIndentMore)
export default ForwardRef