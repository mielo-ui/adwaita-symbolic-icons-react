import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NotificationsDisabled = (
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
    <g fill="currentColor">
      <path d="M8 0a1.5 1.5 0 0 0-1.5 1.5q.001.11.02.223A5.01 5.01 0 0 0 3.44 4.488l1.606 1.606A2.995 2.995 0 0 1 8 3.5a3 3 0 0 1 3 3V11H9.953l2 2H13.5c.555 0 1-.445 1-1s-.445-1-1-1H13V6.594q-.001-.048.004-.094a5.01 5.01 0 0 0-3.52-4.777q.016-.112.02-.223a1.5 1.5 0 0 0-1.5-1.5zM3.027 6.2q-.016.149-.027.3V11h-.5c-.555 0-1 .445-1 1s.445 1 1 1h7.328l-2-2H5V8.172zM6 14c0 .715.383 1.375 1 1.73a1.99 1.99 0 0 0 2 0A1.99 1.99 0 0 0 10 14zm0 0" />
      <path d="M1.531.457.47 1.52l14 14 1.062-1.063zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NotificationsDisabled)
export default ForwardRef