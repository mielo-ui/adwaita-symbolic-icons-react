import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InsertLink = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M5 12.004v1h.008c-.004.262.101.516.285.707l2 1.996a1 1 0 0 0 1.414 0l2-1.996a1 1 0 0 0 .29-.707H11v-1zM7 2c-1.297 0-2.406.84-2.824 2h7.652A3.02 3.02 0 0 0 9 2zM1.004 5C.445 5 0 5.445 0 6s.445 1 1.004 1H6c.555 0 1-.445 1-1s-.445-1-1-1zm9 0C9.445 5 9 5.445 9 6s.445 1 1.004 1H15c.555 0 1-.445 1-1s-.445-1-1-1zM4.176 8A3.01 3.01 0 0 0 7 9.996h2A3.01 3.01 0 0 0 11.828 8H9.035c-.012 0-.023.004-.035.004H7Q6.983 8.002 6.965 8zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(InsertLink)
export default ForwardRef