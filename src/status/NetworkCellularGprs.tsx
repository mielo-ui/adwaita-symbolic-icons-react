import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularGprs = (
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
      d="M3 0C1.34 0 0 1.34 0 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm3 3h4c.832 0 1.523.563 1.77 1.05.246.493.23.95.23.95v1h-2V5H6v6h4V9H7.938V7H12v4s.016.457-.23.95c-.247.488-.938 1.05-1.77 1.05H6s-.457.016-.95-.23C4.563 12.523 4 11.832 4 11V5s-.016-.457.23-.95C4.477 3.563 5.168 3 6 3m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularGprs)
export default ForwardRef