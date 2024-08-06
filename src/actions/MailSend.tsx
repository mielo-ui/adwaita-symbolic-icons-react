import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0a1 1 0 0 0-.707.293l-1.25 1.25-1.762 1.73c-.191.2-.281.442-.281.75 0 .977 1 1 1 1 .258 0 .527-.128.719-.312L7 3.43V7s0 1 1 1 1-1 1-1V3.43l1.281 1.28c.192.185.41.313.719.313 0 0 1-.023 1-1 0-.308-.09-.55-.281-.75l-1.762-1.73-1.25-1.25A1 1 0 0 0 8 0M3 9c-1.645 0-3 1.355-3 3v4h2v-3.8l4.613 3.077a2.505 2.505 0 0 0 2.774 0L14 12.2V16h2v-4c0-1.645-1.355-3-3-3zm.8 2h8.4l-3.923 2.613a.495.495 0 0 1-.554 0zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MailSend)
export default ForwardRef