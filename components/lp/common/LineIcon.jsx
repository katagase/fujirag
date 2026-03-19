export function LineIcon({ name, className = "" }) {
  const commonProps = {
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.8,
    stroke: "currentColor",
    "aria-hidden": "true"
  };

  switch (name) {
    case "alert":
      return (
        <svg {...commonProps} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 3h.01" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.29 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3l-8.47-14.14a2 2 0 0 0-3.42 0Z"
          />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps} className={className}>
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-3.5-3.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 18h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4Zm0 0-4 3v-3"
          />
        </svg>
      );
    case "file":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 5 6v5c0 5 3.4 8.9 7 10 3.6-1.1 7-5 7-10V6l-7-3Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.7 1.7 3.3-3.4" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps} className={className}>
          <circle cx="9" cy="8" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 19a6 6 0 0 1 12 0M18 10a2.5 2.5 0 1 0 0-5" />
        </svg>
      );
    case "server":
      return (
        <svg {...commonProps} className={className}>
          <rect x="4" y="4" width="16" height="6" rx="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" />
          <path strokeLinecap="round" d="M8 7h.01M8 17h.01" />
        </svg>
      );
    case "link":
      return (
        <svg {...commonProps} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14 8 16a3 3 0 0 1-4-4l2-2a3 3 0 0 1 4 0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10 16 8a3 3 0 1 1 4 4l-2 2a3 3 0 0 1-4 0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 15 6-6" />
        </svg>
      );
    case "doc":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 3h6l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h4" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 4c2.5 0 4.5 2 4.5 4.5 0 4.3-3.8 7.8-8.5 8.4l-3.5.4.4-3.5C7.5 9.3 11 5.5 15.5 5.5"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 19-2 2M5 15l-2 2M14 10h.01" />
        </svg>
      );
    case "bell":
      return (
        <svg {...commonProps} className={className}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 17h12l-1.2-1.5a3 3 0 0 1-.8-2V10a4 4 0 1 0-8 0v3.5a3 3 0 0 1-.8 2L6 17Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 17a2 2 0 0 0 4 0" />
        </svg>
      );
    default:
      return null;
  }
}
