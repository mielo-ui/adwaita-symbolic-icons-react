import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const LocationServicesActive = (
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
      d="M8 0C4.688 0 2 2.688 2 6c.008.71.137 1.414.387 2.078l-.016-.004c.637 1.988 3.781 5.082 5.625 6.93H8V15c1.508-1.508 3.879-3.926 5.047-5.754.262-.414.469-.809.586-1.172l-.02.004c.25-.664.383-1.367.387-2.078 0-3.312-2.684-6-6-6m0 3.691c1.273 0 2.309 1.036 2.309 2.309S9.273 8.309 8 8.309A2.31 2.31 0 0 1 8 3.69m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(LocationServicesActive)
export default ForwardRef