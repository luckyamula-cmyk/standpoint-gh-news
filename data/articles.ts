export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
  breaking: boolean;
  tags: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  { name: "Politics", slug: "politics", description: "Latest political news and analysis from Ghana", color: "#DC2626" },
  { name: "Business", slug: "business", description: "Ghana's economy, markets and business landscape", color: "#2563EB" },
  { name: "Sports", slug: "sports", description: "Football, athletics and all sports in Ghana", color: "#16A34A" },
  { name: "Entertainment", slug: "entertainment", description: "Music, film, arts and culture from Ghana", color: "#9333EA" },
  { name: "Technology", slug: "technology", description: "Tech innovation, startups and digital Ghana", color: "#0891B2" },
  { name: "Lifestyle", slug: "lifestyle", description: "Health, food, travel and living in Ghana", color: "#EA580C" },
  { name: "World", slug: "world", description: "International news affecting Ghana and Africa", color: "#4B5563" },
  { name: "Education", slug: "education", description: "Schools, universities and learning in Ghana", color: "#CA8A04" },
];

export const breakingHeadlines = [
  "Parliament votes on Economic Recovery Bill today — debate enters final stage",
  "Black Stars seal AFCON 2025 qualification after 2-0 win over Ethiopia",
  "Ghana cedi strengthens against dollar — GH¢15.40 per USD as of today",
  "Accra records highest temperature of the season at 36°C",
  "Free SHS enrolment crosses 1.5 million for the first time in history",
  "Kumasi Central Hospital opens new emergency and trauma wing",
];

