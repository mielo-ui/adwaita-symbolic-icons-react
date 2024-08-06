import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BluetoothDisconnected = (
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
      d="M7.957 0A1.006 1.006 0 0 0 7 1v5.297L4.656 4.25a.996.996 0 0 0-1.406.09 1 1 0 0 0 .09 1.41L5.91 8l-2.57 2.246a1 1 0 0 0-.09 1.41.993.993 0 0 0 1.406.094L7 9.703V15c0 .39.23.746.586.91.36.16.777.102 1.07-.16l.387-.336a2.01 2.01 0 0 1 .539-1.828l.418-.418v-.336l-.418-.418a1 1 0 0 1-.062-.07l-.52.453v-2.594l.125.11c.094-.266.246-.516.457-.727.3-.3.691-.496 1.105-.563L9.52 8l3.136-2.75c.219-.187.344-.46.344-.75s-.125-.562-.344-.75l-4-3.5A1 1 0 0 0 7.957 0M9 3.203 10.48 4.5 9 5.797zm0 0"
    />
    <path
      fill="currentColor"
      d="M11 10a1 1 0 0 0-.707 1.707L11.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L13 14.414l1.293 1.293a1 1 0 1 0 1.414-1.414L14.414 13l1.293-1.293a1 1 0 1 0-1.414-1.414L13 11.586l-1.293-1.293A1 1 0 0 0 11 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BluetoothDisconnected)
export default ForwardRef