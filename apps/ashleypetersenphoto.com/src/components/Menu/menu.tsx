import { Root, Sub, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, CaretRightIcon } from '@radix-ui/react-icons'
import useSWR from 'swr'
import groq from 'groq'
import { ConditionalWrap, SanityClient, ThemeSelector } from 'artax-ui'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import path from 'path'
import {
  _Content,
  _Item,
  _Label,
  _Separator,
  _TriggerIcon,
  _TriggerItem,
} from '@/components/Menu/menu.styles'

export const Menu = () => {
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
    query => SanityClient.fetch(query),
  )

  return (
    <Root>
      <Trigger asChild>
        <_TriggerIcon>
          <HamburgerMenuIcon width={`2.5rem`} />
        </_TriggerIcon>
      </Trigger>

      <_Content align={'start'} sideOffset={8}>
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
                  <_Content side={'right'} align={'start'} sideOffset={24}>
                    {section.links.map(
                      (link, i) =>
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
                        ),
                    )}
                  </_Content>
                )}
              </ConditionalWrap>
            )
          )
        })}

        <_Separator />
        <_Label>Sign In</_Label>
        <ConnectButton
          label="Sign in"
          chainStatus="none"
          accountStatus="avatar"
        />

        <_Separator />
        <_Label>Color Mode</_Label>
        <ThemeSelector useTheme={useTheme} />
      </_Content>
    </Root>
  )
}
