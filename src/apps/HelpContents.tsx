import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const HelpContents = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <g fill="#474747">
      <path
        d="m3.025 0 .034.002a2 2 0 0 0-.159 0h-.02l-.024.002A1.98 1.98 0 0 0 1 2.045v11.914A1.98 1.98 0 0 0 3.041 16h9.918A1.98 1.98 0 0 0 15 13.96V5a2 2 0 0 0-.617-1.422L11.426.62A2 2 0 0 0 10.004 0h-.008zm-.017 2c-.002-.002.005 0 .002 0h6.965c-.01 0 .014.011.007.004l.008.008 2.998 3.002.008.006c-.007-.007.004.019.004.01v8.959c-.001-.08-.093.01-.012.012H3.012c.081-.001-.01-.092-.012-.012V2.011c.001.055.027.005.008-.01z"
        color="#bebebe"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",

          isolation: "auto",
          mixBlendMode: "normal",
          marker: "none",
        }}
      />
      <path
        d="M8 4.877c-2.24 0-4.06 1.82-4.06 4.06A4.063 4.063 0 0 0 8 12.998c2.24 0 4.06-1.82 4.06-4.06A4.063 4.063 0 0 0 8 4.877m0 1a3.043 3.043 0 0 1 3.06 3.06A3.043 3.043 0 0 1 8 11.999a3.043 3.043 0 0 1-3.06-3.06A3.043 3.043 0 0 1 8 5.877"
        color="#bebebe"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",

          isolation: "auto",
          mixBlendMode: "normal",
          marker: "none",
        }}
      />
      <path
        d="M8 6.938c-1.1 0-2 .9-2 2 0 1.099.9 2 2 2s2-.901 2-2c0-1.1-.9-2-2-2m0 1c.563 0 1 .437 1 1s-.437 1-1 1-1-.438-1-1 .437-1 1-1"
        color="#bebebe"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",

          isolation: "auto",
          mixBlendMode: "normal",
          marker: "none",
        }}
      />
      <path d="M6.331 5.6a3 3 0 0 0-1.669 1.684l1.908.954a1.3 1.3 0 0 1 .699-.731zm3.338 0L8.73 7.507c.322.136.571.405.7.731l1.907-.954A3 3 0 0 0 9.668 5.6zm-3.1 4.069-1.907.953c.309.757.91 1.348 1.67 1.653l.953-1.907a1.32 1.32 0 0 1-.715-.7zm2.861 0a1.32 1.32 0 0 1-.715.699l.954 1.907a3 3 0 0 0 1.669-1.653z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(HelpContents)
export default ForwardRef