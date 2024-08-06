import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularConnected = (
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
      d="M1.957 2.023a.5.5 0 0 0-.344.153l-.238.25C.441 3.395-.023 4.699-.023 6S.44 8.605 1.375 9.574l.238.25a.495.495 0 1 0 .715-.687l-.234-.25c-1.469-1.532-1.469-4.239 0-5.774l.234-.25a.495.495 0 0 0-.371-.84m12.04 0a.5.5 0 0 0-.356.137.5.5 0 0 0-.016.703l.238.25c1.469 1.535 1.469 4.242 0 5.774l-.238.25a.5.5 0 0 0 .016.703c.199.187.511.183.703-.016l.238-.246c.93-.973 1.395-2.277 1.395-3.578s-.465-2.602-1.395-3.574l-.238-.25a.5.5 0 0 0-.348-.153M3.456 3.516a.5.5 0 0 0-.312.129l-.274.25c-.613.554-.906 1.343-.902 2.125.008.777.312 1.55.902 2.085l.274.25c.203.188.52.172.703-.03s.172-.52-.032-.704l-.273-.246c-.7-.637-.746-2.07 0-2.75l.273-.246a.499.499 0 0 0-.359-.863m8.992 0a.5.5 0 0 0-.344.16.5.5 0 0 0 .036.703l.273.246c.742.68.695 2.113 0 2.75l-.273.246a.5.5 0 0 0-.036.703.5.5 0 0 0 .708.031l.269-.25c.59-.535.895-1.308.902-2.085.008-.782-.289-1.57-.902-2.125l-.27-.25a.5.5 0 0 0-.363-.13M4.75 5a.75.75 0 0 0-.586 1.219L7 9.762V16h2V9.762l2.836-3.543A.75.75 0 0 0 11.25 5zm1.563 1.5h3.375L8 8.613zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularConnected)
export default ForwardRef