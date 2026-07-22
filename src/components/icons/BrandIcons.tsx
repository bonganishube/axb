type IconProps = {
  className?: string;
};

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.78-2.41 3.63v3.02h3.89c2.27-2.09 3.57-5.17 3.57-8.84z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.95-2.9l-3.89-3.02c-1.08.73-2.46 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.95H1.24v3.11C3.22 21.3 7.29 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.19 7.19 0 0 1 4.9 12c0-.8.14-1.57.37-2.29V6.6H1.24A11.96 11.96 0 0 0 0 12c0 1.93.46 3.76 1.24 5.4l4.03-3.11z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.6 4.58 1.78l3.44-3.44C17.94 1.19 15.23 0 12 0 7.29 0 3.22 2.7 1.24 6.6l4.03 3.11C6.22 6.88 8.87 4.77 12 4.77z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M12.02 5.5c-3.6 0-6.52 2.92-6.52 6.52 0 1.28.37 2.48 1.02 3.5l-1.08 3.98 4.08-1.07c.98.54 2.1.85 3.5.85 3.6 0 6.52-2.92 6.52-6.52.02-3.66-2.9-6.26-6.52-6.26zm3.83 9.32c-.16.45-.94.86-1.3.9-.34.06-.76.08-1.22-.08-.28-.09-.64-.21-1.1-.4-1.94-.84-3.2-2.78-3.3-2.91-.1-.13-.79-1.05-.79-2 0-.95.5-1.4.68-1.6.18-.19.4-.24.53-.24.13 0 .27 0 .38.01.13.01.29-.05.46.35.16.4.56 1.37.6 1.47.05.1.08.22.02.35-.06.13-.09.21-.19.32-.1.11-.2.25-.29.34-.1.1-.2.2-.09.4.11.2.5.83 1.08 1.34.74.66 1.37.87 1.58.97.2.09.32.08.45-.05.13-.13.51-.6.65-.8.14-.2.27-.17.46-.1.19.07 1.19.56 1.4.66.2.1.34.15.39.24.05.09.05.5-.1.95z"
      />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.12 12.6h-2.02V19h-2.66v-6.4H8.9v-2.26h1.54V9.1c0-1.53.9-2.62 2.94-2.62h1.78v2.25h-1.1c-.5 0-.7.24-.7.7v1.31h1.86l-.2 2.26z"
      />
    </svg>
  );
}

export function SlackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#36C5F0"
        d="M9.7 15.1a1.5 1.5 0 1 1-3-.01 1.5 1.5 0 0 1 3 .01zM14.3 15.1a1.5 1.5 0 1 1-3-.01 1.5 1.5 0 0 1 3 .01z"
      />
      <path fill="#2EB67D" d="M9.6 6.6a1.5 1.5 0 1 1-3-.01A1.5 1.5 0 0 1 9.6 6.6z" />
      <path fill="#ECB22E" d="M14.4 6.6a1.5 1.5 0 1 1-3-.01A1.5 1.5 0 0 1 14.4 6.6z" />
      <path
        fill="#E01E5A"
        d="M12 3.6c-4.6 0-8.4 3.7-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.7 8.4-8.4S16.6 3.6 12 3.6zm0 15c-3.6 0-6.6-3-6.6-6.6S8.4 5.4 12 5.4s6.6 3 6.6 6.6-3 6.6-6.6 6.6z"
        opacity="0"
      />
    </svg>
  );
}

export function Microsoft365Icon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" fill="#F25022" />
      <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
      <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
      <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" fill="#fff" stroke="#4285F4" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="#4285F4" strokeWidth="1.6" />
      <path d="M7.5 3v3M16.5 3v3" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="10.4" y="11.5" width="3.2" height="3.2" rx="0.6" fill="#4285F4" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="#fff" stroke="#EA4335" strokeWidth="1.6" />
      <path
        d="M4 7.5l8 5.5 8-5.5"
        fill="none"
        stroke="#EA4335"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <path
        fill="var(--bg,#0b0b0b)"
        d="M7.12 9.4H4.8V18h2.32V9.4zM5.96 8.3c.78 0 1.28-.52 1.28-1.16-.01-.66-.5-1.16-1.27-1.16-.76 0-1.27.5-1.27 1.16 0 .64.5 1.16 1.26 1.16zM19.2 18h.01v-4.7c0-2.3-1.24-3.38-2.9-3.38-1.34 0-1.94.74-2.27 1.26V9.4h-2.32c.03.66 0 8.6 0 8.6h2.32v-4.8c0-.26.02-.52.1-.7.22-.53.7-1.08 1.53-1.08 1.08 0 1.51.82 1.51 2.03V18h2.02z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <rect
        x="6.2"
        y="6.2"
        width="11.6"
        height="11.6"
        rx="3.4"
        stroke="var(--bg,#0b0b0b)"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="3" stroke="var(--bg,#0b0b0b)" strokeWidth="1.4" />
      <circle cx="15.6" cy="8.4" r="0.9" fill="var(--bg,#0b0b0b)" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <path d="M10.5 9.3v5.4l4.6-2.7-4.6-2.7z" fill="var(--bg,#0b0b0b)" />
    </svg>
  );
}
