import { useConnect } from 'wagmi'
import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import useSWR from '@zeit/swr'
import groq from 'groq'
import { ConditionalWrap, SanityClient } from 'artax-ui'

import { ThemeSelector } from '@/components/ThemeSelector'
import WalletConnector from '@/components/WalletConnector'
import Link from 'next/link'

import {
  _Content,
  _Item,
  _Label,
  _Separator,
  _TriggerIcon,
  _TriggerItem,
} from '@/components/Menu/menu.styles'

const Menu = () => {
  const [{ data: connectData, error: connectError, loading: connectLoading }] =
    useConnect()

  const { data } = useSWR(
    groq`*[_type == "navigation"][0]{...,
    sections[] { ... ,
      _type == "navigation.link" => {
      ...,
      internalLink {
        ...,
        "slug": @->slug
      },
      links[] {
        ...,
        internalLink {
          ...,
          "slug": @->slug
        },
        links[] {
          ...,
          internalLink {
            ...,
            "slug": @->slug
          },
        }
      }
     }}}`,
    query => SanityClient.fetch(query),
  )

  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content>
        {data?.sections &&
          data?.sections.map((section, i) => {
            console.log(section)

            return (
              section?.internalLink?.slug?.current && (
                <ConditionalWrap
                  if={!!section.links}
                  with={ch => <Root key={i}>{ch}</Root>}
                >
                  <Link href={section?.internalLink?.slug?.current || `ding`}>
                    <a>
                      {section.links ? (
                        <_TriggerItem>{section.title}</_TriggerItem>
                      ) : (
                        <_Item>{section.title}</_Item>
                      )}
                    </a>
                  </Link>

                  {!!section?.links && (
                    <_Content>
                      {section.links.map((link, i) => {
                        return (
                          link?.internalLink?.slug?.current && (
                            <Link
                              href={link.internalLink.slug.current || `ding`}
                              key={i}
                            >
                              <a>
                                <_Item>{link.title}</_Item>
                              </a>
                            </Link>
                          )
                        )
                      })}
                    </_Content>
                  )}
                </ConditionalWrap>
              )
            )
          })}

        <_Separator />
        <_Label>
          Authenticate
          {connectData.connected && `d via ${connectData?.connector?.name}`}
        </_Label>
        <WalletConnector />
        <_Separator />
        <_Label>Theme Selection</_Label>
        <ThemeSelector />
      </_Content>
    </Root>
  )
}

export default Menu
