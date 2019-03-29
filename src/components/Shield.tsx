import React from "react";
import './Shield.css';

export interface ShieldPropsInterface {
  href: string;
  alt: string;
  src: string;
}

export const Shield = ({ href, alt, src }: ShieldPropsInterface) => (
  <a className='Shield-link' href={href} rel="nofollow noreferrer noopener" target="_blank">
    <img alt={alt} src={src} />
  </a>
);
