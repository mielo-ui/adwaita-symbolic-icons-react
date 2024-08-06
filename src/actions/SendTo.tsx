import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SendTo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0a1 1 0 0 0-.707.293l-1.246 1.25-1.766 1.73c-.191.2-.281.442-.281.75 0 .977 1 1 1 1 .258 0 .527-.128.719-.312L7 3.43V11s0 1 1 1 1-1 1-1V3.43l1.281 1.28c.192.185.41.313.719.313 0 0 1-.023 1-1 0-.308-.09-.55-.281-.75l-1.766-1.73L8.707.293A1 1 0 0 0 8 0M4.031 6.965C2.371 6.938 1 8.335 1 10v2.973a3.05 3.05 0 0 0 3.031 3.035h7.938A3.05 3.05 0 0 0 15 12.973V10c0-1.664-1.367-3.062-3.031-3.035L10 7v2l1.969-.035C12.559 8.957 13 9.41 13 10v2.973a1.01 1.01 0 0 1-1.031 1.035H4.03A1.01 1.01 0 0 1 3 12.973V10c0-.59.445-1.043 1.031-1.035L6 9V7zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SendTo)
export default ForwardRef