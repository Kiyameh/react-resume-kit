import React from "react";
import "./ResumeContact.css";

import { useLanguage } from "../../context/language-context";
import { ResumeContent } from "../../types/types";

export default function ResumeContact() {
  const { content } = useLanguage();
  return (
    <section>
      <h2>{content.connect_title}</h2>
      <div className="rrk-contact-social-buttons">
        {content.social_links.map(
          (link: ResumeContent["social_links"][number], index: number) => (
            <a
              key={index}
              href={`//${link.url}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rrk-contact-social-item">
                <span className="rrk-contact-button">{link.icon}</span>
                <span className="rrk-contact-url">{link.url}</span>
              </div>
            </a>
          )
        )}
      </div>
      <p className="rrk-contact-attribution">
        <span>
          {new Date().getFullYear()} {content.author}
        </span>
        <a
          href="https://opensource.org/license/mit"
          target="_blank"
          rel="noreferrer noopener"
        >
          MIT License
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="rrk-contact-icon"
          >
            <path d="M11.959.447A11.938 11.938 0 000 12.407c0 5.576 3.874 10.097 7.783 11.114.193.05.392-.05.467-.234l2.771-6.822a.396.396 0 00-.246-.528C9.365 15.47 8.53 14.32 8.48 12.4c-.024-1.828 1.5-3.45 3.561-3.447 1.931.003 3.479 1.632 3.479 3.453 0 .966-.203 1.687-.575 2.238-.371.552-.922.951-1.695 1.239a.396.396 0 00-.23.515l2.685 6.903a.396.396 0 00.465.24C20.163 22.534 24 18.062 24 12.406 24 5.804 18.603.447 11.959.447zm0 .791c6.22 0 11.25 4.997 11.25 11.168 0 5.138-3.423 9.208-6.895 10.272L13.9 16.47c.703-.308 1.302-.79 1.702-1.384.477-.708.709-1.602.709-2.68 0-2.266-1.898-4.24-4.27-4.244-2.48-.004-4.382 1.976-4.352 4.25.023 1.995.934 3.492 2.451 4.13L7.648 22.66C4.251 21.592.791 17.458.791 12.406A11.13 11.13 0 0111.959 1.238zm10.617 20.149a1.03 1.03 0 000 2.058 1.03 1.03 0 000-2.058zm0 .162c.48 0 .865.388.865.867a.856.856 0 01-.271.623l-.172-.342a.847.847 0 00-.111-.178.263.263 0 00-.114-.084.301.301 0 00.17-.117.356.356 0 00.061-.21c0-.13-.038-.227-.113-.292-.076-.064-.192-.095-.346-.095h-.41v1.343h.181v-.568h.2c.072 0 .128.015.17.045a.48.48 0 01.129.18l.171.343.157.001a.878.878 0 01-.567.216.865.865 0 010-1.732zm-.26.322h.229c.088 0 .155.018.2.059.044.04.066.099.066.177 0 .079-.022.14-.067.18-.044.04-.111.06-.2.06h-.228z" />
          </svg>
        </a>
      </p>
      <p className="rrk-contact-attribution">
        <span>This resume was built with React.</span>
        <a href="https://github.com/Kiyameh/react-resume-kit">
          <span> You can fork it here</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rrk-contact-icon"
          >
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
            <path d="M12 12v3" />
          </svg>
        </a>
        <span className="rrk-contact-repository-url">
          https://github.com/Kiyameh/react-resume-kit
        </span>
      </p>
    </section>
  );
}
