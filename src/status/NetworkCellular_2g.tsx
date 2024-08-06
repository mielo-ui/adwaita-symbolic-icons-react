import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellular_2g = (
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
      d="M3 0C1.34 0 0 1.34 0 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm1 3h1s.457-.016.95.23C6.437 3.477 7 4.168 7 5v2c0 .215-.07.426-.2.602L4.25 11H7v2H2v-2c0-.215.07-.426.2-.602L5 6.668V5H4v2H2V5c0-.832.563-1.523 1.05-1.77C3.544 2.984 4 3 4 3m6 0h2c.832 0 1.523.563 1.77 1.05.246.493.23.95.23.95v1h-2V5h-2v6h2V9h-1V7h3v4s.016.457-.23.95c-.247.488-.938 1.05-1.77 1.05h-2s-.457.016-.95-.23C8.563 12.523 8 11.832 8 11V5s-.016-.457.23-.95C8.477 3.563 9.168 3 10 3m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellular_2g)
export default ForwardRef