import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessSignalNone = (
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
      d="M8 1.992c-2.617 0-5.238.934-7.195 2.809l-.496.48A.999.999 0 1 0 1.69 6.723l.5-.477c3.086-2.957 8.532-2.957 11.618 0l.5.477a.999.999 0 1 0 1.383-1.441l-.497-.481C13.238 2.926 10.617 1.992 8 1.992M7.969 6c-1.57.012-3.13.629-4.207 1.813l-.5.55a.997.997 0 1 0 1.476 1.344l.5-.547c1.278-1.402 4.16-1.496 5.524 0l.5.547a1 1 0 0 0 1.414.07 1 1 0 0 0 .062-1.414l-.5-.55C11.113 6.582 9.535 5.988 7.968 6M8 10a2 2 0 1 0-.001 4A2 2 0 0 0 8 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessSignalNone)
export default ForwardRef