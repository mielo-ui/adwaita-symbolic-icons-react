import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AddressBookNew = (
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
      d="M5 0C3.707 0 2.594.84 2.176 2H1v2h1v1H1v2h1v1H1v2h1v1H1v2h1.176c.418 1.16 1.531 2 2.824 2h1c.55 0 1-.45 1-1s-.45-1-1-1H5c-.555 0-1-.445-1-1V3c0-.555.445-1 1-1h7c.57 0 .887.441 1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-1.645-1.355-3-3-3zm3.523 4q-.116 0-.238.012-.324.018-.64.101a3.51 3.51 0 0 0-2.618 3.832A3.51 3.51 0 0 0 7 10.668V10h1.332A2.49 2.49 0 0 1 6.02 7.82a2.496 2.496 0 0 1 1.867-2.738 2.8 2.8 0 0 1 1.808.164c.528.242.89.629 1.004 1.059.063.23.082.472.07.695h1.008a3.4 3.4 0 0 0-.109-.953c-.211-.785-.82-1.371-1.555-1.711A3.8 3.8 0 0 0 8.523 4M8.5 6.008c-.824 0-1.5.676-1.5 1.5 0 .82.676 1.5 1.5 1.5.176 0 .344-.04.5-.094v.043l.45.047q.285.028.55-.004V7.508c0-.824-.676-1.5-1.5-1.5m0 1c.281 0 .5.215.5.5 0 .281-.219.5-.5.5s-.5-.219-.5-.5c0-.285.219-.5.5-.5M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zM9.844 9.781s-.606.192-1.188.219h1.258zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AddressBookNew)
export default ForwardRef