'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-[1640px] h-[6328px] relative bg-neutral-200">
      <div className="w-[1440px] left-[100px] top-[100px] absolute inline-flex flex-col justify-start items-start">
        
        {/* Hero Section */}
        <div className="w-[1440px] h-[850px] px-40 relative bg-Brand-Black flex flex-col justify-start items-center overflow-hidden">
          <div className="w-[1440px] h-[849px] left-0 top-[1px] absolute overflow-hidden">
          <Image
              className="w-[1440px] h-[850px] left-0 top-0 absolute"
              src="/_Assets/ws_lewis_hero.png"
              alt="Lewis Estate Hero"
              width={1440}
              height={850}
            priority
          />
            <div className="w-[1440px] h-[849px] left-0 top-0 absolute bg-gradient-to-b from-stone-950/0 to-stone-950/60" />
          </div>
          <div className="self-stretch flex-1 relative flex flex-col justify-end items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-Brand-White text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-[5.12px]">
                The Home of Big Reds and Sexy Chardonnays
              </div>
              <div className="self-stretch text-center justify-start text-orange-200 text-5xl font-light font-['Neue_Haas_Grotesk_Display_Std'] leading-[64px] tracking-wide">
              Napa Valley's Ultimate Experience Awaits
              </div>
            </div>
            <div className="self-stretch px-20 inline-flex justify-center items-start gap-2.5">
              <div className="flex-1 text-center justify-start text-UI-Lightest-Grey text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                With exquisite, award-winning wines, succulent cuisine from their MICHELIN-Starred chef, evocative artwork, and their exclusive Salon Privé – the new Lewis Estate is more than a tasting room. It's Napa Valley's ultimate indulgence.
              </div>
            </div>
            <div data-property-1="Main" className="w-32 h-20 left-[565px] top-[850px] absolute overflow-hidden">
              <div className="w-32 h-20 left-0 top-0 absolute overflow-hidden">
                <Image
                  className="w-16 h-20 left-0 top-0 absolute"
                  src="/_Assets/ws_lewis_product_showcase.png"
                  alt="Wine Bottle"
                  width={61}
                  height={74}
                />
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-32 px-10 py-8 left-0 top-0 absolute inline-flex justify-start items-center gap-48 overflow-hidden">
            <div className="w-48 h-14 relative">
              <div className="w-44 h-11 left-[12.06px] top-[6.04px] absolute bg-black" />
            </div>
            <div className="left-[412px] top-[40px] absolute flex justify-start items-start gap-10">
              <div className="h-12 py-4 border-Brand-Gold-(Drk-BG) flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-UI-Lightest-Grey text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase tracking-wider">
                  wine tastings
                </div>
              </div>
              <div className="h-12 py-4 border-Brand-Gold-(Drk-BG) flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-UI-Lightest-Grey text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase tracking-wider">
                  culinary experiences
                </div>
              </div>
              <div className="h-12 py-4 border-b-2 flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-UI-Lightest-Grey text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase tracking-wider">
                  salon privé
                </div>
              </div>
              <div className="h-12 py-4 border-Brand-Gold-(Drk-BG) flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-Brand-White text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase tracking-wider">
                  wines
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="w-[1440px] h-[500px] px-64 pt-32 bg-stone-950 flex flex-col justify-center items-center gap-16">
          <div className="self-stretch text-center justify-start text-orange-200 text-6xl font-light font-['Neue_Haas_Grotesk_Display_Std'] tracking-tight">
            "A record of excellence that few<br/>California wineries can rival."
          </div>
          <div className="self-stretch text-center justify-start text-Secondary-CTA-Gold-(Drk-BG) text-lg font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-5 tracking-[5.76px]">
            -James Laube, wine spectator
          </div>
          <div className="w-52 h-16 relative" />
        </div>

        {/* Wine Tastings & Culinary Section */}
        <div className="self-stretch h-[1858px] px-40 pt-10 bg-stone-950 flex flex-col justify-start items-end">
          <div className="h-[1363px] flex flex-col justify-start items-start">
            <div className="inline-flex justify-start items-start gap-36">
              <div className="w-96 pt-32 pb-64 inline-flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-Brand-White text-sm font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-[4.48px]">
                    A Sensory Experience
                  </div>
                  <div className="justify-start text-orange-200 text-5xl font-light font-['Neue_Haas_Grotesk_Display_Std'] leading-[64px] tracking-widest">
                    Wine Tastings
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-UI-Lightest-Grey text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                    Explore the passion and craftsmanship of Lewis' winemaking with unique experiences designed to delight your every sense.
                  </div>
                </div>
                <div className="h-14 px-6 pt-4 pb-5 bg-orange-400 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-start text-Brand-Black text-base font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-wide">
                    Book A wine tasting
                  </div>
                </div>
              </div>
              <div className="w-[553px] self-stretch relative">
                <div className="w-[553px] h-[672px] left-0 top-0 absolute bg-Secondary-CTA-Gold-(Drk-BG) overflow-hidden">
                  <Image
                    className="w-[1136px] h-[758px] left-[-310px] top-[-74px] absolute"
                    src="/_Assets/ws_lewis_wine_tastings.png"
                    alt="Wine Tastings"
                    width={1136}
                    height={758}
                  />
                </div>
              </div>
            </div>
            <div className="w-[1130px] inline-flex justify-start items-start gap-36">
              <div className="w-96 self-stretch relative">
                <div className="w-[481px] h-[639px] left-0 top-0 absolute bg-Secondary-CTA-Gold-(Drk-BG) overflow-hidden">
                  <Image
                    className="w-[513px] h-[651px] left-[-17px] top-0 absolute"
                    src="/_Assets/ws_lewis_culinary_exp.png"
                    alt="Culinary Experience"
                    width={513}
                    height={651}
                  />
                </div>
              </div>
              <div className="w-96 pt-52 pb-64 inline-flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="justify-start text-Brand-White text-sm font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-[4.48px]">
                    A Magical Interplay
                  </div>
                  <div className="self-stretch justify-start text-Secondary-Light-Gold-(Drk-BG) text-5xl font-light font-['Neue_Haas_Grotesk_Display_Std'] leading-[54px] tracking-widest">
                    Culinary Experiences
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-UI-Lightest-Grey text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                    Indulge in their MICHELIN-Starred chef's culinary experiences curated to heighten your every sensation.
                  </div>
                </div>
                <div className="h-14 px-6 pt-4 pb-5 bg-orange-400 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-start text-Brand-Black text-base font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-wide">
                    book a taste of lewis
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 relative">
            <div className="w-96 h-80 left-[-196px] top-[-40px] absolute bg-Secondary-CTA-Gold-(Drk-BG) overflow-hidden">
              <Image
                className="w-96 h-[536px] left-0 top-[-185px] absolute"
                src="/_Assets/ws_lewis_hallway.png"
                alt="Hallway"
                width={357}
                height={536}
              />
            </div>
          </div>
        </div>

      {/* Salon Privé Section */}
        <div className="self-stretch h-[900px] relative bg-stone-950 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <Image
            className="w-[1440px] h-[850px] left-0 top-[-10px] absolute"
            src="/_Assets/ws_lewis_salon_prive.png"
            alt="Salon Privé"
            width={1440}
            height={850}
          />
          <div className="w-[1130px] left-[155px] top-[560px] absolute flex flex-col justify-start items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch text-center justify-start text-Brand-White text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-[5.12px]">
                  enter A Secluded World
                </div>
                <div className="self-stretch text-center justify-start text-Secondary-Light-Gold-(Drk-BG) text-5xl font-light font-['Neue_Haas_Grotesk_Display_Std'] leading-[64px] tracking-widest">
              Salon Privé
                </div>
              </div>
              <div className="self-stretch px-20 inline-flex justify-start items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-UI-Lightest-Grey text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                  Luxuriate in the intimacy of your own private enclave for two. You and one guest will enjoy white glove,<br/>on-call concierge service, customizable menus, access to both indoor and outdoor Salons Privés,<br/>access to their private cellar, private car service, and more.
                </div>
              </div>
            </div>
            <div className="h-14 px-6 pt-4 pb-5 bg-orange-400 inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-Brand-Black text-base font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-wide">
                Explore the salon privé
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wines Section */}
        <div className="w-[1440px] h-[900px] px-40 relative bg-stone-950 inline-flex justify-center items-start">
              <Image
            className="w-[1440px] h-[850px] left-0 top-0 absolute"
            src="/_Assets/ws_lewis_product_showcase.png"
            alt="Wine Showcase"
            width={1440}
            height={850}
          />
          <div className="w-[1130px] left-[155px] top-[603px] absolute inline-flex flex-col justify-start items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch text-center justify-start text-Brand-White text-base font-normal font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-[5.12px]">
                  the Cellar Awaits
                </div>
                <div className="text-center justify-start text-Secondary-Light-Gold-(Drk-BG) text-5xl font-light font-['Neue_Haas_Grotesk_Display_Std'] leading-[64px] tracking-widest">
                  Discover Lewis Wines
                </div>
              </div>
              <div className="self-stretch px-20 inline-flex justify-start items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-UI-Lightest-Grey text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                  Explore Lewis' cellar of legendary wines and discover your favorite big reds and sexy chardonnays.
                </div>
              </div>
            </div>
            <div className="h-14 px-6 pt-4 pb-5 bg-orange-400 inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-Brand-Black text-base font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-wide">
                Explore wines
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-[1440px] py-20 relative flex flex-col justify-start items-start gap-2.5">
          <div className="w-[1440px] h-[478px] left-0 top-0 absolute bg-blend-overlay bg-neutral-400" />
          <div className="pl-[848px] pr-40 relative flex flex-col justify-start items-start overflow-hidden">
            <div className="w-96 px-8 pt-8 pb-10 bg-Brand-Black flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="w-96 justify-start text-orange-200 text-3xl font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                  Lewis Cellars
                </div>
                <div className="w-96 opacity-80 justify-start text-zinc-100 text-xl font-normal font-['Neue_Haas_Grotesk_Display_Std'] leading-8 tracking-wide">
                  Monday–Sunday, 10:00 a.m.–4:30 p.m.<br/>6320 Silverado Trail Napa, CA 94558<br/>707.255.3400
                </div>
              </div>
              <div className="h-14 px-6 pt-4 pb-5 bg-orange-400 inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-Brand-Black text-base font-['Neue_Haas_Grotesk_Display_Std'] uppercase leading-4 tracking-wide">
                  Visitor Information
                </div>
              </div>
            </div>
            <Image
              className="w-16 h-20 left-[394px] top-[99px] absolute"
              src="/_Assets/ws_lewis_product_showcase.png"
              alt="Wine Bottle"
              width={61}
              height={74}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-[1440px] h-[520px] relative bg-black overflow-hidden">
          <Image
            className="w-[2048px] h-[540.50px] left-[-304px] top-[-10px] absolute"
            src="/_Assets/ws_lewis_hero.png"
            alt="Background"
            width={2048}
            height={540}
          />
          <div className="w-52 h-16 left-[618px] top-[13px] absolute bg-black" />
        </div>
      </div>
    </div>
  )
}