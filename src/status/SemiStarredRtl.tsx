import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SemiStarredRtl = (
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
      fillOpacity={0.349}
      d="M8-.105v4.21l-.676 2.07c-.133.41-.515.688-.945.692l-2.254.008 1.703 1.203c.363.258.512.723.367 1.145l-.765 2.191 1.96-1.3q.306-.088.61-.169v2.227l-.047-.031-3.898 2.586c-.801.527-1.813-.258-1.496-1.164l1.5-4.29L.418 6.7C-.375 6.137.02 4.891.992 4.887l4.656-.016L7.051.582c.133-.406.515-.684.949-.687m0 0"
    />
    <path
      fill="currentColor"
      d="M8-.105a1 1 0 0 1 .95.683l1.448 4.34 4.594-.016c.98-.007 1.383 1.254.578 1.817l-3.625 2.558 1.5 4.286c.313.902-.691 1.69-1.488 1.171L8 12.172zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SemiStarredRtl)
export default ForwardRef