import type { CSSProperties, ReactNode } from "react";

type BrowserFrameProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  imgClassName?: string;
};

export function BrowserFrame({
  src,
  alt,
  className = "",
  style,
  children,
  imgClassName = "",
}: BrowserFrameProps) {
  return (
    <div className={`ka-browser ${className}`} style={style}>
      <div className="ka-browser-bar" aria-hidden>
        <span className="ka-browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="ka-browser-url">almeida santos / preview</span>
      </div>
      <div className="ka-browser-screen">
        <img src={src} alt={alt} className={`ka-browser-img ${imgClassName}`} loading="lazy" />
        {children}
      </div>
    </div>
  );
}

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  imgClassName?: string;
};

export function PhoneFrame({
  src,
  alt,
  className = "",
  style,
  imgClassName = "",
}: PhoneFrameProps) {
  return (
    <div className={`ka-phone ${className}`} style={style}>
      <div className="ka-phone-bezel">
        <span className="ka-phone-island" aria-hidden />
        <div className="ka-phone-screen">
          <img src={src} alt={alt} className={`ka-phone-img ${imgClassName}`} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
