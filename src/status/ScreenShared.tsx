import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ScreenShared = (
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
      d="M4 1C2.355 1 1 2.355 1 4v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.562.438-1 1-1h9c.563 0 1 .438 1 1v7c0 .563-.437 1-1 1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zM1 7c-.55 0-1 .45-1 1s.45 1 1 1c2.773 0 5 2.227 5 5 0 .55.45 1 1 1s1-.45 1-1c0-3.855-3.145-7-7-7m0 3c-.55 0-1 .45-1 1s.45 1 1 1c1.117 0 2 .883 2 2 0 .55.45 1 1 1s1-.45 1-1c0-2.2-1.8-4-4-4m0 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
    <path
      fill=""
      fillOpacity={0.349}
      d="M4.5 4c-.277 0-.5.223-.5.5v1.738c0 .262.145.41.36.512a8.08 8.08 0 0 1 3.933 3.984c.086.36.437.266.437.266h3.77c.277 0 .5-.223.5-.5v-6c0-.277-.223-.5-.5-.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ScreenShared)
export default ForwardRef