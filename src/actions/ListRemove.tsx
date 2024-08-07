import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ListRemove = (
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
    <path fill="currentColor" d="M1 7h14v2H1zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(ListRemove)
export default ForwardRef