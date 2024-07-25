import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WindowNew = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 0C1.355 0 0 1.355 0 3v8c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.57 0-1-.43-1-1V5c0-.555.445-1 1-1h10c.555 0 1 .445 1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-1.645-1.355-3-3-3zm0 0"
    />
    <path fill="" d="M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(WindowNew)
export default ForwardRef