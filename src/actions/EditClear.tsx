import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditClear = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7 2c-.832 0-1.559.344-2.293.781S3.242 3.785 2.578 4.38A15 15 0 0 0 .871 6.176a6.5 6.5 0 0 0-.57.836C.148 7.289 0 7.543 0 8s.148.71.3.984c.153.278.345.551.571.836a14.7 14.7 0 0 0 1.707 1.797c.664.598 1.395 1.164 2.129 1.602S6.168 14 7 14h6c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3zm1 3a1 1 0 0 1 .707.293L10 6.586l1.293-1.293a1 1 0 1 1 1.414 1.414L11.414 8l1.293 1.293a1 1 0 1 1-1.414 1.414L10 9.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L8.586 8 7.293 6.707A1 1 0 0 1 8 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditClear)
export default ForwardRef