import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationRssXml = (
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
      d="M1.988 1.988V3c.008.547.453.984 1 .988q.006-.005.012-.004v.028A8.977 8.977 0 0 1 11.988 13a.99.99 0 0 0 1 .984h1V13h-.004q-.001-.004.004-.008C13.984 7.02 9.184 2.148 3.242 2.02A1 1 0 0 0 3 1.988v-.004zm0 4V7c.008.547.453.984 1 .988q.006-.005.012-.004V8a4.985 4.985 0 0 1 4.996 4.844 1.002 1.002 0 0 0 .988 1.145q.011-.006.016-.005v.004h.984V13H10c0-3.793-3.047-6.898-6.82-6.992 0-.004-.004-.004-.004-.004A1 1 0 0 0 3 5.988v-.004zm2 4a1.999 1.999 0 1 0-.002 3.998 1.999 1.999 0 0 0 .002-3.998m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationRssXml)
export default ForwardRef