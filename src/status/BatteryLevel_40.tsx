import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLevel_40 = (
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
      d="M7 0C6 0 6 1 6 1v1H4.992s-.71-.016-1.449.355c-.738.372-1.55 1.313-1.55 2.645v8s-.016.707.355 1.45c.367.738 1.308 1.55 2.644 1.55h6s.707.016 1.445-.355c.739-.372 1.555-1.313 1.555-2.645V5c0-1.332-.816-2.273-1.555-2.645C11.7 1.985 10.993 2 10.993 2H10l-.012-1c-.008-1-1-1-1-1zm3.992 4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6c-.554 0-1-.445-1-1V5c0-.555.446-1 1-1zM5 10v3h6v-3zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BatteryLevel_40)
export default ForwardRef