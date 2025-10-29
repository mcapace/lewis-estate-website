'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div style={{width: '100vw', height: '6328px', position: 'relative', background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, #0D0D0D 65%)', margin: 0, padding: 0}}>
      <div style={{width: '1440px', left: '50%', top: '0px', transform: 'translateX(-50%)', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        
        {/* Hero Section */}
        <div style={{width: '1440px', height: '850px', paddingLeft: '155px', paddingRight: '155px', position: 'relative', background: 'var(--Brand-Black, #0D0D0D)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
          <div style={{width: '1440px', height: '849px', left: '0px', top: '1px', position: 'absolute', overflow: 'hidden'}}>
          <Image
              style={{width: '1440px', height: '850px', left: '0px', top: '0px', position: 'absolute'}}
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              width={1440}
              height={850}
              priority
            className="object-cover"
            />
            <div style={{width: '1440px', height: '849px', left: '0px', top: '0px', position: 'absolute', background: 'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 0.65) 100%)'}}></div>
          </div>
          <div style={{alignSelf: 'stretch', flex: '1 1 0', position: 'relative', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '32px', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', wordWrap: 'break-word'}}>
                The Home of Big Reds and Sexy Chardonnays
              </div>
              <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#E5C1A0', fontSize: '54px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '64px', letterSpacing: '1.08px', wordWrap: 'break-word'}}>
              Napa Valley's Ultimate Experience Awaits
              </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: '80px', paddingRight: '80px', justifyContent: 'center', alignItems: 'flex-start', gap: '10px', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
              </div>
            </div>
            <div data-property-1="Main" style={{width: '121.88px', height: '74px', left: '565px', top: '850px', position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: '122px', height: '74px', left: '0px', top: '0px', position: 'absolute', overflow: 'hidden'}}>
                <Image
                  style={{width: '61px', height: '74px', left: '0px', top: '0px', position: 'absolute'}}
                  src="/_Assets/ws_lewis_product_showcase.png"
                  alt="Wine Bottle"
                  width={61}
                  height={74}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div style={{width: '1440px', height: '128px', paddingLeft: '40px', paddingRight: '40px', paddingTop: '32px', paddingBottom: '32px', left: '0px', top: '0px', position: 'absolute', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: '186px', display: 'inline-flex'}}>
            <div style={{width: '193px', height: '58px', position: 'relative'}}>
              <div style={{width: '168.88px', height: '45.92px', left: '12.06px', top: '6.04px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  src="/_Assets/WSlogoWhite-stroke (2) (4) (3).png"
                  alt="Wine Spectator Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <div style={{left: '412px', top: '40px', position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'flex'}}>
              <div style={{height: '48px', paddingTop: '16px', paddingBottom: '16px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', wordWrap: 'break-word'}}>
                  wine tastings
                </div>
              </div>
              <div style={{height: '48px', paddingTop: '16px', paddingBottom: '16px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', wordWrap: 'break-word'}}>
                  culinary experiences
                </div>
              </div>
              <div style={{height: '48px', paddingTop: '16px', paddingBottom: '16px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', wordWrap: 'break-word'}}>
                  salon privé
                </div>
              </div>
              <div style={{height: '48px', paddingTop: '16px', paddingBottom: '16px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                <div style={{textAlign: 'center', color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1.44px', wordWrap: 'break-word'}}>
                  wines
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div style={{width: '1440px', height: '500px', paddingTop: '135px', paddingLeft: '271px', paddingRight: '271px', background: '#0D0D0D', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '64px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#E5C1A0', fontSize: '64px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', letterSpacing: '0.32px', wordWrap: 'break-word'}}>
            "A record of excellence that few<br/>California wineries can rival."
          </div>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', fontSize: '18px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: '5.76px', wordWrap: 'break-word'}}>
            -James Laube, wine spectator
          </div>
          <div style={{width: '213.33px', height: '64px', position: 'relative'}}></div>
        </div>

        {/* Wine Tastings & Culinary Section */}
        <div style={{alignSelf: 'stretch', height: '1858px', paddingTop: '40px', paddingLeft: '155px', paddingRight: '155px', background: '#0D0D0D', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
          <div style={{height: '1363px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: '139px', display: 'inline-flex'}}>
              <div style={{width: '438px', paddingTop: '128px', paddingBottom: '256px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', wordWrap: 'break-word'}}>
                    A Sensory Experience
                  </div>
                  <div style={{color: '#E5C1A0', fontSize: '54px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '64px', letterSpacing: '2.16px', wordWrap: 'break-word'}}>
                    Wine Tastings
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                    Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
                  </div>
                </div>
                <div style={{height: '55px', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '24px', paddingRight: '24px', background: '#D3A737', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                  <div style={{textAlign: 'center', color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                    Book A wine tasting
                  </div>
                </div>
              </div>
              <div style={{width: '553px', alignSelf: 'stretch', position: 'relative'}}>
                <div style={{width: '553px', height: '672px', left: '0px', top: '0px', position: 'absolute', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden'}}>
                  <Image
                    style={{width: '1136px', height: '758px', left: '-310px', top: '-74px', position: 'absolute'}}
                    src="/_Assets/ws_lewis_wine_tastings.png"
                    alt="Wine Tastings"
                    width={1136}
                    height={758}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div style={{width: '1130px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '139px', display: 'inline-flex'}}>
              <div style={{width: '438px', alignSelf: 'stretch', position: 'relative'}}>
                <div style={{width: '481px', height: '639px', left: '0px', top: '0px', position: 'absolute', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden'}}>
                  <Image
                    style={{width: '513px', height: '651px', left: '-17px', top: '0px', position: 'absolute'}}
                    src="/_Assets/ws_lewis_culinary_exp.png"
                    alt="Culinary Experience"
                    width={513}
                    height={651}
                    className="object-cover"
                  />
                </div>
              </div>
              <div style={{width: '438px', paddingTop: '201px', paddingBottom: '256px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                  <div style={{color: 'var(--Brand-White, white)', fontSize: '14px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '4.48px', wordWrap: 'break-word'}}>
                    A Magical Interplay
                  </div>
                  <div style={{alignSelf: 'stretch', color: 'var(--Secondary-Light-Gold-(Drk-BG), #E5C1A0)', fontSize: '54px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '54px', letterSpacing: '2.16px', wordWrap: 'break-word'}}>
                    Culinary Experiences
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                    Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
                  </div>
                </div>
                <div style={{height: '55px', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '24px', paddingRight: '24px', background: '#D3A737', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                  <div style={{textAlign: 'center', color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                    book a taste of lewis
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{width: '357px', height: '406px', position: 'relative'}}>
            <div style={{width: '357px', height: '310px', left: '-196px', top: '-40px', position: 'absolute', background: 'var(--Secondary-CTA-Gold-(Drk-BG), #EFE5DA)', overflow: 'hidden'}}>
              <Image
                style={{width: '357px', height: '536px', left: '0px', top: '-185px', position: 'absolute'}}
                src="/_Assets/ws_lewis_hallway.png"
                alt="Hallway"
                width={357}
                height={536}
                className="object-cover"
              />
            </div>
          </div>
        </div>

      {/* Salon Privé Section */}
        <div style={{alignSelf: 'stretch', height: '900px', position: 'relative', background: '#0D0D0D', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'flex'}}>
          <Image
            style={{width: '1440px', height: '850px', left: '0px', top: '-10px', position: 'absolute'}}
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            width={1440}
            height={850}
            className="object-cover"
          />
          <div style={{width: '1130px', left: '155px', top: '560px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '32px', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', wordWrap: 'break-word'}}>
                  enter A Secluded World
                </div>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Secondary-Light-Gold-(Drk-BG), #E5C1A0)', fontSize: '54px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '64px', letterSpacing: '2.16px', wordWrap: 'break-word'}}>
              Salon Privé
                </div>
              </div>
              <div style={{alignSelf: 'stretch', paddingLeft: '80px', paddingRight: '80px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                  Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove,<br/>on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés,<br/>access to their private cellar, private car service, and more.
                </div>
              </div>
            </div>
            <div style={{height: '55px', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '24px', paddingRight: '24px', background: '#D3A737', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
              <div style={{textAlign: 'center', color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                Explore the salon privé
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div style={{width: '1440px', height: '900px', paddingLeft: '155px', paddingRight: '155px', position: 'relative', background: '#0D0D0D', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
              <Image
            style={{width: '1440px', height: '850px', left: '0px', top: '0px', position: 'absolute'}}
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            width={1440}
            height={850}
            className="object-cover"
          />
          <div style={{width: '1130px', left: '155px', top: '603px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '32px', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Brand-White, white)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '5.12px', wordWrap: 'break-word'}}>
                  the Cellar Awaits
                </div>
                <div style={{textAlign: 'center', color: 'var(--Secondary-Light-Gold-(Drk-BG), #E5C1A0)', fontSize: '54px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '300', lineHeight: '64px', letterSpacing: '2.16px', wordWrap: 'break-word'}}>
                  Discover Lewis Wines
                </div>
              </div>
              <div style={{alignSelf: 'stretch', paddingLeft: '80px', paddingRight: '80px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', textAlign: 'center', color: 'var(--UI-Lightest-Grey, #F4F4F4)', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                  Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
                </div>
              </div>
            </div>
            <div style={{height: '55px', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '24px', paddingRight: '24px', background: '#D3A737', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
              <div style={{textAlign: 'center', color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                Explore wines
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div style={{width: '1440px', paddingTop: '80px', paddingBottom: '80px', position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'flex'}}>
              <Image
            style={{width: '1440px', height: '478px', left: '0px', top: '0px', position: 'absolute', background: 'linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)', backgroundBlendMode: 'overlay, normal'}}
            src="/_Assets/ws_lewis_hero.png"
            alt="Footer Background"
            width={1440}
            height={478}
            className="object-cover"
          />
          <div style={{paddingLeft: '848px', paddingRight: '155px', position: 'relative', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: '437px', paddingTop: '32px', paddingBottom: '40px', paddingLeft: '32px', paddingRight: '32px', background: 'var(--Brand-Black, #0D0D0D)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
              <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                <div style={{width: '389px', color: '#E5C1A0', fontSize: '32px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                  Lewis Cellars
                </div>
                <div style={{width: '389px', opacity: '0.80', color: '#F4F4F4', fontSize: '20px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '400', lineHeight: '32px', letterSpacing: '0.50px', wordWrap: 'break-word'}}>
                  Monday–Sunday, 10:00 a.m.–4:30 p.m.<br/>6320 Silverado Trail Napa, CA 94558<br/>707.255.3400
                </div>
              </div>
              <div style={{height: '55px', paddingTop: '18px', paddingBottom: '19px', paddingLeft: '24px', paddingRight: '24px', background: '#D3A737', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'var(--Brand-Black, #0D0D0D)', fontSize: '16px', fontFamily: 'Neue Haas Grotesk Display Std', fontWeight: '600', textTransform: 'uppercase', lineHeight: '18px', letterSpacing: '0.64px', wordWrap: 'break-word'}}>
                  Visitor Information
                </div>
              </div>
            </div>
            <Image
              style={{width: '61.11px', height: '74px', left: '394px', top: '99px', position: 'absolute'}}
              src="/_Assets/ws_lewis_product_showcase.png"
              alt="Wine Bottle"
              width={61}
              height={74}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{width: '1440px', height: '520px', position: 'relative', background: '#020202', overflow: 'hidden'}}>
          <Image
            style={{width: '2048px', height: '540.50px', left: '-304px', top: '-10px', position: 'absolute'}}
            src="/_Assets/ws_lewis_hero.png"
            alt="Background"
            width={2048}
            height={540}
            className="object-cover"
          />
          <div style={{width: '201px', height: '65px', left: '618px', top: '13px', position: 'absolute', background: '#040404'}}></div>
        </div>
      </div>
    </div>
  )
}