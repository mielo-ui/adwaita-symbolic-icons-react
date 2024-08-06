import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BluetoothDisabled = (
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
      d="M7.957 0A1.006 1.006 0 0 0 7 1v4.938L1.531.468.47 1.532l14 14 1.062-1.062-2.605-2.606a.99.99 0 0 0-.27-1.113L9.52 8l3.136-2.75c.219-.187.344-.46.344-.75s-.125-.562-.344-.75l-4-3.5A1 1 0 0 0 7.957 0M9 3.203 10.48 4.5 9 5.797zm-3.61 5.25L3.345 10.25a.993.993 0 0 0-.094 1.406.993.993 0 0 0 1.406.094L6.81 9.871zM7 10.063V15c0 .39.23.746.586.91.36.16.777.102 1.07-.16l2.153-1.879-1.414-1.414-.395.34v-.735zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BluetoothDisabled)
export default ForwardRef