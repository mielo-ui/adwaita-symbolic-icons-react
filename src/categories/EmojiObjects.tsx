import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiObjects = (
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
    <g fill="currentColor">
      <path d="M7.996 0C5.164 0 2.707 2 2.125 4.777 1.598 7.313 2.816 9.813 5 11.105l.004.899c0 .55.445.996 1 .996h4c.55 0 .996-.445 1-.996v-.902c2.184-1.293 3.398-3.797 2.871-6.329A6.014 6.014 0 0 0 8 0zm0 2a3.99 3.99 0 0 1 3.918 3.184 3.99 3.99 0 0 1-2.312 4.484.99.99 0 0 0-.598.914V11H7v-.418a.99.99 0 0 0-.602-.914 4 4 0 0 1-2.316-4.484A3.99 3.99 0 0 1 7.996 2M6 14v1a1 1 0 0 0 1 1h2c.555 0 1-.445 1-1v-1zm0 0" />
      <path
        fillOpacity={0.349}
        d="M6.648 6.145a.505.505 0 0 0 0 .71l1 1a.507.507 0 0 0 .707 0l1-1a.51.51 0 0 0 0-.71.507.507 0 0 0-.707 0L8 6.793l-.645-.648a.507.507 0 0 0-.707 0m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EmojiObjects)
export default ForwardRef