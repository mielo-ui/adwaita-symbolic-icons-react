import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MailMarkImportant = (
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
      d="M3 0C1.355 0 0 1.355 0 3v6c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.57 0-1-.43-1-1V3.203l4.613 3.074a2.505 2.505 0 0 0 2.774 0L14 3.203V6c0 .55.45 1 1 1s1-.45 1-1V3c0-1.645-1.355-3-3-3zm.8 2h8.4L8.276 4.613a.495.495 0 0 1-.554 0zm0 0"
    />
    <path
      fill="#ff7800"
      d="M8.875 8A.864.864 0 0 0 8 8.875v6.25c0 .492.383.875.875.875h6.25a.864.864 0 0 0 .875-.875v-6.25A.864.864 0 0 0 15.125 8zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="prefix__warning"
    />
  </svg>
)
const ForwardRef = forwardRef(MailMarkImportant)
export default ForwardRef