export const articles: Article[] = [
  // ====== POLITICS ======
  {
    id: "1",
    slug: "parliament-debates-economic-recovery-bill",
    title: "Parliament in Heated Debate Over Economic Recovery Bill as Ghana Nears IMF Milestone",
    excerpt: "Members of Parliament are sharply divided over the proposed Economic Recovery Bill as Ghana approaches a critical milestone in its USD 3 billion IMF Extended Credit Facility programme.",
    content: `
<p>Ghana's Parliament descended into a rare all-night session on Tuesday as legislators clashed over the proposed Economic Recovery and Sustainability Bill — a landmark piece of legislation tabled by Finance Minister Dr. Kwabena Asante-Manu in a bid to consolidate the country's fiscal gains under the IMF programme.</p>

<p>The bill, comprising 47 clauses, proposes sweeping reforms to revenue mobilisation, debt management, and public financial accountability. It is widely seen as a key structural benchmark under Ghana's USD 3 billion Extended Credit Facility (ECF) agreement signed in May 2023.</p>

<h2>Minority Opposition</h2>

<p>The Minority caucus staged a walkout during the second reading, accusing the government of rushing through legislation that would "entrench austerity and deepen hardship for ordinary Ghanaians." Minority Leader Haruna Iddrisu told reporters outside the chamber that at least five clauses relating to fuel subsidy removal and pension restructuring needed further public consultation.</p>

<p>"We cannot sign off on measures that will raise the cost of living for market women, for drivers, for teachers — without a single town hall meeting," said Iddrisu. "This is not responsible governance."</p>

<h2>Government's Defence</h2>

<p>Finance Minister Dr. Asante-Manu fired back, arguing that delays would jeopardise the disbursement of the fourth tranche of IMF support estimated at USD 370 million — funds earmarked for social protection programmes including the Livelihood Empowerment Against Poverty (LEAP) initiative.</p>

<p>"Every week of delay costs Ghana hundreds of millions in foregone concessional financing," the minister said. "We cannot hold the vulnerable hostage to political grandstanding."</p>

<h2>IMF Programme Update</h2>

<p>Ghana signed on to the IMF bailout programme after defaulting on its external debt in December 2022 — the country's first sovereign default since independence. The programme has so far helped stabilise the exchange rate, reduce inflation from a peak of 54% to a current 22%, and arrest a sharp decline in gross international reserves.</p>

<p>The IMF's most recent Article IV consultation noted "significant but fragile progress," urging the government to press ahead with domestic revenue reforms and expenditure rationalisation.</p>

<h2>Market Reaction</h2>

<p>The Ghana Stock Exchange Composite Index rose 1.4% on Tuesday, reflecting cautious optimism. The cedi traded at GH¢15.38 to the dollar — its strongest level in four months. Analysts say a final vote on the Recovery Bill before month-end could unlock a further 2% rally in equities.</p>

<p>A final vote is expected before the end of the current parliamentary sitting, which closes on June 27.</p>
    `,
    category: "Politics",
    categorySlug: "politics",
    author: "Kwame Mensah",
    authorTitle: "Senior Political Correspondent",
    publishedAt: "2026-06-18T07:30:00Z",
    readTime: 5,
    image: "https://picsum.photos/seed/politics-parliament/800/450",
    featured: true,
    breaking: true,
    tags: ["Parliament", "IMF", "Economy", "Finance Bill"],
  },
  {
    id: "2",
    slug: "electoral-commission-boundary-reforms",
    title: "NDC and NPP Trade Barbs Over Electoral Commission's Proposed Boundary Reforms",
    excerpt: "The country's two largest parties are locked in a war of words over the EC's plan to redraw constituency boundaries ahead of the 2028 general elections.",
    content: `
<p>Ghana's Electoral Commission (EC) has sparked a fresh political firestorm with its announcement of a comprehensive review of constituency boundaries — a process that both the National Democratic Congress (NDC) and the New Patriotic Party (NPP) are now openly contesting.</p>

<p>The EC chairperson, Mrs. Jean Mensa, said the exercise, which will take 18 months to complete, is constitutionally mandated and long overdue. "The last delimitation was in 2004. Population shifts, urbanisation, and the creation of new districts make this not just necessary but urgent," she told journalists at a press conference in Accra.</p>

<h2>NDC's Concerns</h2>

<p>The NDC, led by former President John Dramani Mahama, has accused the EC of preparing to gerrymander constituencies to favour the ruling NPP in the 2028 elections. "We have seen this playbook before," said NDC General Secretary Fifi Fiavi Kwetey. "The EC must operate with full transparency and allow civil society observers at every stage of this process."</p>

<h2>NPP Defends Commission</h2>

<p>The NPP dismissed the NDC's allegations as "baseless scaremongering," with the party's Communications Director Richard Ahiagbah calling the delimitation process "a routine constitutional exercise carried out by an independent body."</p>

<p>Political analyst Dr. Ransford Gyampo of the University of Ghana noted that boundary reviews are inherently political in nature. "No party is going to sit by and watch — both sides have electoral arithmetic to protect. The key is whether the EC conducts this with credible independence."</p>

<h2>Civil Society Weighs In</h2>

<p>The Coalition of Domestic Election Observers (CODEO) has called for a multi-stakeholder consultative forum before any boundary changes are implemented, warning that rushed delimitation could undermine public trust in the electoral process ahead of 2028.</p>
    `,
    category: "Politics",
    categorySlug: "politics",
    author: "Akosua Boateng",
    authorTitle: "Political Reporter",
    publishedAt: "2026-06-17T11:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/politics-election/800/450",
    featured: false,
    breaking: false,
    tags: ["Electoral Commission", "NDC", "NPP", "Elections 2028"],
  },
  {
    id: "3",
    slug: "president-youth-employment-fund",
    title: "President Launches GH¢2 Billion Youth Employment Fund Targeting 200,000 Jobs",
    excerpt: "The President has unveiled a GH¢2 billion Youth Employment and Entrepreneurship Fund aimed at creating 200,000 jobs over the next three years.",
    content: `
<p>President Nana Addo Dankwa Akufo-Addo on Wednesday unveiled the most ambitious youth employment initiative in Ghana's recent history — a GH¢2 billion Youth Employment and Entrepreneurship Fund (YEEF) targeting the creation of 200,000 jobs over the next three years.</p>

<p>Speaking at a ceremony at Jubilee House, the President said the fund would be managed by a newly created Youth Employment Authority board, with allocations spanning agriculture, digital services, construction, and creative industries.</p>

<h2>Fund Structure</h2>

<p>According to the Finance Ministry, 40% of the fund will go towards apprenticeship and internship subsidies for private sector employers, 30% to entrepreneurship grants for young business owners under 35, 20% to a digital skills and coding bootcamp programme, and 10% to administrative and monitoring costs.</p>

<p>"Our young people are not a burden — they are Ghana's greatest asset," the President said. "This fund is our commitment to channelling that energy into productive employment and wealth creation."</p>

<h2>Economic Context</h2>

<p>Ghana's youth unemployment rate stands at approximately 13.5% according to the Ghana Statistical Service, with urban youth unemployment significantly higher at 19%. Economists say the YEEF is a step in the right direction but caution that job creation requires broader structural reforms to the business environment.</p>

<p>The fund is expected to be capitalised through a combination of government budget allocations and concessional loans from development partners including the World Bank and African Development Bank.</p>
    `,
    category: "Politics",
    categorySlug: "politics",
    author: "Kwame Mensah",
    authorTitle: "Senior Political Correspondent",
    publishedAt: "2026-06-16T14:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/politics-president/800/450",
    featured: false,
    breaking: false,
    tags: ["Youth", "Employment", "Economy", "President"],
  },

  // ====== BUSINESS ======
  {
    id: "4",
    slug: "ghana-stock-exchange-two-year-high",
    title: "Ghana Stock Exchange Composite Index Surges to Two-Year High on Recovery Optimism",
    excerpt: "The GSE-CI closed at 6,820.45 points — its highest level since May 2024 — as investors bet on Ghana's improving economic fundamentals.",
    content: `
<p>The Ghana Stock Exchange Composite Index (GSE-CI) closed at 6,820.45 points on Tuesday, its highest level since May 2024, as investor sentiment brightened on improving macroeconomic conditions and progress in Ghana's IMF programme.</p>

<p>The index gained 2.1% in a single session — the largest single-day advance in eight months — driven by strong performances from banking stocks, telecoms, and consumer goods firms.</p>

<h2>Top Performers</h2>

<p>GCB Bank led the rally with a 5.8% gain, followed by MTN Ghana (4.2%) and Databank Financial Services (3.7%). The Financial Services Index, which tracks bank stocks, rose 3.4% — outperforming the broader market for the fourth consecutive session.</p>

<p>"The market is repricing Ghana risk," said Dela Selormey, head of research at Databank Brokerage. "Inflation is coming down, the cedi has stabilised, and the IMF programme is broadly on track. That's a significant shift from where we were 18 months ago."</p>

<h2>Foreign Investor Flows</h2>

<p>Foreign investor participation on the exchange rose to 34% of total trading volume — the highest since 2022. Analysts say improved confidence in Ghana's debt restructuring process has encouraged offshore funds to re-enter Ghanaian equities.</p>

<p>Ghana completed its domestic debt exchange programme in February 2024 and is in advanced discussions with external creditors over a bilateral debt restructuring framework.</p>

<h2>Outlook</h2>

<p>Analysts at Frontline Capital Advisors project the GSE-CI could reach 7,200 by year-end if inflation drops below 18% and the IMF tranche disbursement proceeds as expected. However, they caution that global commodity price volatility and domestic political developments ahead of 2028 elections could introduce headwinds.</p>

<p>Total market capitalisation stood at GH¢71.4 billion at close of trading on Tuesday.</p>
    `,
    category: "Business",
    categorySlug: "business",
    author: "Ama Owusu",
    authorTitle: "Business & Finance Editor",
    publishedAt: "2026-06-18T09:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/business-stocks/800/450",
    featured: true,
    breaking: false,
    tags: ["Stock Exchange", "GSE", "Investments", "Economy"],
  },
  {
    id: "5",
    slug: "gold-exports-boost-foreign-reserves",
    title: "Ghana's Gold Exports Surge 18%, Boosting Cedi and Foreign Reserves to Four-Year High",
    excerpt: "Gold export revenues rose 18% year-on-year in Q1 2026, helping Ghana's gross international reserves climb to a four-year high of USD 6.8 billion.",
    content: `
<p>Ghana's gold export revenues surged 18% year-on-year in the first quarter of 2026 to USD 2.4 billion, driven by elevated global gold prices and increased production from major mining operations, the Bank of Ghana said on Monday.</p>

<p>The strong performance helped push Ghana's gross international reserves to USD 6.8 billion by end of March — equivalent to 3.8 months of import cover and the highest level since late 2022.</p>

<h2>Production Boost</h2>

<p>Major producers including Gold Fields, AngloGold Ashanti, and Newmont reported combined output growth of 11% in the quarter. Newmont's Ahafo mine in the Brong-Ahafo Region was the single largest contributor, producing 271,000 troy ounces following the completion of a USD 900 million expansion project in late 2025.</p>

<p>The galamsey challenge — large-scale illegal artisanal mining — continues to be a point of controversy, though government efforts to formalise the sector have seen some licensed small-scale operators expand production legally.</p>

<h2>Impact on the Cedi</h2>

<p>The surge in gold-related foreign exchange inflows has directly supported the Ghana cedi, which has appreciated 6.2% against the US dollar since the start of 2026. The Bank of Ghana has used the opportunity to rebuild its foreign reserves buffer, purchasing foreign exchange from commercial banks at market rates.</p>

<p>"The cedi's stability is real and is underpinned by fundamentals, not just intervention," said Bank of Ghana Governor Dr. Ernest Addison. "We are confident in maintaining this trajectory through the second half."</p>

<h2>Cocoa and Oil</h2>

<p>Ghana's total merchandise export revenues rose 14% in Q1, also supported by higher cocoa prices on the international market. Crude oil export volumes, however, dipped 4% due to scheduled maintenance at the Jubilee, TEN, and Sankofa fields.</p>
    `,
    category: "Business",
    categorySlug: "business",
    author: "Ama Owusu",
    authorTitle: "Business & Finance Editor",
    publishedAt: "2026-06-17T08:30:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/business-gold/800/450",
    featured: false,
    breaking: false,
    tags: ["Gold", "Mining", "Cedi", "Exports"],
  },

  // ====== SPORTS ======
  {
    id: "6",
    slug: "black-stars-afcon-2025-qualification",
    title: "Black Stars Seal AFCON 2025 Spot with Dramatic Last-Minute Winner Against Ethiopia",
    excerpt: "Jordan Ayew's 89th-minute header sealed Ghana's qualification for the Africa Cup of Nations, sending the Baba Yara Stadium crowd into delirium.",
    content: `
<p>Jordan Ayew etched his name into Ghana football folklore on Tuesday night, heading home an 89th-minute winner to seal the Black Stars' qualification for the 2025 Africa Cup of Nations (AFCON) in a pulsating encounter against Ethiopia at the Baba Yara Sports Stadium in Kumasi.</p>

<p>The lone goal from a tense, high-stakes qualifier was enough to secure top spot in Group I for Ghana, eliminating Ethiopia from contention and vindicating head coach Otto Addo's patient approach to rebuilding the team after a disappointing 2023 AFCON campaign.</p>

<h2>The Match</h2>

<p>Ghana dominated early possession but struggled to break down a disciplined Ethiopian defensive block. Emmanuel Gyasi and Thomas Partey saw shots blocked inside the first 30 minutes, while Ayew had a goal ruled out for offside shortly before half-time.</p>

<p>The second half followed a similar pattern as frustration mounted in the stands. Ethiopia threatened on the counter-attack in the 68th minute when striker Getaneh Kebede rattled the crossbar with a long-range effort.</p>

<p>But with the clock winding down, substitute Antoine Semenyo delivered a perfect cross from the right flank, and Ayew — arriving unmarked at the far post — powered his header past the helpless Ethiopian goalkeeper to send the 40,000-strong crowd into delirium.</p>

<h2>Addo's Reaction</h2>

<p>"I am incredibly proud of these players," Otto Addo said in his post-match press conference. "We knew it would be difficult. Ethiopia came to defend and hit on the break. But our belief never wavered. This is what the Black Stars are about — never giving up."</p>

<h2>Road to AFCON</h2>

<p>Ghana finished Group I with 14 points from six games, conceding only three goals. The AFCON 2025 tournament is scheduled to take place in Morocco in January and February 2027, giving Addo's side time to prepare a strong challenge for what will be a star-studded continental showpiece.</p>

<p>Ghana has won the AFCON title four times, the last in 1982. A generation of Ghanaian fans is hungry for a fifth.</p>
    `,
    category: "Sports",
    categorySlug: "sports",
    author: "Yaw Darko",
    authorTitle: "Sports Correspondent",
    publishedAt: "2026-06-18T06:00:00Z",
    readTime: 5,
    image: "https://picsum.photos/seed/sports-football/800/450",
    featured: true,
    breaking: true,
    tags: ["Black Stars", "AFCON", "Football", "Qualification"],
  },
  {
    id: "7",
    slug: "asante-kotoko-gpl-title-drama",
    title: "Asante Kotoko Win GPL Title in Breathtaking Final-Day Drama as Hearts Collapse",
    excerpt: "The Porcupine Warriors secured their 27th GPL title with a stunning 3-2 comeback win over Accra Lions while city rivals Hearts of Oak fell to a shock home defeat.",
    content: `
<p>Asante Kotoko secured their 27th Ghana Premier League (GPL) title in extraordinary fashion on Sunday, overturning a 2-0 deficit to beat Accra Lions 3-2 in a pulsating final-day encounter while city rivals Hearts of Oak crashed to a surprise 1-0 home defeat against Aduana FC.</p>

<p>It was drama of the highest order in Ghanaian football, with the title destination uncertain until the final whistle blew simultaneously across the country.</p>

<h2>The Comeback</h2>

<p>Kotoko trailed 2-0 at half-time and seemed destined to surrender the title to Hearts. But a rousing team talk from head coach Prosper Narteh Ogum inspired a remarkable second-half turnaround. Emmanuel Sarkodie pulled one back in the 52nd minute before Fabio Gama equalised with a thunderous strike from 25 yards in the 71st.</p>

<p>With three minutes of normal time remaining, captain Abdul Fatawu Issahaku rose to meet a corner kick and headed home the winner — triggering wild celebrations both in the stadium and back in Kumasi where fans flooded the streets.</p>

<h2>Hearts of Oak's Collapse</h2>

<p>Hearts' shock defeat to Aduana — their first home loss in 14 months — handed the title to their bitter rivals. Hearts manager Slavko Matic resigned within hours of the final whistle, citing "a failure to achieve our season's primary objective."</p>

<h2>Ogum's Assessment</h2>

<p>"Football is a sport that rewards those who never stop believing," said Ogum, who steered Kotoko to their second consecutive league title. "My players showed character. They showed what this great club stands for."</p>

<p>Kotoko will now represent Ghana in the 2026/27 CAF Champions League group stage — their first continental campaign since 2022.</p>
    `,
    category: "Sports",
    categorySlug: "sports",
    author: "Yaw Darko",
    authorTitle: "Sports Correspondent",
    publishedAt: "2026-06-16T20:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/sports-kotoko/800/450",
    featured: false,
    breaking: false,
    tags: ["GPL", "Asante Kotoko", "Football", "Premier League"],
  },

  // ====== ENTERTAINMENT ======
  {
    id: "8",
    slug: "stonebwoy-bet-awards-history",
    title: "Stonebwoy Makes History as First Ghanaian to Win BET Best International Act Twice",
    excerpt: "Dancehall superstar Stonebwoy won the BET Best International Act award for the second time in three years, dedicating the trophy to Ghana and Africa.",
    content: `
<p>Ghanaian dancehall superstar Stonebwoy (born Livingstone Etse Satekla) made history at the BET Awards ceremony in Los Angeles on Sunday night, becoming the first Ghanaian artist ever to win the Best International Act award twice, after previously claiming the prize in 2023.</p>

<p>The Bhim Nation president dedicated his award to Ghana and the African continent in an emotional acceptance speech that brought the audience to its feet.</p>

<h2>The Speech</h2>

<p>"I want to dedicate this to Ghana — the land that shaped me, the music that defines me, and every young African who is told their dreams are too big," Stonebwoy said from the stage of the Peacock Theater. "Africa, we are here. We are not going anywhere. We rise."</p>

<p>The speech went viral within hours, trending on X (formerly Twitter) across Africa and the Ghanaian diaspora worldwide.</p>

<h2>A Banner Year</h2>

<p>The win caps an extraordinary 12 months for the artist, who released his critically acclaimed album <em>Fifth Dimension</em> in March 2026. The album peaked at Number 1 on Apple Music's Africa chart and Number 3 on Billboard's Reggae Albums chart.</p>

<p>His collaboration with Nigerian Afrobeats star Burna Boy on the track "Warrior" became the most-streamed Ghanaian song of all time on Spotify, amassing over 180 million streams.</p>

<h2>Reaction from Ghana</h2>

<p>President Akufo-Addo congratulated Stonebwoy via a post on X, calling the win "a testament to Ghana's cultural richness and the power of our creative talent." The Tourism, Arts and Culture Minister announced plans to host a homecoming concert for the artist in Accra next month.</p>
    `,
    category: "Entertainment",
    categorySlug: "entertainment",
    author: "Abena Appiah",
    authorTitle: "Entertainment Correspondent",
    publishedAt: "2026-06-17T07:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/entertainment-music/800/450",
    featured: false,
    breaking: false,
    tags: ["Stonebwoy", "BET Awards", "Music", "Ghana"],
  },
  {
    id: "9",
    slug: "ghanaian-film-akosua-cannes",
    title: "'Akosua' — The Ghanaian Film Set to Dazzle at the Cannes Film Festival",
    excerpt: "Director Blitz Bazawule's new film, exploring the life of a young woman navigating tradition and modernity in Accra, has been selected for the Cannes Directors' Fortnight.",
    content: `
<p>Ghana's burgeoning film industry has scored its biggest international coup in years, with director Blitz Bazawule's new feature film <em>Akosua</em> selected for the prestigious Directors' Fortnight sidebar at the Cannes Film Festival in France.</p>

<p>The film, shot entirely on location in Accra, Kumasi, and the Volta Region, tells the story of a young woman caught between family expectations, modern ambitions, and the weight of tradition in contemporary Ghana.</p>

<h2>About the Film</h2>

<p><em>Akosua</em> stars Ghanaian-British actress Lydia Forson in what critics who attended early screenings are calling a career-defining performance. Bazawule, who previously directed the internationally acclaimed <em>The Burial of Kojo</em> and co-directed Beyoncé's <em>Black Is King</em>, said the film represents a deeply personal project.</p>

<p>"Akosua is every Ghanaian woman I have ever known," Bazawule said at a preview screening at the National Theatre in Accra. "She is resilient, brilliant, and navigating a world that doesn't always make room for her. I hope audiences everywhere recognise her."</p>

<h2>Ghana's Film Renaissance</h2>

<p>The selection is a milestone for Ghanaian cinema, which has seen a creative renaissance in recent years driven by streaming platforms, diaspora collaborations, and government support through the Ghana Film Authority.</p>

<p>The film will have its world premiere at Cannes on July 12 before a domestic release in Ghanaian cinemas in September. International distribution rights have been acquired by A24 Films.</p>
    `,
    category: "Entertainment",
    categorySlug: "entertainment",
    author: "Abena Appiah",
    authorTitle: "Entertainment Correspondent",
    publishedAt: "2026-06-15T10:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/entertainment-film/800/450",
    featured: false,
    breaking: false,
    tags: ["Film", "Cannes", "Cinema", "Blitz Bazawule"],
  },

  // ====== TECHNOLOGY ======
  {
    id: "10",
    slug: "ghanacard-mobile-money-integration",
    title: "Ghana Launches GhanaCard-Mobile Money Integration — A Leap Towards Full Financial Inclusion",
    excerpt: "The NIA has launched a seamless integration between GhanaCard and all mobile money platforms, enabling instant account verification for Ghana's 18 million mobile money users.",
    content: `
<p>The National Identification Authority (NIA) on Monday launched a landmark integration between the Ghana National Identification Card (GhanaCard) and all major mobile money platforms including MTN MoMo, Vodafone Cash, and AirtelTigo Money — a move expected to dramatically accelerate financial inclusion across the country.</p>

<p>Under the new system, mobile money users can verify their accounts instantly using their GhanaCard biometric data — eliminating the need for physical documentation and reducing account registration time from 48 hours to under three minutes.</p>

<h2>Scale of Impact</h2>

<p>Ghana currently has approximately 18 million active mobile money accounts, representing around 57% of the adult population. The GhanaCard integration will allow verified users to transact up to GH¢20,000 per day — up from the previous GH¢5,000 limit for unverified accounts — and will unlock access to mobile savings, insurance, and micro-lending products.</p>

<h2>NIA Statement</h2>

<p>"Today marks a turning point for digital financial services in Ghana," said NIA Executive Director Professor Kenneth Agyemang Attafuah. "For the first time, a Ghanaian can walk into any mobile money agent, scan their card, and be fully verified in seconds. This is infrastructure for shared prosperity."</p>

<h2>Security Considerations</h2>

<p>The system uses biometric data — including fingerprint and facial recognition — stored securely on the NIA's national identity database. Privacy advocates have called for robust data protection regulations to be enforced alongside the rollout, a concern the NIA says is being addressed through partnerships with the Data Protection Commission.</p>
    `,
    category: "Technology",
    categorySlug: "technology",
    author: "Kwesi Asante",
    authorTitle: "Technology Reporter",
    publishedAt: "2026-06-18T10:00:00Z",
    readTime: 5,
    image: "https://picsum.photos/seed/tech-mobile/800/450",
    featured: false,
    breaking: false,
    tags: ["GhanaCard", "Mobile Money", "Fintech", "Digital ID"],
  },
  {
    id: "11",
    slug: "kwabena-pay-5m-seed-funding",
    title: "Accra-Based Fintech 'Kwabena Pay' Raises USD 5 Million to Serve Ghana's SMEs",
    excerpt: "Kwabena Pay, a Ghana-born B2B payments platform serving small businesses, has raised USD 5 million co-led by Partech Africa and GCB Ventures.",
    content: `
<p>Accra-based financial technology startup Kwabena Pay has raised USD 5 million in a seed funding round co-led by Partech Africa and Ghana Commercial Bank's venture arm, GCB Ventures — one of the largest seed rounds for a Ghanaian tech company this year.</p>

<p>The startup, founded in 2024 by former Ecobank Ghana executives Nana Yaa Boateng and Kofi Mensah-Bonsu, provides a suite of B2B payment and accounting tools designed for small and medium-sized enterprises (SMEs) operating in Ghana's informal and formal economy.</p>

<h2>The Problem They're Solving</h2>

<p>Ghana's SME sector — which contributes approximately 70% of GDP and 92% of employment — remains chronically underserved by traditional banking infrastructure. Many small businesses operate entirely on cash, unable to access trade credit, supply chain finance, or digital payment processing.</p>

<p>Kwabena Pay's platform integrates with Ghana's interoperable payment infrastructure, allowing SMEs to accept payments from all mobile money networks, send supplier invoices digitally, and track cash flow in real time through a mobile-first dashboard.</p>

<h2>Traction and Growth</h2>

<p>The company says it has onboarded over 12,000 SME clients since launching its beta in January 2025, processing more than GH¢140 million in transactions per month. Its annualised revenue growth rate stands at 340%.</p>

<p>"We've barely scratched the surface of what's possible," said Co-CEO Nana Yaa Boateng. "There are 2 million registered SMEs in Ghana alone. We believe we can be the financial backbone for all of them."</p>

<h2>Use of Funds</h2>

<p>The USD 5 million will be used to expand the engineering team, launch in Nigeria and Côte d'Ivoire, and develop a working capital lending product for existing clients backed by their transaction history on the platform.</p>
    `,
    category: "Technology",
    categorySlug: "technology",
    author: "Kwesi Asante",
    authorTitle: "Technology Reporter",
    publishedAt: "2026-06-16T09:00:00Z",
    readTime: 4,
    image: "https://picsum.photos/seed/tech-startup/800/450",
    featured: false,
    breaking: false,
    tags: ["Startup", "Fintech", "SME", "Investment"],
  },

  // ====== LIFESTYLE ======
  {
    id: "12",
    slug: "best-chop-bars-accra-guide",
    title: "Accra's Best Chop Bars: A Guide to the City's Most Beloved Local Eateries",
    excerpt: "From Dansoman to Madina, we round up the chop bars that keep Accra fed, nourished, and coming back for more — and the stories of the women who run them.",
    content: `
<p>Long before the restaurants came, before the beach clubs and the rooftop bars, there were chop bars — those cheerful, no-frills Ghanaian eateries that form the culinary backbone of Accra's neighbourhoods. They are where office workers eat fufu at noon, where traders fortify themselves with banku and okra stew, and where the city's communal soul is fed.</p>

<p>We spent two weeks eating our way across Accra to bring you our definitive guide to the city's best.</p>

<h2>Auntie Akua's, Dansoman</h2>

<p>Open since 1987, Auntie Akua's is a Dansoman institution. The woman herself — now 71 and still stirring her enormous pots — makes a groundnut soup that regulars swear is the finest in the city. Her tilapia, sourced fresh from Tema Fishing Harbour every morning, arrives swimming in a broth that is simultaneously light and deeply complex. Come before noon — she often sells out.</p>

<h2>Mama Efua's Kitchen, Adabraka</h2>

<p>Tucked behind the Adabraka post office, Mama Efua runs a packed operation from 6am to 3pm daily. Her kontomire stew — a spinach-like Ghanaian green cooked with crabmeat, smoked fish, and palm oil — is a masterclass in restraint and depth. The ampesi (boiled yam and plantain) that comes alongside it is the perfect vehicle. Tables are communal, conversation flows freely, and portions are generous.</p>

<h2>The Spot, Osu</h2>

<p>More upmarket than a traditional chop bar but maintaining all the soul of one, The Spot in Osu serves a curated menu of Ghanaian classics to a mixed crowd of professionals, expats, and neighbourhood regulars. Their jollof rice — made in the wood-fired pots that Ghanaians insist are the only proper way — consistently wins informal neighbourhood taste tests.</p>

<h2>Nana's Garden, Madina</h2>

<p>In the buzzing market town of Madina, Nana's Garden offers an outdoor dining experience under mango trees with a menu that changes daily depending on what the market has to offer. A typical spread might include eba with egusi soup, fried plantain, and grilled guinea fowl sourced from the Upper East Region. Cash only, and always worth it.</p>

<p>Ghana's chop bars are not just restaurants — they are living museums of a culinary heritage that deserves to be celebrated. Eat well, tip generously, and always ask what the day's special is.</p>
    `,
    category: "Lifestyle",
    categorySlug: "lifestyle",
    author: "Efua Quartey",
    authorTitle: "Lifestyle & Culture Writer",
    publishedAt: "2026-06-14T08:00:00Z",
    readTime: 6,
    image: "https://picsum.photos/seed/lifestyle-food/800/450",
    featured: false,
    breaking: false,
    tags: ["Food", "Accra", "Chop Bars", "Culture"],
  },

  // ====== WORLD ======
  {
    id: "13",
    slug: "african-union-summit-climate-financing",
    title: "African Union Summit Demands Global Climate Finance Reform to Protect African Economies",
    excerpt: "AU heads of state meeting in Addis Ababa called for a radical restructuring of international climate finance, warning that current mechanisms leave African nations exposed.",
    content: `
<p>African Union heads of state and government concluded a two-day extraordinary summit in Addis Ababa on Wednesday with a unanimous declaration calling for a fundamental restructuring of global climate finance mechanisms — a system they say is leaving the continent exposed to climate disasters while developed nations fail to deliver on their USD 100 billion annual climate finance commitment.</p>

<h2>The Nairobi Declaration on Climate Finance</h2>

<p>The summit adopted the "Nairobi Declaration on Climate Finance Reform," which demands that multilateral development banks triple concessional lending to African climate adaptation projects by 2027, that climate finance be provided primarily as grants rather than loans to the most vulnerable African nations, and that a new African Climate Resilience Fund of USD 50 billion be established with a permanent African board majority.</p>

<p>"We did not cause this crisis," said AU Commission Chairperson Moussa Faki Mahamat. "We will not be left to face its consequences alone and impoverished by the cost of addressing it."</p>

<h2>Ghana's Role</h2>

<p>Ghanaian President Akufo-Addo, who has previously chaired the AU and championed the Africa-led drive for a global "polluters pay" mechanism at COP26, co-chaired Tuesday's session on loss and damage financing. Ghana has been among the most vocal advocates for climate reparations, arguing that countries like Ghana face existential economic risks from flooding, coastal erosion, and agricultural disruption despite contributing less than 0.5% of global greenhouse gas emissions.</p>

<h2>Western Response</h2>

<p>Representatives of EU observer missions at the summit welcomed the Declaration but stopped short of committing to specific new financing targets, saying the EU would "study the proposals carefully." The US sent a senior Treasury official who declined to comment on the specific financial demands.</p>
    `,
    category: "World",
    categorySlug: "world",
    author: "Kwame Mensah",
    authorTitle: "Senior Political Correspondent",
    publishedAt: "2026-06-15T14:00:00Z",
    readTime: 5,
    image: "https://picsum.photos/seed/world-africa/800/450",
    featured: false,
    breaking: false,
    tags: ["African Union", "Climate", "Africa", "Finance"],
  },

  // ====== EDUCATION ======
  {
    id: "14",
    slug: "free-shs-enrolment-record-high",
    title: "Free SHS Enrolment Hits Record 1.5 Million as 2026 Academic Year Begins",
    excerpt: "Ghana's Free SHS programme has recorded its highest-ever enrolment with 1.52 million students, with the Girls' Education Fund driving near gender parity.",
    content: `
<p>Ghana's Free Senior High School (Free SHS) programme has recorded its highest-ever enrolment figure as the 2026 academic year begins, with 1.52 million students taking up places across 866 public senior high schools nationwide — a 7.4% increase over the previous academic year.</p>

<p>The Ghana Education Service (GES) announced the figures on Monday, noting that the programme — which guarantees tuition-free secondary education to all qualifying Ghanaian students — has now expanded enrolment by 143% since its launch in 2017.</p>

<h2>Gender Parity Progress</h2>

<p>Particularly encouraging is the narrowing of the gender gap. Female students now account for 49.1% of total enrolment — up from 43.2% when the programme began — driven in part by the Girls' Education Fund launched in 2023, which provides additional stipends, mentorship, and sanitary supplies to encourage girls to remain in school through to completion.</p>

<p>"We are approaching parity and we intend to reach it," said GES Director-General Professor Kwasi Opoku-Amankwa. "Education is the single most powerful equaliser a society can deploy. Free SHS is Ghana's commitment to that principle."</p>

<h2>Infrastructure Challenges</h2>

<p>The record enrolment figures have also shone a spotlight on persistent infrastructure gaps. A GES audit conducted in April found that 38% of public senior high schools have classroom-to-student ratios above the recommended 1:35, with some rural schools hosting up to 70 students per classroom.</p>

<p>The Education Ministry says a GH¢1.2 billion infrastructure investment programme is underway, targeting the construction of 200 new classroom blocks and the rehabilitation of 1,500 existing structures over the next two years.</p>

<h2>University Admissions</h2>

<p>The GES also reported that university transition rates from Free SHS graduates have risen steadily, with 67,000 students from the 2024/25 cohort securing places at universities and polytechnics — a 12% year-on-year increase and the highest in Ghanaian history.</p>
    `,
    category: "Education",
    categorySlug: "education",
    author: "Adjoa Mensimah",
    authorTitle: "Education Correspondent",
    publishedAt: "2026-06-17T09:30:00Z",
    readTime: 5,
    image: "https://picsum.photos/seed/education-school/800/450",
    featured: false,
    breaking: false,
    tags: ["Free SHS", "Education", "Ghana", "Schools"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count = 8): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString("en-GH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getCategoryColor(categorySlug: string): string {
  const colorMap: Record<string, string> = {
    politics: "#DC2626",
    business: "#2563EB",
    sports: "#16A34A",
    entertainment: "#9333EA",
    technology: "#0891B2",
    lifestyle: "#EA580C",
    world: "#4B5563",
    education: "#CA8A04",
  };
  return colorMap[categorySlug] ?? "#6B7280";
}
