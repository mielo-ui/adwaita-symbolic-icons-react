import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationsMultimedia = (
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
      d="M1.965 0S.996 1 .996 2v12c0 1.008-1 2-1 2h1s.422-.426.719-1h1c-.297.574-.719 1-.719 1h1s1-1.02 1-2v-2h1v-1h-1V6h8v1h3V2c0-1 .969-2 .969-2h-3s-.969 1-.969 2v3h-8V2c0-1 .969-2 .969-2zm.312 1h1c-.152.305-.28.652-.28 1h-1c0-.348.128-.695.28-1m11 0h1c-.152.305-.28.652-.28 1h-1c0-.348.128-.695.28-1M1.997 3h1v1h-1zm11 0h1v1h-1zm-11 2h1v1h-1zm11 0h1v1h-1zm-11 2h1v1h-1zm7 1v4.281a2 2 0 0 0-1-.281 2 2 0 1 0 2 2V9h4v3.281a2 2 0 0 0-1-.281 2 2 0 1 0 2 2V8zm-7 1h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationsMultimedia)
export default ForwardRef