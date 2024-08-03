import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BluetoothHardwareDisabled = (
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
      fillOpacity={0.349}
      d="M7.957 0A1.006 1.006 0 0 0 7 1v4h2V3.203L10.48 4.5l-.57.5h2.953a.996.996 0 0 0-.207-1.25l-4-3.5A1 1 0 0 0 7.957 0M4.09 4.008A.98.98 0 0 0 3.012 5H5.52l-.864-.75a.95.95 0 0 0-.566-.242M3.012 11a.99.99 0 0 0 .238.656.993.993 0 0 0 1.406.094L5.52 11zM7 11v4c0 .39.23.746.586.91.36.16.777.102 1.07-.16l4-3.5a.996.996 0 0 0 .207-1.25H9.91l.57.5L9 12.797V11zm0 0"
    />
    <path fill="currentColor" d="M0 6h16v4H0zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(BluetoothHardwareDisabled)
export default ForwardRef