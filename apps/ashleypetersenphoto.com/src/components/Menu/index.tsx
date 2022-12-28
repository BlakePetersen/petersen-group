'use client'

import { Root, Sub, Trigger } from '@radix-ui/react-dropdown-menu'
import { CaretRightIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Public_Sans } from '@next/font/google'

import useSWR from 'swr'
import groq from 'groq'
import { ConditionalWrap, SanityClient, ThemeSelector } from 'artax-ui'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import path from 'path'
import {
  _Content,
  _ExternalItem,
  _ExternalLinkIcon,
  _Item,
  _Separator,
  _TriggerIcon,
  _TriggerItem
} from '@/components/Menu/styles'

const publicSans = Public_Sans()

const Menu = () => {
  const { data: menuData } = useSWR(
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
    query => SanityClient.fetch(query)
  )

  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content align={'start'} sideOffset={8} className={publicSans.className}>
        {menuData?.sections?.map((section, i) => {
          const _internalLinkSlug =
            section?.internalLink?.slug === null
              ? `/`
              : section?.internalLink?.slug?.current
          const _navSectionSlug = _internalLinkSlug
            ? `/${_internalLinkSlug}`
            : section?.externalUrl
          return (
            _navSectionSlug && (
              <ConditionalWrap
                if={!!section.links}
                with={children => <Sub>{children}</Sub>}
                key={i}
              >
                {!!section?.externalUrl ? (
                  <a
                    href={_navSectionSlug}
                    target={`_blank`}
                    rel={`noreferrer noopener`}
                  >
                    <_ExternalItem>
                      {section.title} <_ExternalLinkIcon />
                    </_ExternalItem>
                  </a>
                ) : (
                  <Link href={_navSectionSlug}>
                    {section.links ? (
                      <_TriggerItem>
                        {section.title} <CaretRightIcon />
                      </_TriggerItem>
                    ) : (
                      <_Item>{section.title}</_Item>
                    )}
                  </Link>
                )}

                {section?.links && (
                  <_Content side={'right'} align={'start'} sideOffset={24}>
                    {section.links.map(
                      (link, i) =>
                        link?.internalLink?.slug?.current && (
                          <Link
                            href={path
                              .join(
                                _navSectionSlug,
                                link.internalLink.slug.current
                              )
                              .toString()}
                            key={i}
                          >
                            <_Item>{link.title}</_Item>
                          </Link>
                        )
                    )}
                  </_Content>
                )}
              </ConditionalWrap>
            )
          )
        })}

        <_Separator />
        <ThemeSelector useTheme={useTheme} />
      </_Content>
    </Root>
  )
}

export default Menu
