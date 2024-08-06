import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemLogOutRtl = (
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
      <path d="M3 5v.004c-.266 0-.52.105-.707.289l-2 2a1 1 0 0 0 0 1.414l2 2c.187.184.441.29.707.285V11h1V9h5c.55 0 1-.45 1-1s-.45-1-1-1H4V5zm0 0" />
      <path d="M6.82 1.098a7.03 7.03 0 0 1 6.547 2.398 7.02 7.02 0 0 1 0 9 7.01 7.01 0 0 1-8.863 1.563 1 1 0 0 1-.469-.606 1 1 0 0 1 1.469-1.125 4.985 4.985 0 0 0 6.328-1.117 4.996 4.996 0 0 0 0-6.43 4.984 4.984 0 0 0-6.328-1.113 1.002 1.002 0 0 1-1-1.734c.73-.422 1.516-.7 2.316-.836m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SystemLogOutRtl)
export default ForwardRef