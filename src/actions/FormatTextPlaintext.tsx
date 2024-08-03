import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextPlaintext = (
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
      d="M7 1c-.41 0-.777.25-.93.629l-2 5A1 1 0 0 0 4 7v7h2v-3h4.004l.004 3h2L12 7a.9.9 0 0 0-.074-.371l-2-5A.99.99 0 0 0 9 1zm.676 2h.644L10 7.195 10.004 9H6V7.195zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextPlaintext)
export default ForwardRef