import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FocusLegacySystray = (
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
      d="M7.934 2 0 2.012-.004 13.98h9.969l.027-9.917A2.075 2.075 0 0 0 7.934 2m2.05.031s1.032.485 1.032 1.969v10H12V4c0-1.25-2.016-1.969-2.016-1.969m1.985 0S13 2.516 13 4v10h1V4c0-1.25-2.031-1.969-2.031-1.969M3.016 5h1c.308 0 .55.09.75.281L7.422 8l-2.656 2.719c-.2.191-.442.281-.75.281h-1v-1c0-.258.129-.527.312-.719L4.61 8 3.33 6.719c-.184-.192-.313-.461-.313-.719zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FocusLegacySystray)
export default ForwardRef