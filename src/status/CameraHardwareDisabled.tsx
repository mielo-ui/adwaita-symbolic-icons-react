import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CameraHardwareDisabled = (
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
      fillOpacity={0.349}
      d="M6.5 0a1 1 0 0 0-.707.293L4.086 2H3C1.355 2 0 3.355 0 5h2c0-.57.43-1 1-1h1.5a1 1 0 0 0 .707-.293L6.914 2h2.172l1.707 1.707A1 1 0 0 0 11.5 4H13c.57 0 1 .43 1 1h2c0-1.645-1.355-3-3-3h-1.086L10.207.293A1 1 0 0 0 9.5 0zM8 4c-1.008 0-1.93.379-2.637 1h5.274A3.98 3.98 0 0 0 8 4m-8 7v1c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3v-1h-2v1c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1v-1zm5.363 0c.707.621 1.63 1 2.637 1s1.93-.379 2.637-1zm0 0"
    />
    <path fill="currentColor" d="M0 6h16v4H0zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(CameraHardwareDisabled)
export default ForwardRef