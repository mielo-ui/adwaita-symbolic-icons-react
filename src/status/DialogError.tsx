import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DialogError = (
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
      d="M8 1C4.129 1 1 4.129 1 8s3.129 7 7 7 7-3.129 7-7-3.129-7-7-7M4 7h8v2H4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DialogError)
export default ForwardRef