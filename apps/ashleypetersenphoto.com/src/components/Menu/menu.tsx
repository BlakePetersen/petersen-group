import { useState } from 'react'
import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, CaretRightIcon } from '@radix-ui/react-icons'

import { ConditionalWrap, SanityClient, ThemeSelector } from 'artax-ui'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const path = require('path')

import {
  _Content,
  _Item,
  _Label,
  _Separator,
  _TriggerIcon,
  _TriggerItem,
} from '@/components/Menu/menu.styles'
import { useRouter } from 'next/router'

export const Menu = ({ data }) => {
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
            const _navSectionSlug =
              `/${section?.internalLink?.slug?.current}` || section?.externalUrl
            return (
              _navSectionSlug && (
                <ConditionalWrap
                  if={section.links}
                  with={children => <Root>{children}</Root>}
                  key={i}
                >
                  <Link href={_navSectionSlug}>
                    <a>
                      {section.links ? (
                        <_TriggerItem>
                          {section.title} <CaretRightIcon />
                        </_TriggerItem>
                      ) : (
                        <_Item>{section.title}</_Item>
                      )}
                    </a>
                  </Link>

                  {section?.links && (
                    <_Content>
                      {section.links.map((link, i) => {
                        return (
                          link?.internalLink?.slug?.current && (
                            <Link
                              href={path
                                .join(
                                  _navSectionSlug,
                                  link.internalLink.slug.current,
                                )
                                .toString()}
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
        <ThemeSelector useTheme={useTheme} />
      </_Content>
    </Root>
  )
}
