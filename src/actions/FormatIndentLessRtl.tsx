import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatIndentLessRtl = (
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
    <path
      fill=""
      d="M1 1v2h14V1zm0 4v2h8V5zm11.293 0v.008a1 1 0 0 1 .707.285l2 2a1 1 0 0 1 0 1.414l-2 2c-.187.184-.441.29-.707.29V11h-1V5zM1 9v2h8V9zm3 4v2h11v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatIndentLessRtl)
export default ForwardRef