import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessDisabled = (
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
      d="M1.531.469.47 1.53l14 14 1.062-1.062L9.34 8.277c.547.176 1.043.47 1.422.887l.5.543c.175.2.425.316.691.328a1 1 0 0 0 .723-.258 1 1 0 0 0 .063-1.414l-.5-.547C11.116 6.582 9.534 5.988 7.968 6a7 7 0 0 0-.84.066L5.457 4.395c2.86-.84 6.184-.223 8.352 1.851l.5.477a.999.999 0 1 0 1.383-1.441l-.497-.481C13.238 2.926 10.617 1.992 8 1.992c-1.41 0-2.82.274-4.125.82zm-.23 3.894a9 9 0 0 0-.496.438l-.496.48A.999.999 0 1 0 1.69 6.723l.5-.477c.172-.164.348-.316.536-.46zM4.27 7.328c-.18.149-.348.313-.508.484l-.5.551A.98.98 0 0 0 3 9.082c.012.266.129.516.324.695.2.18.457.274.723.258a.98.98 0 0 0 .691-.328l.5-.547a3 3 0 0 1 .461-.402zM7.137 10.2A2 2 0 1 0 9.8 12.863zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessDisabled)
export default ForwardRef