import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Bluetooth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.586.09C7.23.254 7 .61 7 1v5.297L4.656 4.25a.996.996 0 1 0-1.312 1.5L5.91 8l-2.566 2.25a.993.993 0 0 0-.094 1.406.993.993 0 0 0 1.406.094L7 9.703V15c0 .39.23.746.586.91.36.16.777.102 1.07-.16l4-3.5c.219-.187.344-.46.344-.75s-.125-.562-.344-.75L9.516 8l3.14-2.75c.219-.187.344-.46.344-.75s-.125-.562-.344-.75l-4-3.5a.99.99 0 0 0-1.07-.16M9 3.203 10.484 4.5 9 5.797zm0 7 1.484 1.297L9 12.797zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Bluetooth)
export default ForwardRef