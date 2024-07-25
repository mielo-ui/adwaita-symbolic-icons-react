import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FocusWindows = (
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
      d="M8.02 1.008c-.532 0-1.032.422-1.032 1V9.02H15V1.977c0-.579-.523-.97-1.023-.97zm.968 3.015H13V7.02H8.988zM2.035 7.008c-.531 0-1.031.422-1.031 1v7.012h8.012v-3.985h-2v1.985H3.004v-2.997H5.02V7.008zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FocusWindows)
export default ForwardRef