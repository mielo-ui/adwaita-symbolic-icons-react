import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailMessageNew = (
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
      d="M3 1C1.355 1 0 2.355 0 4v6c0 1.645 1.355 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H3c-.57 0-1-.43-1-1V4.2l4.613 3.077a2.505 2.505 0 0 0 2.774 0L14 4.2V8c0 .55.45 1 1 1s1-.45 1-1V4c0-1.645-1.355-3-3-3zm.8 2h8.4L8.276 5.613a.495.495 0 0 1-.554 0zM11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailMessageNew)
export default ForwardRef