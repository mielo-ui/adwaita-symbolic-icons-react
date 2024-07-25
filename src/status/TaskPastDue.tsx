import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const TaskPastDue = (
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
      fill="#e01b24"
      d="M11.715 8.012a3.999 3.999 0 0 0-2.543 6.816 3.999 3.999 0 1 0 2.543-6.816m-1.13 1.57c.255 0 .513.102.708.297l.707.707.707-.707a1 1 0 1 1 1.414 1.414l-.707.707.707.707a1 1 0 1 1-1.414 1.414L12 13.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707-.707-.707a1.004 1.004 0 0 1 .707-1.71m0 0"
      className="prefix__error"
    />
    <path
      fill=""
      fillOpacity={0.35}
      d="M7 0c-.555 0-1 .445-1 1H4C2.355 1 1 2.355 1 4v9c0 1.645 1.355 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1h1v1c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V3h1c.57 0 1 .43 1 1v2c0 .55.45 1 1 1s1-.45 1-1V4c0-1.645-1.355-3-3-3h-2c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(TaskPastDue)
export default ForwardRef