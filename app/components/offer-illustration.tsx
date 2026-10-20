type IllustrationKind = "chocolate" | "bus" | "monastery" | "castle" | "tea";

export function OfferIllustration({ kind }: { kind: IllustrationKind }) {
  return (
    <svg className="offer-illustration" viewBox="0 0 260 170" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="125" cy="145" rx="92" ry="9" fill="currentColor" opacity=".08" />
      <circle cx="125" cy="78" r="65" fill="white" opacity=".7" />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {kind === "chocolate" && (
          <>
            <g transform="rotate(-12 117 86)">
              <rect x="69" y="26" width="84" height="121" rx="9" fill="currentColor" />
              <g stroke="white" strokeWidth="1.5" fill="white" fillOpacity=".12">
                <rect x="79" y="37" width="27" height="24" rx="3" />
                <rect x="116" y="37" width="27" height="24" rx="3" />
                <rect x="79" y="70" width="27" height="24" rx="3" />
                <rect x="116" y="70" width="27" height="24" rx="3" />
              </g>
              <path d="m69 99 18 8 23-10 20 10 23-8v39a9 9 0 0 1-9 9H78a9 9 0 0 1-9-9Z" fill="white" />
              <path d="m96 122 8 8 17-16" />
            </g>
            <path d="m171 133 15-57" strokeWidth="6" />
            <ellipse cx="190" cy="60" rx="12" ry="21" transform="rotate(16 190 60)" fill="white" />
            <path d="m43 60 4 9 9 4-9 4-4 9-4-9-9-4 9-4Z" fill="white" />
            <path d="M178 25v10m-5-5h10" />
          </>
        )}
        {kind === "bus" && (
          <>
            <g opacity=".5" strokeWidth="1.8">
              <path d="M49 87V59h24v28m-28-28 16-12 17 12M168 88V47h18v41m-9-41V20m-5 13 5-9 5 9M191 89V63h22v26" />
              <path d="M34 146c10-6 18-6 28 0s18 6 28 0 18-6 28 0 18 6 28 0 18-6 28 0 18 6 28 0" />
            </g>
            <rect x="57" y="71" width="141" height="61" rx="13" fill="white" />
            <path d="M58 109h139v10a13 13 0 0 1-13 13H70a13 13 0 0 1-12-13Z" fill="currentColor" />
            <rect x="68" y="81" width="26" height="21" rx="3" fill="currentColor" fillOpacity=".13" />
            <rect x="101" y="81" width="27" height="21" rx="3" fill="currentColor" fillOpacity=".13" />
            <rect x="135" y="81" width="26" height="21" rx="3" fill="currentColor" fillOpacity=".13" />
            <path d="M170 81h16v21h-16Z" fill="currentColor" fillOpacity=".13" />
            <circle cx="85" cy="132" r="10" fill="white" /><circle cx="170" cy="132" r="10" fill="white" />
            <circle cx="85" cy="132" r="3" fill="currentColor" /><circle cx="170" cy="132" r="3" fill="currentColor" />
            <path d="M39 112h-12m14 10H19M113 62h26" />
          </>
        )}
        {kind === "monastery" && (
          <>
            <path d="M43 144h170M65 141V93h36v48m58 0V93h35v48" fill="white" />
            <path d="M94 142V78h71v64Z" fill="white" />
            <path d="M94 78h71l-35-19Z" fill="currentColor" />
            <path d="M113 61V45h34v16" fill="white" />
            <path d="M113 45c-10-13 10-18 17-31 7 13 27 18 17 31Z" fill="currentColor" />
            <path d="M130 14V5m-5 4h10" />
            <path d="M65 93c-8-12 10-17 18-29 7 12 25 17 18 29Zm94 0c-8-12 10-17 18-29 7 12 25 17 17 29Z" fill="currentColor" />
            <path d="M83 64V54m-5 4h10m89 6V54m-5 4h10" />
            <path d="M120 142v-23a10 10 0 0 1 20 0v23M108 92v8m43-8v8M78 109v13m102-13v13" />
            <path d="M40 137v-25m0 9-9-9m9 17 10-10m165 19v-25m0 7 8-9" opacity=".55" />
          </>
        )}
        {kind === "castle" && (
          <>
            <path d="M55 142V62h36v80m52-17V62h35v65M91 82h52v61H91Z" fill="white" />
            <path d="m51 62 22-32 22 32Zm88 0 21-32 22 32Z" fill="currentColor" />
            <path d="M108 143v-30a9 9 0 0 1 18 0v30M69 78v12m88-12v12M101 93h7m20 0h7M73 29V16l17 5-17 6" />
            <path d="m143 121 48-29 29 29v24h-77Z" fill="white" />
            <path d="m143 121 48-29 29 29Zm0 0h77" fill="currentColor" fillOpacity=".16" />
            <circle cx="161" cy="133" r="4" /><circle cx="198" cy="134" r="5" />
            <ellipse cx="183" cy="112" rx="5" ry="3" />
            <path d="M37 136v-25m-7 12 7 7 8-9" opacity=".5" />
          </>
        )}
        {kind === "tea" && (
          <>
            <path d="M62 72h85v46c0 17-18 26-42 26s-43-9-43-26Z" fill="white" />
            <path d="M148 82h8c25 0 26 35-2 36h-7M61 82 37 66l9 35 18 13M59 70h91M78 65c0-19 54-19 54 0M105 52v-9" />
            <path d="m89 105 16-16 16 16-16 16Z" fill="currentColor" fillOpacity=".15" />
            <path d="M85 92v26m39-26v26" />
            <path d="M91 33c-10-9 8-13 0-23m24 23c-10-9 8-13 0-23" opacity=".5" />
            <path d="M169 113h45v15a22 22 0 0 1-45 0Zm45 3h6a8 8 0 0 1 0 16h-6" fill="white" />
            <path d="M164 151h57M175 104c-7-7 6-10 0-17" opacity=".6" />
            <rect x="35" y="136" width="32" height="14" rx="5" fill="white" transform="rotate(-9 51 143)" />
            <path d="M43 141h14m-11 6h9" />
          </>
        )}
      </g>
    </svg>
  );
}
