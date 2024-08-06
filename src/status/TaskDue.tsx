import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const TaskDue = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7 0c-.555 0-1 .445-1 1H4C2.355 1 1 2.355 1 4v9c0 1.645 1.355 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1h1v1c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V3h1c.57 0 1 .43 1 1v2c0 .55.45 1 1 1s1-.45 1-1V4c0-1.645-1.355-3-3-3h-2c0-.555-.445-1-1-1zm0 0"
    />
    <path
      fill="currentColor"
      d="M8.875 8A.864.864 0 0 0 8 8.875v6.25c0 .492.383.875.875.875h6.25a.864.864 0 0 0 .875-.875v-6.25A.864.864 0 0 0 15.125 8zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="warning"
    />
  </svg>
)
const ForwardRef = forwardRef(TaskDue)
export default ForwardRef