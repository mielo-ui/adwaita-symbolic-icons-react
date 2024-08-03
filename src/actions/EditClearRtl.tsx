import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditClearRtl = (
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
      d="M9 2c.832 0 1.559.344 2.293.781s1.465 1.004 2.129 1.598c.66.598 1.254 1.223 1.707 1.797a6.5 6.5 0 0 1 .57.836c.153.277.301.531.301.988s-.148.71-.3.984c-.153.278-.345.551-.571.836a14.7 14.7 0 0 1-1.707 1.797c-.664.598-1.395 1.164-2.129 1.602S9.832 14 9 14H3c-1.645 0-3-1.355-3-3V5c0-1.645 1.355-3 3-3zM8 5a1 1 0 0 0-.707.293L6 6.586 4.707 5.293a1 1 0 1 0-1.414 1.414L4.586 8 3.293 9.293a1 1 0 1 0 1.414 1.414L6 9.414l1.293 1.293a1 1 0 1 0 1.414-1.414L7.414 8l1.293-1.293A1 1 0 0 0 8 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditClearRtl)
export default ForwardRef