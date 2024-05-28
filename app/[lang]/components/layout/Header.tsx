import React from "react";
import { HamburgerNavMenu } from "./HamburguerNavMenu";

type HeaderProps = {
  dictionary: Record<string, string>;
};

export const Header = ({ dictionary }: HeaderProps) => {
  return (
    <div className="flex justify-center sm:justify-between items-center py-4 px-16 w-full bg-slate-950">
      <svg
        width={96}
        height={36}
        viewBox="0 0 96 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_236)">
          <g opacity="0.8">
            <path
              d="M49.4631 15.7529C45.4769 15.7529 42.6924 18.5882 42.6924 22.6475C42.6924 26.7068 45.7007 29.5421 49.8449 29.5421C53.1133 29.5421 55.1056 27.6352 55.1883 27.5542L55.2846 27.4607L53.7551 24.9502L53.5997 25.0929C53.5845 25.1071 52.0677 26.483 50.0738 26.483C48.0798 26.483 46.6651 25.2691 46.3712 23.3722H55.2998L55.3142 23.2186C55.3176 23.1852 55.391 22.4004 55.391 22.0188C55.391 20.2697 54.8488 18.6943 53.8641 17.5847C52.8017 16.3875 51.2798 15.7546 49.4615 15.7546L49.4631 15.7529ZM49.4631 18.5607C50.681 18.5607 51.61 19.4991 51.7265 20.8149H46.4971C46.8898 19.3989 47.9852 18.5607 49.4631 18.5607Z"
              fill="#F17F21"
            />
            <path
              d="M65.2757 17.3759L62.8282 24.1294C62.7015 24.5051 62.5884 24.9552 62.5056 25.3183C62.4186 24.9543 62.2995 24.5026 62.1593 24.1261L59.7127 17.3743C59.3563 16.425 58.7752 16.0543 57.641 16.0543H55.6099V19.1142H56.0617C56.3632 19.1142 56.5186 19.2111 56.6149 19.4582L60.3765 29.239H64.4607L68.2224 19.4582C68.3186 19.2102 68.4741 19.1134 68.7756 19.1134H69.2527V16.0535H67.3483C66.2292 16.0535 65.6288 16.4359 65.2757 17.3751V17.3759Z"
              fill="#F17F21"
            />
            <path
              d="M82.7373 16.0552C81.7442 16.0552 81.1597 16.4634 80.8422 17.3793L78.6261 23.8014C78.5129 24.1236 78.4073 24.5361 78.328 24.8784C78.2452 24.5344 78.132 24.1195 78.0062 23.7947L75.4599 17.3752C75.1026 16.4259 74.5798 16.0552 73.5917 16.0552H71.2793V19.1151H71.8334C72.134 19.1151 72.2396 19.1602 72.3646 19.4674L76.665 29.0454L76.2605 29.9629C75.8517 30.9506 75.1482 31.4941 74.2792 31.4941C73.302 31.4941 72.5555 30.6784 72.5479 30.6701L72.3857 30.4889L70.9609 33.0763L71.0462 33.1656C71.0994 33.2215 72.3696 34.529 74.4582 34.529C76.6693 34.529 78.4361 33.2683 79.3059 31.0725L83.9679 19.4616C84.0878 19.1652 84.217 19.1151 84.5472 19.1151H85.1012V16.0552H82.7382H82.7373Z"
              fill="#F17F21"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9818 28.9527C12.9708 25.8937 14.9554 22.8321 16.9528 19.778C18.6495 17.1823 20.3614 14.5975 22.059 12.0026C22.1147 11.9175 22.1324 11.7705 22.1012 11.6728C21.6874 10.3704 21.2575 9.07212 20.8445 7.76968C20.7845 7.581 20.6899 7.54092 20.5075 7.54259C19.5422 7.55094 18.5769 7.54676 17.6116 7.54676H17.3084V3.34472H17.5997C19.6089 3.34472 21.6189 3.34889 23.6281 3.33887C23.841 3.33804 23.9296 3.4065 24.0048 3.59435C26.4168 9.5931 28.8348 15.5893 31.2519 21.5864C31.5728 22.3821 31.8937 23.1769 32.2155 23.9717C32.2409 24.0343 32.2755 24.0928 32.3118 24.1663C33.3928 23.8415 39.1079 22.1967 40.1762 21.8745C40.4071 21.8049 40.56 21.8845 40.6348 22.1132C40.9904 23.1978 41.3476 24.2823 41.7032 25.3677C41.7243 25.4328 41.742 25.5004 41.7724 25.6015C39.1687 26.4155 31.925 28.5503 29.2925 29.3735C27.6549 25.295 26.0216 21.2257 24.3773 17.1289C24.3215 17.1957 24.2759 17.2408 24.2404 17.2925C23.5251 18.3303 22.8081 19.3664 22.097 20.4067C20.4045 22.8822 18.7154 25.3602 17.0238 27.8365C16.7442 28.2456 16.4621 28.653 16.1691 29.0521C16.1125 29.1289 15.9934 29.2065 15.9039 29.2057C14.2629 29.1949 12.6236 29.1865 10.9835 29.1656C10.8155 29.1656 10.9506 29.0003 10.9818 28.9527Z"
            fill="#F17F21"
          />
          <g opacity="0.4">
            <path
              d="M3.037 22.8921C3.037 19.2185 0 18.8654 0 18.8654V16.6754C0 16.6754 3.037 16.3223 3.037 12.6137V6.32185C3.037 0.49426 6.93122 0 8.3602 0H8.89649V1.97788H8.57472C7.68118 1.97788 5.28773 2.29597 5.28773 6.39282V13.2498C5.28773 16.7113 2.42977 17.7358 2.42977 17.7358V17.8067C2.42977 17.8067 5.28773 18.69 5.28773 22.2918V29.5729C5.28773 33.6347 7.68118 33.9879 8.57472 33.9879H8.89649V35.9658C8.89649 35.9658 8.68197 36.0008 8.3602 36.0008C6.93122 36.0008 3.037 35.5066 3.037 29.6439V22.8929V22.8921Z"
              fill="#F17F21"
            />
            <path
              d="M87.4617 33.9871C88.319 33.9871 90.7124 33.6339 90.7124 29.5721V22.291C90.7124 18.6884 93.5704 17.8059 93.5704 17.8059V17.7349C93.5704 17.7349 90.7124 16.7105 90.7124 13.249V6.39198C90.7124 2.29514 88.319 1.97704 87.4617 1.97704H87.1045V0H87.6763C89.0698 0 92.964 0.49426 92.964 6.32185V12.6137C92.964 16.3223 96.0001 16.6754 96.0001 16.6754V18.8654C96.0001 18.8654 92.964 19.2185 92.964 22.8921V29.6431C92.964 35.5057 89.0698 36 87.6763 36C87.319 36 87.1045 35.9649 87.1045 35.9649V33.9871H87.4617Z"
              fill="#F17F21"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_10_236">
            <rect width={96} height={36} fill="white" />
          </clipPath>
        </defs>
      </svg>
      <HamburgerNavMenu />
      <div className="hidden sm:flex items-start gap-16">
        <div className="text-[#dfe5f5]">{dictionary.letters}</div>
        <div className="text-[#dfe5f5] ">{dictionary.songLyrics}</div>
        <div className=" text-[#dfe5f5] ">{dictionary.about}</div>
      </div>
    </div>
  );
};
