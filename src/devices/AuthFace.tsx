import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthFace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 1C1.355 1 0 2.355 0 4v2h1s1 0 1-1V4c0-.57.43-1 1-1h1s1 0 1-1V1zm8 0v1c0 1 1 1 1 1h1c.57 0 1 .43 1 1v1c0 1 1 1 1 1h1V4c0-1.645-1.355-3-3-3zM6 5.02a1 1 0 1 0-.001 1.998A1 1 0 0 0 6 5.02m4 0a1 1 0 1 0-.001 1.998A1 1 0 0 0 10 5.02M4.426 9.008a.5.5 0 0 0-.375.715S5.234 12 8 12s3.95-2.277 3.95-2.277a.5.5 0 0 0-.9-.446S10.235 11 8 11 4.95 9.277 4.95 9.277a.495.495 0 0 0-.524-.27M0 10v2c0 1.645 1.355 3 3 3h2v-2H3c-.57 0-1-.43-1-1v-1c0-1-1-1-1-1zm15 0c-1 0-1 1-1 1v1c0 .57-.43 1-1 1h-2v2h2c1.645 0 3-1.355 3-3v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AuthFace)
export default ForwardRef