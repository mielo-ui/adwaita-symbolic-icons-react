import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailReplyAllRtl = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M11 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L13.586 7l-3.293-3.293A1 1 0 0 1 11 2M7 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L8.586 8H4c-1.117 0-2 .883-2 2v3c0 .55-.45 1-1 1s-1-.45-1-1v-3q-.001-.035.004-.07A4.01 4.01 0 0 1 4 6h4.586L6.293 3.707A1 1 0 0 1 7 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailReplyAllRtl)
export default ForwardRef