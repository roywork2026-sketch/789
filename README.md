# 789 Newcomer Guide: full setup (all free to start, except the text service)

WHAT YOU HAVE
- index.html: the app (5 languages: English, Arabic, Ukrainian, Spanish, Farsi). Menu: guide, emergency, letter reader (on-phone, nothing uploaded), free help links, share/install, premium demo, feeling low or unsafe, about.
- netlify/functions/sms.js + sms-data.json: the "789" text service (text in, guide reply out).
- netlify/functions/explain-letter.js: optional AI letter helper (needs a paid API key; premium demo).
- manifest.webmanifest, sw.js, icons, logo.svg: make it installable.
- install-messages.txt: short copy-and-send install texts in 5 languages.
- SAFEGUARDING.md: policy to adopt before you launch.

IMPORTANT TRUTHS
- This is an INDEPENDENT service. It is not funded by or part of the UK government. Do NOT add government, GOV.UK, NHS or Home Office logos or any "funded by the UK government" wording unless you hold a real grant or contract and written permission. Receiving benefits does not make a project government-funded.
- Short code 56789 cannot be assumed. 5-digit short codes are rented through providers/mobile networks and cost money; 56789 may be taken. Use any number your provider gives you, or apply for a short code later.
- Texting costs money (each text in and out). Telegram bots are free if you want a no-cost chat version.
- If you are on benefits, tell your work coach or check with Citizens Advice before earning any income. It can affect your claim.

PART 1. PUT THE WEBSITE ONLINE (free)
1. Open index.html in a text editor. Change CONTACT="your-email@example.com" to your real email. Add your organisation name to the About text if you wish.
2. Create a free GitHub account and a new repository. Upload ALL these files, keeping the netlify folder.
3. Sign up free at netlify.com > Add new site > Import from Git > choose the repository. Leave build command empty.
4. You get a link ending .netlify.app. Open it and test every menu item in every language.
5. On a phone: Android Chrome > menu > Install app. iPhone Safari > Share > Add to Home Screen.

PART 2. TURN ON THE 789 TEXT SERVICE (paid per text)
1. Create an account with an SMS provider (for example Twilio). Buy a UK number that can receive texts.
2. In the number settings, set "when a message comes in" to a webhook, method POST:
   https://YOUR-SITE.netlify.app/.netlify/functions/sms
3. Text the number from your phone: "789" gets the language menu. "EN" shows the English menu. "EN5" gives Housing. "EN9" gives support numbers. "EN0" returns to the menu. Codes: EN, AR, UA (Ukrainian), ES, FA.
4. Any message with words about suicide or self-harm gets crisis numbers straight away.
5. Set a spending cap with the provider. Turn on STOP handling (providers do this by default).
6. Keep the number private: if you add provider logs, tell users (see privacy below).
Flyer line: "Text 789 to [YOUR NUMBER] for free help in your language."

PART 3. OPTIONAL AI LETTER HELPER (paid)
Create an Anthropic API key at console.anthropic.com, set a low spending limit, and add it in Netlify > Site configuration > Environment variables as ANTHROPIC_API_KEY. Redeploy. Unlock the premium demo card to test.

PART 4. APP STORES (optional, not free)
Google Play: one-off fee. Package the site with pwabuilder.com. Apple: yearly fee, needs a Mac with Xcode, and often rejects website-only apps. Apple waives its fee for registered nonprofits.

PART 5. BEFORE YOU SHARE IT WIDELY (do not skip)
- Have each translation read by a native speaker. Do not rely on my translations alone.
- Have a regulated adviser (OISC or solicitor) and a mental health professional review the content.
- Adopt SAFEGUARDING.md. Name a person responsible.
- Write a privacy notice: the site collects nothing; your SMS provider keeps message logs; the optional AI helper sends photos to an AI provider. Check whether you must register with the ICO (UK data regulator).
- Confirm crisis numbers on nhs.uk. Numbers and options differ in Scotland, Wales and Northern Ireland. Add local lines before you expand.
- Keep the "independent, not official" banner.

PART 6. WHERE TO GROW
Languages to add next (each needs native review): Kurdish Sorani, Pashto, Tigrinya, Amharic, Polish, Romanian, Urdu, Bengali, Punjabi.
Simple extras: spoken read-aloud (already included), printable one-page cards per language, a free Telegram bot, libraries and ESOL listings by town.
