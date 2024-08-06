import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWired = (
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
      d="M6 0c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1v2H0v2h2v2H1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1H4V9h8v2h-1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-1V9h2V7H9V5h1c.555 0 1-.445 1-1V1c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWired)
export default ForwardRef