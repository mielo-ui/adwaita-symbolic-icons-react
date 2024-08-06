import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemLogOut = (
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
      <path d="M13 5v.004c.266 0 .52.105.707.289l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-.707.285V11h-1V9H7c-.55 0-1-.45-1-1s.45-1 1-1h5V5zm0 0" />
      <path d="M9.18 1.098a7.03 7.03 0 0 0-6.547 2.398 7.02 7.02 0 0 0 0 9 7.01 7.01 0 0 0 8.863 1.563c.23-.133.399-.352.469-.606a1 1 0 0 0-1.469-1.125 4.985 4.985 0 0 1-6.328-1.117 4.996 4.996 0 0 1 0-6.43 4.984 4.984 0 0 1 6.328-1.113 1.002 1.002 0 0 0 1-1.734 7 7 0 0 0-2.316-.836m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SystemLogOut)
export default ForwardRef