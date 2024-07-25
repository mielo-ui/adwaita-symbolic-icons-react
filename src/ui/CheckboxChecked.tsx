import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CheckboxChecked = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M3 0C1.355 0 0 1.355 0 3v10c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h10c.422 0 .766.234.918.586l-.668.758-6.297 7.195-2.246-2.246a1 1 0 0 0-1.414 0c-.39.39-.39 1.027 0 1.418l3 3c.41.406 1.078.387 1.46-.05L14 5.522V13c0 .57-.43 1-1 1H3c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CheckboxChecked)
export default ForwardRef