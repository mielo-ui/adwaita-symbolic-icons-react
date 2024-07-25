import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AuthFingerprint = (
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
      d="M8.074 0a7 7 0 0 0-3.492.89 1 1 0 0 0-.383 1.36.997.997 0 0 0 1.36.387A5 5 0 0 1 13 7v1c0 .55.45 1 1 1s1-.45 1-1V7q.001-.031-.004-.055A7 7 0 0 0 11.54.961 6.97 6.97 0 0 0 8.07 0zM2.875 2.832a.997.997 0 0 0-.82.469A7 7 0 0 0 1 7v5.063c0 .55.45 1 1 1s1-.45 1-1V7c0-.934.262-1.852.754-2.645a.996.996 0 0 0-.879-1.523M8 3C5.8 3 4 4.8 4 7v1c0 .55.45 1 1 1s1-.45 1-1V7c0-1.117.883-2 2-2s2 .883 2 2v5s.008.441.176.941.5 1.149 1.117 1.766a1 1 0 1 0 1.414-1.414c-.383-.383-.55-.734-.633-.984S12 12 12 12V7c0-2.2-1.8-4-4-4m0 3c-.55 0-1 .45-1 1v5s0 .594.145 1.32c.144.727.414 1.653 1.148 2.387a1 1 0 1 0 1.414-1.414c-.266-.266-.496-.84-.602-1.363C9 12.406 9 12 9 12V7c0-.55-.45-1-1-1m-3 4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1m9 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AuthFingerprint)
export default ForwardRef