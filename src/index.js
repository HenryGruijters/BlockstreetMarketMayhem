import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-gray-100 font-inter vaporwave-bg">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Electrolize&family=Inter:wght@300;400;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .header-outline {
            /* Adjusted text shadows for a softer, more readable neon glow */
            text-shadow:
              0 0 4px #00FFFF, /* Blue Neon Glow - softer */
              0 0 8px #00FFFF,
              0 0 16px #00FFFF,
              0 0 24px #00FFFF,
              -0.5px -0.5px 0 #FF00FF, /* Pink Outline - thinner/softer */
              0.5px -0.5px 0 #FF00FF,
              -0.5px 0.5px 0 #FF00FF,
              0.5px 0.5px 0 #FF00FF;
          }
          .vaporwave-bg {
            background-color: #1A0A33; /* Base dark purple */
            background-image:
              repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.08) 0px, rgba(0, 255, 255, 0.08) 1px, transparent 1px, transparent 25px), /* Subtle horizontal cyan lines */
              repeating-linear-gradient(90deg, rgba(255, 0, 255, 0.08) 0px, rgba(255, 0, 255, 0.08) 1px, transparent 1px, transparent 25px), /* Subtle vertical magenta lines */
              radial-gradient(circle at center, rgba(255, 255, 0, 0.05) 0%, transparent 70%); /* Very subtle central glow */
            background-size: 100% 25px, 25px 100%, cover;
            background-position: center;
            background-attachment: fixed;
          }
          .section-bg-image {
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* For parallax effect */
            position: relative;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7); /* Adjusted overlay for better visibility of actual card images */
            z-index: 1;
          }
          .content-container {
            position: relative;
            z-index: 2;
            max-width: 4xl;
            margin-left: auto;
            margin-right: auto;
            padding: 2rem;
            background-color: rgba(61, 39, 90, 0.92); /* Slightly more opaque background for content */
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.6); /* Stronger shadow for contrast */
            border: 1px solid #5A3F80; /* Adjusted border color */
          }
          .fixed-nav {
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: rgba(26, 10, 51, 0.98); /* Near opaque background for fixed nav */
            padding: 1rem 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Stronger shadow */
          }
        `}
      </style>

      <header className="text-center py-10 px-4 bg-[#1A0A33] shadow-lg">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00CCFF] mb-4 rounded-lg p-2 header-outline" style={{ fontFamily: 'Electrolize, sans-serif' }}>
          BLOCKSTREET - Market Mayhem
        </h1>
        <p className="text-xl sm:text-2xl text-[#FF8C00]" style={{ fontFamily: 'Electrolize, sans-serif' }}>
          A High-Energy, Real-Time Trading Card Game
        </p>
      </header>

      {/* Fixed Navigation Menu */}
      <nav className="fixed-nav flex flex-wrap justify-center gap-3 sm:gap-4">
        <NavItem title="Introduction" sectionId="introduction-section" scrollToSection={scrollToSection} />
        <NavItem title="Overview" sectionId="overview-section" scrollToSection={scrollToSection} />
        <NavItem title="Components" sectionId="components-section" scrollToSection={scrollToSection} />
        <NavItem title="Card Types" sectionId="card-types-section" scrollToSection={scrollToSection} />
        <NavItem title="Business as Usual" sectionId="gameplay-bau-section" scrollToSection={scrollToSection} />
        <NavItem title="Event Cards" sectionId="event-cards-section" scrollToSection={scrollToSection} />
        <NavItem title="Kickstarter" sectionId="kickstarter-section" scrollToSection={scrollToSection} />
        <NavItem title="Mailing List" sectionId="mailing-list-section" scrollToSection={scrollToSection} />
        <NavItem title="Socials" sectionId="socials-section" scrollToSection={scrollToSection} />
      </nav>

      {/* Introduction Section */}
      <section
        id="introduction-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/eventcard_business_as_usual-fin.jpg-dedc3f97-15bb-47c5-9a1c-0e101013d739')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Welcome to BLOCKSTREET! 🐂📉</h2>
          <p className="text-xl font-bold text-[#FFFF00] mt-6" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            "Greed is good. Decentralized is better."
          </p>
          <p className="text-lg text-[#E0D9ED] leading-relaxed mb-4">
            Step into a parallel dimension where Gordon Gekko trades Dogecoin on floppy disks and fax machines spit out NFT valuations. <span className="font-bold text-[#FF8C00]">BLOCKSTREET</span> is the high-energy, real-time trading card game that smashes the iconic chaos of 1980s Wall Street with the unpredictable thrill of the crypto market.
          </p>
          <p className="text-lg text-[#E0D9ED] leading-relaxed mb-4">
            Forget polite turns and quiet contemplation. This game is about yelling, bargaining, and scrambling to corner the market on everything from <span className="font-bold text-[#FF00FF]">MemeCoins</span> and <span className="font-bold text-[#FF00FF]">Avocado Toast Futures</span> to classic <span className="font-bold text-[#FF00FF]">Gold Chains</span> and <span className="font-bold text-[#FF00FF]">Retro Vinyl IPOs</span>.
          </p>
          <p className="text-lg text-[#E0D9ED] leading-relaxed mb-4">
            For the centrist dads who grew up in the '80s and '90s, the crypto world might seem bewildering. And for Gen-Z, "real" finance might be a foreign concept. But now, in this parallel financial world, everyone can finally play together!
          </p>
          <h3 className="text-2xl font-semibold text-[#FF8C00] mb-3" style={{ fontFamily: 'Electrolize, sans-serif' }}>Why You Need to Own BLOCKSTREET:</h3>
          <ul className="list-disc list-inside text-lg text-[#E0D9ED] space-y-2">
            <li><span className="font-semibold text-[#00FFFF]">Unleash Your Inner Broker:</span> Experience the adrenaline of a trading floor, but with a hilarious, modern twist. Shout "BLOCKSTREET!" as you corner the market and leave your friends in the dust.</li>
            <li><span className="font-semibold text-[#00FFFF]">Retro Vibes, Modern Mayhem:</span> Immerse yourself in a vibrant world of neon gradients, pinstripe suits, and chunky tech, all while navigating the volatile, meme-driven economy of today.</li>
            <li><span className="font-semibold text-[#00FFFF]">Fast-Paced & Furious Fun:</span> Rounds are quick, chaotic, and intensely engaging. Every game is a unique, memorable experience filled with unexpected twists and turns.</li>
            <li><span className="font-semibold text-[#00FFFF]">More Than Just a Game:</span> It's a satirical nod to financial history, a celebration of internet culture, and a guaranteed good time for 4-8 players.</li>
          </ul>
          <p className="text-xl font-bold text-[#FFFF00] mt-6 text-center" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            Are you ready to yell, deal, and dominate the market?
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section
        id="overview-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/eventcard_business_as_usual-fin.jpg-dedc3f97-15bb-47c5-9a1c-0e101013d739')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Overview</h2>
          <p className="text-lg text-[#E0D9ED] leading-relaxed">
            BLOCKSTREET - Market Mayhem is a high-energy, real-time trading card game for 4–8 players.
            Players yell, bargain, and scramble to corner the market on various chaotic commodities
            like MemeCoins, Avocado Toast Futures, or Gold chains. In the basic game, the goal is to be the first
            to collect all the cards of the same commodity and shout <span className="font-bold text-[#FF8C00]">"BLOCKSTREET!"</span> to win the round.
          </p>
        </div>
      </section>

      {/* Components Section */}
      <section
        id="components-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/Bull_Card_v2_750x1050_HighRes.jpg-0000d285-21e3-46c8-bf7e-2f16f2d00b1b')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Components</h2>
          <ul className="list-disc list-inside text-lg text-[#E0D9ED] space-y-2 mb-6">
            <li><span className="font-semibold text-[#FF00FF]">Commodity Cards:</span> 8 types of commodities, each with 10 cards (total 80 cards)</li>
            <li><span className="font-semibold text-[#FF00FF]">Penalty and Joker Cards:</span> Bull card can be used as any commodity, Bear is a penalty (2 each, total 4 cards)</li>
            <li><span className="font-semibold text-[#FF00FF]">Event Cards:</span> 11 event cards, 2 of each, allowing for varied play (22 cards total)</li>
            <li><span className="font-semibold text-[#FF00FF]">Team Cards:</span> 4 teams with 2 cards each (8 cards)</li>
            <li><span className="font-semibold text-[#FF00FF]">Voting Cards:</span> For Gas Fee Surge (8 cards)</li>
            <li><span className="font-bold text-[#FF00FF]">Scorepad:</span> Allows players to keep track of their standings through different market cycles</li>
            <li className="font-bold text-[#FF00FF]">Total = 116 cards</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#FF00FF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Special Cards:</h3>
          <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
            <div className="text-center">
              <ImageDisplay
                src="/_api/file/Bull_Card_v2_750x1050_HighRes.jpg-0000d285-21e3-46c8-bf7e-2f16f2d00b1b"
                alt="Bull Card"
                className="w-48 h-auto mb-2"
              />
              <p className="text-[#E0D9ED]" style={{ fontFamily: 'Electrolize, sans-serif' }}>Bull Card</p>
            </div>
            <div className="text-center">
              <ImageDisplay
                src="/_api/file/Bear_Card_750x1050_HighRes.jpg-ff54697d-b59b-48a4-a1f1-02aa87cfb89f"
                alt="Bear Card"
                className="w-48 h-auto mb-2"
              />
              <p className="text-[#E0D9ED]" style={{ fontFamily: 'Electrolize, sans-serif' }}>Bear Card</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types Section */}
      <section
        id="card-types-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/commoditycard_Gold_Chains_Card_750x1050_HighRes.jpg-e3cea1e5-e581-4d4e-8326-ee1590e451a9')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Card Types (Commodities)</h2>
          <p className="text-lg text-[#E0D9ED] mb-4">
            You need all the matching cards in a round to win the round.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Gold Chains', tagline: 'The OG flex — no blockchain needed', imageUrl: "/_api/file/commoditycard_Gold_Chains_Card_750x1050_HighRes.jpg-e3cea1e5-e581-4d4e-8326-ee1590e451a9" },
              { name: 'Cordless Phones', tagline: 'Unlimited minutes. Limited Futures', imageUrl: "/_api/file/commoditycard_Cordless_Phone_Card_750x1050_HighRes.jpg-6f9d882f-c24b-409b-8799-9f047606a7aa" },
              { name: 'MemeCoins', tagline: 'Because Logic is Bearish', imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=MemeCoins" },
              { name: 'Fax Machine Corp', tagline: 'Printing stonks since ‘84', imageUrl: "/_api/file/commoditycard_Fax_Machine_Corp_750x1050_HighRes.jpg-6e5322f9-bcea-472a-81b9-b448998f96a4" },
              { name: 'Avocado Toast Futures', tagline: 'Smash Profits not expectations', imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Avocado+Toast+Futures" },
              { name: 'Cat NFTs', tagline: 'Own a jpeg. Dominate the future', imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Cat+NFTs" },
              { name: 'Lambo Options', tagline: 'Calls only go one way: TO THE MOON', imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Lambo+Options" },
              { name: 'Retro Vinyl IPOs', tagline: 'Analog Assets, infinite vibes', imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Retro+Vinyl+IPOs" },
            ].map((commodity, index) => (
              <div key={index} className="bg-[#5A3F80] p-4 rounded-lg shadow-md border border-[#7B5CA8] flex flex-col items-center">
                <ImageDisplay
                  src={commodity.imageUrl}
                  alt={`${commodity.name} Card`}
                  className="w-32 h-auto mb-3"
                />
                <h3 className="text-xl font-semibold text-[#FF00FF] text-center" style={{ fontFamily: 'Electrolize, sans-serif' }}>{commodity.name}</h3>
                <p className="text-[#C0B8D1] italic text-center text-sm" style={{ fontFamily: 'Electrolize, sans-serif' }}>{commodity.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business as Usual Gameplay Section */}
      <section
        id="gameplay-bau-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/eventcard_business_as_usual-fin-resized.jpg-81e8a1bd-2f38-4618-a767-d03a4e671d5f')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Business as Usual (Standard) Gameplay</h2>
          <div className="space-y-6 text-lg text-[#E0D9ED]">
            <div>
              <h3 className="text-2xl font-semibold text-[#FF00FF] mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>Setup:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Choose commodities based on player count (one commodity per player). Take 9 cards of each commodity.</li>
                <li>Add one Bull and one Bear (Penalty and Joker cards).</li>
                <li>Shuffle the cards.</li>
                <li>Deal all the cards in the shuffled pack.</li>
                <li>No one reveals their hand.</li>
                <li>No turns — it’s all real-time trading.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#FF00FF] mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>Gameplay:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Players take it in turns to deal.</li>
                <li>Deal the shuffled pack with 9 of each commodity (matching the number of players) + 1 bull and 1 bear.</li>
                <li>Game Starts when dealer starts to trade.</li>
                <li>Players trade cards openly, but only in sets of the same card (1, 2, 3, or 4 at a time).</li>
                <li>All trades must be done face down.</li>
                <li>You can only shout the number you're trading: e.g., "TWO! TWO! TWO!"</li>
                <li>When another player agrees, you swap the stack.</li>
                <li>No lying about the number of cards, but no one has to say what commodity they’re trading.</li>
                <li>Trade only matching-number sets (1–8 cards).</li>
                <li>When you’ve got 9 of the same card, scream: <span className="font-bold text-[#FFFF00]" style={{ fontFamily: 'Electrolize, sans-serif' }}>"BLOCKSTREET!" 🏙️💥</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#FF00FF] mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>Scoring System:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="font-semibold">Win a round:</span> Earn 10 points.</li>
                <li><span className="font-semibold">Call "BLOCKSTREET!" incorrectly:</span> Score -10 points.</li>
                <li><span className="font-semibold">End the round with the Bear:</span> –5 points.</li>
                <li><span className="font-semibold">End the round with the Bull without winning:</span> –5 points.</li>
                <li><span className="font-semibold">Highest score after 11 rounds wins.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards Section */}
      <section
        id="event-cards-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('/_api/file/eventcard_Flash_Crash_Card_750x1050_300dpi.jpg-89468faf-c4be-482e-be3e-50b8c93e90ad')` }}
      >
        <div className="overlay"></div>
        <div className="content-container">
          <h2 className="text-3xl font-bold text-[#00FFFF] mb-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>Event Cards Gameplay</h2>
          <p className="text-lg text-[#E0D9ED] mb-4">
            The game incorporates Event Cards to introduce unique rules and challenges for each round.
            The Event Cards are categorized by "Level" (Whale, Professional Investor, Qualified Investor, Retail).
            In standard Event Card gameplay, we recommend playing the event cards in order starting with "Business as Usual" and ending with "Airdrop".
          </p>

          <div className="space-y-6">
            {[
              {
                  level: 'Retail',
                  event: 'Business as Usual',
                  specialRules: 'Standard Game',
                  scoring: '+10 points for winner, -5 points for bear, -5 point for bull if it is not part of a winning hand',
                  imageUrl: "/_api/file/eventcard_business_as_usual-fin.jpg-dedc3f97-15bb-47c5-9a1c-0e101013d739"
              },
              {
                  level: 'Retail',
                  event: '📠 Fax Jam',
                  specialRules: 'No yelling allowed — trades must be made via gestures only.',
                  scoring: '+10 points for winner, -5 points for bear, -5 point for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Fax+Jam"
              },
              {
                  level: 'Retail',
                  event: '🎭 Wall Street Bets',
                  specialRules: 'Before the round, deal +1 random card to every player (10 of each commodity instead of 9). Just 9 commodity cards are required to call BLOCKSTREET.',
                  scoring: '+20 point for winner, -10 points for bear, -10 point for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Wall+Street+Bets"
              },
              {
                  level: 'Qualified Investor',
                  event: '📊 Pump & Dump',
                  specialRules: 'After 3 minutes, all trades stop immediately — whoever has the most of any single commodity wins that round. If there is a tie the 2nd most wins ect.. For example there are two people with 7 each and one person with 6 then the person with a set of 6 wins.',
                  scoring: '+10 points to the winner + the winner can select a player to hold “hold the bag” and that player looses 5 points.,-5 points for bear ,-5 point for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Pump+&+Dump"
              },
              {
                  level: 'Qualified Investor',
                  event: '📦 ANIMAL SPIRITS',
                  specialRules: 'Shuffle 2 Bull Cards 🐂 and 2 Bear Cards 🐻 into the deck for this round. – Bull Cards can be used as any commodity, - The extra bears add more penalties to the round',
                  scoring: '+20 points to the winner, -10 to the bear and -10 to the for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Animal+Spirits"
              },
              {
                  level: 'Professional Investor',
                  event: '📉 Flashcrash',
                  specialRules: 'For all players the FIRST card is traded face up and is not added to the hand. You still win by cornering the remaining market',
                  scoring: 'Winner gets +10, Bear -5 and Bull - 5 as usual. Winner can elect to halve the score of another player.',
                  imageUrl: "/_api/file/eventcard_Flash_Crash_Card_750x1050_300dpi.jpg-89468faf-c4be-482e-be3e-50b8c93e90ad"
              },
              {
                  level: 'Professional Investor',
                  event: '🕵️ Insider Trading',
                  specialRules: '10 cards per set in deck. FIRST card dealt face up signals what each player is NOT allowed to collect. These first cards are discarded. If more than one per set is discarded fewer cards need to be collected for that set. For Example of 2 “Golden Chains” are discard just 8 need to be collected. Maximum number of a set that needs to be collected is 9',
                  scoring: 'Winner gets + 20, -5 points for bear, -5 point for bull if it is not part of a winning hand, Winner must add 10 to the score of another player',
                  imageUrl: "/_api/file/eventcard_Insider_Trading_Card_750x1050_300dpi.jpg-6b657a84-4311-4061-9e85-a0cd46e45441"
              },
              {
                  level: 'Professional Investor',
                  event: '🤝 HANDSHAKE PROTOCOL',
                  specialRules: 'You may win alone — or with a partner. 2 sets of 2 team cards are added to the deck. After dealing and after every player has had a chance to sort their cards. The dealer asks all players to close their eyes. The dealer then asks the holders of the 1st set of team tokens to open their eyes and identify their teammate. He then asks them to close their eyes and asks the holders of the 2nd set of team tokens to open their eyes. To establish the 2nd team. (note players could be part of multiple teams).',
                  scoring: 'Teams need to gather a combined set of 10 of one commodity to corner the market. Solo players need to gather a set of 9 of commodity to corner the market. 30 points each if a team wins. 30 points for a solo win. -5 for the bear and - 5 for the bull if it is not used in a winning hand.',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Handshake+Protocol"
              },
              {
                  level: 'Whale',
                  event: '🪙 Gas Fee Surge',
                  specialRules: 'Each player must burn 2 cards face-down at the start of the round. You can still corner the market by collecting all remaining cards of a single type (excluding burned cards) and calling “BLOCKSTREET!” A vote will follow. (voting cards required). A majority = (number of players-1)/2',
                  scoring: 'If a majority believes the caller the caller gets 40 points regardless. - The caller reveals the commodity he thinks he has cornered. If none of the other players have his commodity they have indeed successfully cornered the market. The believers get +10 points.The skeptics get -10 points,- If the caller has not cornened the market the believers score -10 and the skeptics get +10.,- if the caller does not get a majority. He only get +40 if he has cornered the market else het gets -10 points. Again depending on the correctness of their vote the believers and skeptics get +10 or -10. ,-5 points for bear ,-5 point for bull if it is not part of a winning hand,',
                  imageUrl: "/_api/file/eventcard_Gas_Fee_Surge_Card_750x1050_300dpi.jpg-c7dee225-380c-4519-a941-a22c916d5fef"
              },
              {
                  level: 'Whale',
                  event: '  “DIVERSIFIED AF”',
                  specialRules: 'players must collect at least one of each commodity (e.g., 1 MemeCoin, 1 Cat NFT, 1 Cordless Phone, etc.). And no more than 2 of a single commodity. Number of sets is 8, number of cards per set is 5',
                  scoring: 'Winner gets double his absolute score. ,-5 points for bear ,-5 point for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Diversified+AF"
              },
              {
                  level: 'Whale',
                  event: 'Airdrop “Get rich or cry trying”',
                  specialRules: 'The whole deck is used. Players start with 5 cards each. Every 20 seconds players draw 2 cards from the deck. First person to have just one commodity in their hand or 9 of a kind wins. We recommend using an interval timer which can be found in appstores.',
                  scoring: 'Winner gets points equal to the total number of cards in play, -5 points for bear, -5 point for bull if it is not part of a winning hand',
                  imageUrl: "https://placehold.co/750x1050/1A0A33/FF00FF?text=Airdrop"
              }
            ].map((card, index) => (
              <div key={index} className="bg-[#5A3F80] p-5 rounded-lg shadow-md border border-[#7B5CA8] flex flex-col sm:flex-row items-center gap-4">
                <ImageDisplay
                  src={card.imageUrl}
                  alt={`${card.event} Event Card`}
                  className="w-32 h-auto flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-[#FF00FF] mb-2" style={{ fontFamily: 'Electrolize, sans-serif' }}>{card.event}</h3>
                  <p className="text-[#C0B8D1] text-sm mb-3" style={{ fontFamily: 'Electrolize, sans-serif' }}>Level: <span className="font-bold">{card.level}</span></p>
                  <div className="space-y-2">
                    <p className="text-lg text-[#E0D9ED]"><span className="font-semibold">Special Rules:</span> {card.specialRules}</p>
                    <p className="text-lg text-[#E0D9ED]"><span className="font-semibold">Scoring:</span> {card.scoring}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kickstarter Section */}
      <section
        id="kickstarter-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('https://placehold.co/1920x1080/1A0A33/FF8C00?text=KICKSTARTER+LAUNCH')` }}
      >
        <div className="overlay"></div>
        <div className="content-container text-center">
          <h2 className="text-4xl font-bold text-[#FF8C00] mb-6 header-outline" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            INVEST IN THE FUTURE: Our Kickstarter Launch! 🚀💰
          </h2>
          <p className="text-xl text-[#E0D9ED] leading-relaxed mb-6">
            The market is calling, and it's time to go big! <span className="font-bold text-[#00FFFF]">BLOCKSTREET - Market Mayhem</span> is hitting Kickstarter soon, and this is your chance to get in on the ground floor.
          </p>
          <p className="text-xl text-[#E0D9ED] leading-relaxed mb-8">
            Secure exclusive early bird pledges, limited edition cards, and legendary backer rewards. Don't miss out on the next big thing in tabletop gaming – where every pledge is a power play!
          </p>
          <a
            href="https://www.kickstarter.com/projects/blockstreet/market-mayhem" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#FFFFFF]"
            style={{ fontFamily: 'Electrolize, sans-serif' }}
          >
            JOIN THE FUNDRAISER!
          </a>
          <p className="text-lg text-[#C0B8D1] mt-4">
            Follow us and be ready to back the future of chaotic finance!
          </p>
        </div>
      </section>

      {/* Mailing List Section */}
      <section
        id="mailing-list-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('https://placehold.co/1920x1080/1A0A33/FFFF00?text=SUBSCRIBE+FOR+ALPHA')` }}
      >
        <div className="overlay"></div>
        <div className="content-container text-center">
          <h2 className="text-4xl font-bold text-[#FFFF00] mb-6 header-outline" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            GET THE ALPHA: Join Our Mailing List! 📧📈
          </h2>
          <p className="text-xl text-[#E0D9ED] leading-relaxed mb-6">
            Don't get liquidated on market updates! Subscribe to the BLOCKSTREET mailing list to receive exclusive news, early access to new content, special promotions, and insider tips straight to your inbox. Be the first to know when the next big pump is coming!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your email, bro..."
              className="p-3 rounded-lg bg-gray-700 text-white border-2 border-[#00FFFF] focus:border-[#FF00FF] focus:outline-none w-full sm:w-auto flex-grow max-w-md"
              style={{ fontFamily: 'Electrolize, sans-serif' }}
            />
            <button
              onClick={() => alert('Thanks for subscribing! You\'re now on the inside track.')} // Simple alert for demo
              className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#FFFFFF] w-full sm:w-auto"
              style={{ fontFamily: 'Electrolize, sans-serif' }}
            >
              SUBSCRIBE NOW!
            </button>
          </div>
          <p className="text-lg text-[#C0B8D1] mt-4">
            No spam, just pure market signals.
          </p>
        </div>
      </section>

      {/* Socials Section */}
      <section
        id="socials-section"
        className="py-16 px-4 section-bg-image"
        style={{ backgroundImage: `url('https://placehold.co/1920x1080/2D1B4D/00FFFF?text=CONNECT+ON+THE+EXCHANGE')` }}
      >
        <div className="overlay"></div>
        <div className="content-container text-center">
          <h2 className="text-4xl font-bold text-[#00FFFF] mb-6 header-outline" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            CONNECT ON THE EXCHANGE! 🌐🤝
          </h2>
          <p className="text-xl text-[#E0D9ED] leading-relaxed mb-8">
            Join the BLOCKSTREET community and stay updated on all the market mayhem! Whether you're looking for trading tips, meme-worthy moments, or just want to chat with fellow finance bros and meme lords, our channels are open 24/7. Connect with us across the digital exchange!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <SocialLink icon="fab fa-x-twitter" name="X (Twitter)" url="https://twitter.com/blockstreetgame" tagline="Follow the Ticker!" />
            <SocialLink icon="fab fa-youtube" name="YouTube" url="https://www.youtube.com/channel/blockstreetgame" tagline="Watch the Market Moves!" />
            <SocialLink icon="fab fa-discord" name="Discord" url="https://discord.gg/blockstreetgame" tagline="Join the Trading Floor!" />
            <SocialLink icon="fab fa-reddit-alien" name="Reddit" url="https://www.reddit.com/r/blockstreetgame" tagline="Dive into the Subreddit!" />
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-[#9A8FA8] text-sm bg-[#1A0A33] mt-10">
        &copy; 2025 BLOCKSTREET - Market Mayhem. All rights reserved.
      </footer>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ title, sectionId, scrollToSection }) => (
  <button
    className="px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
      bg-[#FF00FF] text-white shadow-md hover:bg-[#FF33FF] transform hover:scale-105"
    onClick={() => scrollToSection(sectionId)}
    style={{ fontFamily: 'Electrolize, sans-serif' }}
  >
    {title}
  </button>
);

// Reusable Image Display Component
const ImageDisplay = ({ src, alt, className = "" }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-gray-600 text-gray-300 rounded-lg p-4 ${className}`}>
        Image failed to load.
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg shadow-lg object-contain ${className}`}
      onError={handleImageError}
    />
  );
};

// Social Link Component
const SocialLink = ({ icon, name, url, tagline }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-4 bg-[#4A2E70] rounded-lg shadow-md hover:bg-[#5E3A8A] transition-all duration-300 transform hover:scale-105 border border-[#7B5CA8] w-36 sm:w-48"
  >
    <i className={`${icon} text-4xl text-[#00FFFF] mb-2`}></i>
    <span className="text-lg font-semibold text-[#FF00FF]" style={{ fontFamily: 'Electrolize, sans-serif' }}>{name}</span>
    <span className="text-sm text-[#E0D9ED] text-center">{tagline}</span>
  </a>
);


export default App;