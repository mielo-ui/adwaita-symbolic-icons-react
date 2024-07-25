import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailUnread = (
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
    <g fill="">
      <path d="M1.8 3.02a1 1 0 0 0-.355 1.813l5.168 3.444a2.505 2.505 0 0 0 2.774 0l5.168-3.445a1 1 0 1 0-1.11-1.664L8.277 6.613a.495.495 0 0 1-.554 0L2.555 3.168A1 1 0 0 0 1.8 3.02m0 0" />
      <path d="M3 2C1.355 2 0 3.355 0 5v6c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v6c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V5c0-.57.43-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(MailUnread)
export default ForwardRef