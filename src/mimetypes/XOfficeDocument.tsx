import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const XOfficeDocument = (
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
      d="M5 1C3.355 1 2 2.355 2 4v9c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V5.5a1 1 0 0 0-.293-.707l-3.5-3.5A1 1 0 0 0 9.5 1zm0 2h4v1.5Q9 6 10.5 6H12v7c0 .57-.43 1-1 1H5c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m1.5 2C5.676 5 5 5.676 5 6.5S5.676 8 6.5 8 8 7.324 8 6.5 7.324 5 6.5 5m0 1c.281 0 .5.219.5.5s-.219.5-.5.5-.5-.219-.5-.5.219-.5.5-.5m2.484 1.988v1L11 9V8zM5 10v1h6v-1zm0 2v1h6v-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(XOfficeDocument)
export default ForwardRef