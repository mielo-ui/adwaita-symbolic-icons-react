import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Thunderbolt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.547 0 4.5 8h3.715L6.41 11.613 5.398 10.41 5.047 16l4.332-3.586-1.672-.172L12.047 6H8.352l3.195-6zM5.98 1.305C3.105 2.172 1 4.852 1 8.004a7 7 0 0 0 3.18 5.855l.152-2.449A5 5 0 0 1 3 8.004c0-1.617.758-3.043 1.938-3.957zm5.63.703-.938 1.765c.515.325.969.739 1.332 1.227h.043c.371 0 .715.207.887.535.171.332.144.73-.067 1.035l-.05.078c.117.43.183.883.183 1.356a4.98 4.98 0 0 1-2.637 4.41 1 1 0 0 1-.347.77L7.824 15c.059 0 .117.004.176.004 3.855 0 7-3.145 7-7a7 7 0 0 0-3.39-5.992zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Thunderbolt)
export default ForwardRef