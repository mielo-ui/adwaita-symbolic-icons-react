import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatIndentLess = (
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
      d="M15 1v2H1V1zm0 4v2H7V5zM3.707 5v.008A1 1 0 0 0 3 5.293l-2 2a1 1 0 0 0 0 1.414l2 2c.188.184.441.29.707.29V11h1V5zM15 9v2H7V9zm-3 4v2H1v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatIndentLess)
export default ForwardRef