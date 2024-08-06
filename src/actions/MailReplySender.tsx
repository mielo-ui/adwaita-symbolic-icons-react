import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailReplySender = (
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
      d="M5 2a1 1 0 0 0-.707.293l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L3.414 8H12c1.117 0 2 .883 2 2v3c0 .55.45 1 1 1s1-.45 1-1v-3q.001-.035-.004-.07A4.01 4.01 0 0 0 12 6H3.414l2.293-2.293A1 1 0 0 0 5 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailReplySender)
export default ForwardRef