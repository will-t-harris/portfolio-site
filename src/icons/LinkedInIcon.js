import React from "react"
import PropTypes from "prop-types"

export default function LinkedInIcon({ twClasses }) {
  return (
    <a
      href="https://www.linkedin.com/in/will-t-harris/"
      aria-label="Link to Will Harris' LinkedIn Profile"
    >
      <svg
        className={`h-6 w-6 fill-current text-primary ${twClasses}`}
        viewBox="0 0 24 24"
        role="img"
        ariaLabel="[title]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Icon linking to Will Harris' LinkedIn profile.</title>
        <path d="M4.924 21H.364V6.98h4.56V21zM2.641 5.067C1.183 5.067 0 3.914 0 2.522c0-.669.278-1.31.774-1.783A2.707 2.707 0 012.64 0C3.342 0 4.014.266 4.51.74c.496.473.774 1.114.774 1.783 0 1.392-1.184 2.545-2.642 2.545zM21.995 21h-4.551v-6.825c0-1.627-.034-3.713-2.371-3.713-2.372 0-2.735 1.768-2.735 3.596V21H7.782V6.98h4.374v1.912h.064c.609-1.101 2.096-2.264 4.315-2.264 4.616 0 5.465 2.902 5.465 6.67V21h-.005z" />
      </svg>
    </a>
  )
}

LinkedInIcon.propTypes = {
  twClasses: PropTypes.string,
}
