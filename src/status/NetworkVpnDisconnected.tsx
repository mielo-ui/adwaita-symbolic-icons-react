import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkVpnDisconnected = (
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
    <g fill="">
      <path d="M5 3c0 .55.45 1 1 1s1-.45 1-1c0-1.352 2-1.371 2 0v1.969A.034.034 0 0 1 8.969 5H4.03A.034.034 0 0 0 4 5.031v5.938q.001.012.008.023A.1.1 0 0 0 4.03 11H6.97q.011.001.023.008A.1.1 0 0 1 7 11.03v1.442a.03.03 0 0 0 .008.02q.011.01.023.01H8.97a.034.034 0 0 0 .031-.03V11.03c0-.015.016-.031.031-.031h2.938a.034.034 0 0 0 .031-.031V5.03A.034.034 0 0 0 11.969 5h-.938A.034.034 0 0 1 11 4.969V3c0-4-6-4-6 0m0 0" />
      <path d="M7.996 16.012a2 2 0 0 1-1.715-.973H2.996c-.55 0-1-.45-1-1s.45-1 1-1h3.25A2 2 0 0 1 7.996 12c.73.004 1.402.398 1.754 1.04h3.258a1 1 0 1 1 0 2H9.715a2.01 2.01 0 0 1-1.719.972m0-1a1.007 1.007 0 1 0 .002-2.014 1.007 1.007 0 0 0-.002 2.014m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkVpnDisconnected)
export default ForwardRef