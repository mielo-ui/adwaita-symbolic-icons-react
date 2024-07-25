import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatJustifyFill = (
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
    <path fill="" d="M1 1v2h14V1zm0 4v2h14V5zm0 4v2h14V9zm0 4v2h14v-2zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(FormatJustifyFill)
export default ForwardRef