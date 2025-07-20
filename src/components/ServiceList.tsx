import React from "react";

interface ServiceTranslations {
  title: string;
  description: string;
}

interface Service {
  url: string;
  key: string;
  translations: {
    en: ServiceTranslations;
    ko: ServiceTranslations;
    ja: ServiceTranslations;
  };
}

const services: Service[] = [
  {
    url: "https://exif-frame.yuru.cam",
    key: "exif-frame",
    translations: {
      en: {
        title: "EXIF Frame",
        description: "App for creating frames and displaying metadata",
      },
      ko: {
        title: "EXIF 프레임",
        description: "액자를 만들고 메타데이터를 표기하는 앱",
      },
      ja: {
        title: "EXIFフレーム",
        description: "フレームを作成してメタデータを表示するアプリ",
      },
    },
  },
  {
    url: "https://bass.yuru.cam",
    key: "bass",
    translations: {
      en: {
        title: "Bass Tomo",
        description: "Quiz app for novice bassists",
      },
      ko: {
        title: "베이스 토모",
        description: "뉴비 베이시스트들을 위한 퀴즈 앱",
      },
      ja: {
        title: "ベーストモ",
        description: "初心者ベーシストのためのクイズアプリ",
      },
    },
  },
  {
    url: "https://bass-fretboard-trainer.yuru.cam",
    key: "bass-fretboard-trainer",
    translations: {
      en: {
        title: "Bass Fretboard Trainer",
        description:
          "Practice tool for matching note names to fretboard positions",
      },
      ko: {
        title: "베이스 지판 맞추기",
        description: "계이름을 보고 지판을 맞추는 연습 도구",
      },
      ja: {
        title: "ベースフレットボードトレーナー",
        description: "音名を見てフレットボードの位置を当てる練習ツール",
      },
    },
  },
];

// 브라우저 언어 감지 함수
const getLanguage = (): "en" | "ko" | "ja" => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("ja")) return "ja";
  return "en";
};

// 푸터 번역
const footerTranslations = {
  en: {
    github: "GitHub",
    discord: "Discord",
    email: "Email",
  },
  ko: {
    github: "깃허브",
    discord: "디스코드",
    email: "이메일",
  },
  ja: {
    github: "ギットハブ",
    discord: "ディスコード",
    email: "メール",
  },
};

const ServiceList: React.FC = () => {
  const currentLang = getLanguage();

  return (
    <div className="app">
      <div className="container">
        <div className="services-wrapper">
          <div className="services">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.url}
                className="service-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="service-content">
                  <div className="service-title">
                    {service.translations[currentLang].title}
                  </div>
                  <div className="service-description">
                    {service.translations[currentLang].description}
                  </div>
                </div>
                <div className="service-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="footer">
          <div className="footer-links">
            <a
              href="https://github.com/yurucam"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${services.length * 0.05 + 0.2}s` }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {footerTranslations[currentLang].github}
            </a>

            <a
              href="https://discord.gg/9AwynvfzVh"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${services.length * 0.05 + 0.35}s` }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
              </svg>
              {footerTranslations[currentLang].discord}
            </a>

            <a
              href="mailto:help@yuru.cam"
              className="footer-link"
              style={{ animationDelay: `${services.length * 0.05 + 0.5}s` }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {footerTranslations[currentLang].email}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ServiceList;
