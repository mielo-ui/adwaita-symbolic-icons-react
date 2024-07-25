import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WindowMinimize = (
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
    <path fill="" d="M4 10.008h8v1.988H4zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(WindowMinimize)
export default ForwardRef