import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemSwitchUser = (
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
      d="M12 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2M4 2a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m7 3a3 3 0 0 0-2.832 2h7.664A3 3 0 0 0 13 5zM3 7c-1.66 0-3 1.34-3 3 0 .555.445 1 1 1h6c.555 0 1-.445 1-1 0-1.66-1.34-3-3-3zm9 1a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0-.285.707H9v1h2v1c-.105.8-.5 1-1 1H6c-1 0-1-1-1-1 0-.55-.45-1-1-1s-1 .45-1 1c0 1.332.813 2.273 1.55 2.645C5.294 16.015 6 16 6 16h4s.707.016 1.45-.355C12.187 15.273 13 14.332 13 13v-1h2v-1h-.008a1 1 0 0 0-.285-.707l-2-2A1 1 0 0 0 12 8m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemSwitchUser)
export default ForwardRef