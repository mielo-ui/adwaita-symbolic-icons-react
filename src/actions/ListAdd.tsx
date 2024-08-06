import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ListAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M7 1v6H1v2h6v6h2V9h6V7H9V1zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(ListAdd)
export default ForwardRef