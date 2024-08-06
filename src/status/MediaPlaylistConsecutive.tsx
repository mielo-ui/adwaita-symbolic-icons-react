import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaylistConsecutive = (
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
      d="M12 1v2H0v2h12v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 13 1.008V1zm0 8v2H0v2h12v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 13 9.008V9zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaPlaylistConsecutive)
export default ForwardRef