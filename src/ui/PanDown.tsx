import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PanDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="" d="M13.996 5 8 11 1.996 5zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(PanDown)
export default ForwardRef