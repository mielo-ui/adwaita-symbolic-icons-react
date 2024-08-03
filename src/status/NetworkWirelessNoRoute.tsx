import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessNoRoute = (
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
      d="M8 1.992c-2.617 0-5.238.934-7.195 2.809l-.496.48A.999.999 0 1 0 1.69 6.723l.5-.477a7.6 7.6 0 0 1 1.97-1.36 4 4 0 0 1 2.308-2.581 4.004 4.004 0 0 1 4.36.867 4 4 0 0 1 1.01 1.715 7.6 7.6 0 0 1 1.97 1.36l.5.476a.999.999 0 1 0 1.383-1.441l-.497-.481C13.238 2.926 10.617 1.992 8 1.992M4.707 7c-.344.23-.66.504-.945.813l-.5.55a.997.997 0 1 0 1.476 1.344l.5-.547A3 3 0 0 1 6 8.57V8c0-.387.223-.691.418-1zm7.055.355q-.03.09-.067.176c-.246.594-.648 1.063-1.129 1.438q.101.091.196.195l.5.543a1 1 0 0 0 1.414.07 1 1 0 0 0 .062-1.414l-.5-.547a5 5 0 0 0-.476-.46m0 0"
    />
    <path
      fill="currentColor"
      d="M8.152 3.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5 6h2a1 1 0 1 1 1 1c-.55 0-1 .45-1 1v2h2V8.82a3 3 0 0 0 1.77-1.672 3 3 0 0 0-.649-3.27 3 3 0 0 0-1.969-.87M8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessNoRoute)
export default ForwardRef