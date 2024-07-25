import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkVpn = (
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
      <path d="M7.918 1A2.91 2.91 0 0 0 5 3.918V5a1.014 1.014 0 0 0-1 1.031V9.97C4 10.539 4.46 11 5.031 11H7v1.875h2V11h1.969c.57 0 1.031-.46 1.031-1.031V6.03A1.014 1.014 0 0 0 11 5V3.918A2.91 2.91 0 0 0 8.082 1zM8 3c.555 0 1 .445 1 1v1H7V4c0-.555.445-1 1-1m0 0" />
      <path d="M7.996 15.95a2 2 0 0 1-1.715-.973H2.996c-.55 0-1-.45-1-1 0-.551.45-1 1-1h3.25a2 2 0 0 1 1.75-1.04c.73.004 1.402.399 1.754 1.04h3.258a1 1 0 1 1 0 2H9.715a2.01 2.01 0 0 1-1.719.972m0-1a1.007 1.007 0 1 0 .002-2.015 1.007 1.007 0 0 0-.002 2.014m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkVpn)
export default ForwardRef