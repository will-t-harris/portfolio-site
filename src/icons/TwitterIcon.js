import React from "react"
import PropTypes from "prop-types"

export default function TwitterIcon({ twClasses }) {
  return (
    <a
      href="https://twitter.com/will__tweets"
      aria-label="Link to Will Harris' Twitter Profile"
    >
      <svg
        className={`h-6 w-6 fill-current text-primary ${twClasses}`}
        viewBox="0 0 24 24"
        role="img"
        ariaLabel="[title]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Icon linking to Will Harris' Twitter profile.</title>
        <path d="M19.739 8.112c.014.213.014.426.014.64 0 6.502-4.537 13.994-12.83 13.994-2.554 0-4.927-.807-6.923-2.208.363.046.712.06 1.089.06 2.108 0 4.048-.776 5.598-2.1-1.983-.046-3.644-1.463-4.216-3.412.279.046.558.076.851.076.405 0 .81-.06 1.187-.167-2.066-.457-3.616-2.437-3.616-4.827v-.061c.6.365 1.299.594 2.038.624C1.717 9.848.921 8.34.921 6.634c0-.913.224-1.75.614-2.482 2.22 2.985 5.556 4.934 9.297 5.147a6.037 6.037 0 01-.111-1.126c0-2.711 2.01-4.92 4.509-4.92 1.298 0 2.47.595 3.294 1.554a8.441 8.441 0 002.862-1.188c-.335 1.142-1.047 2.102-1.982 2.71A8.453 8.453 0 0022 5.57a10.22 10.22 0 01-2.261 2.543z" />
      </svg>
    </a>
  )
}

TwitterIcon.propTypes = {
  twClasses: PropTypes.string,
}
