import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 0v6.063A2.495 2.495 0 1 0 5.5 11a2.497 2.497 0 0 0 2.492-2.47H8V4h3L8 0zm7 0c-.55 0-1 .45-1 1v14h2v-3h2V9h-2V8h2V5h-2V2h2V0zM3 2C1.668 2 .727 2.813.355 3.55-.015 4.294 0 5 0 5v6s-.016.707.355 1.45C.723 13.187 1.668 14 3 14h8v-2H3c-.668 0-.727-.187-.855-.45C2.015 11.294 2 11 2 11V5s.016-.293.145-.55C2.273 4.187 2.332 4 3 4h2V2zm11 4h1v1h-1zm0 4h1v1h-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(AudioCard)
export default ForwardRef