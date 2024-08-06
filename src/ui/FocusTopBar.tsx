import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FocusTopBar = (
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
    <path
      fill="currentColor"
      d="M2.063 2A2.08 2.08 0 0 0 0 4.059v7.89h1.04v-1.015H2V6.059C2 6.008 2.012 6 2.063 6h11.902c.05 0 .058.012.058.059v7.98h.934l.047-1.059h1.02V4.06A2.077 2.077 0 0 0 13.963 2zm7.949 2.074h3.976V5h-3.976zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FocusTopBar)
export default ForwardRef