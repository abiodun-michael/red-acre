import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
      fill="#F7931A"
    />
    <path
      d="M17.392 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.04-.245l.522-2.087-1.296-.323-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.006-1.788-.447-.345 1.385s.962.22.942.234c.525.131.62.478.603.754l-.604 2.427c.036.008.082.022.135.042l-.137-.034-.848 3.4c-.064.159-.227.398-.595.307.014.019-.942-.235-.942-.235l-.643 1.484 1.687.42c.314.08.621.162.924.239l-.537 2.154 1.296.323.53-2.13c.355.095.698.183 1.034.267l-.53 2.121 1.297.323.536-2.15c2.21.419 3.873.25 4.573-1.75.564-1.609-.028-2.538-1.191-3.143.847-.196 1.485-.753 1.655-1.904Zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332Zm.402-4.176c-.366 1.464-2.622.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent