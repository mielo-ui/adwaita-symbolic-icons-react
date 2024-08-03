import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextRich = (
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
      d="M6.54 1 3 13H2v1h4v-1h-.957l.895-3h3.125l.89 3H9v1h5v-1h-.66L9.5 1zm.96 3.79L8.762 9H6.234zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextRich)
export default ForwardRef