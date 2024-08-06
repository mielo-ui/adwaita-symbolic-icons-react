import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaTape = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 2C1.355 2 0 3.355 0 5v6c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3zm0 2h10c.57 0 1 .43 1 1v6c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V5c0-.57.43-1 1-1m2 2c-1.098 0-2 .902-2 2s.902 2 2 2h6c1.098 0 2-.902 2-2s-.902-2-2-2-2 .902-2 2c0 .363.102.707.273 1H6.73c.168-.293.27-.637.27-1 0-1.098-.902-2-2-2m0 1c.559 0 1 .441 1 1s-.441 1-1 1-1-.441-1-1 .441-1 1-1m6 0c.559 0 1 .441 1 1s-.441 1-1 1-1-.441-1-1 .441-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaTape)
export default ForwardRef