import { useAccount, useConnect } from 'wagmi'
import { Root, Trigger } from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import useSWR from '@zeit/swr'
import groq from 'groq'
import { SanityClient } from 'ui/src/SanityClient'

import { ThemeSelector } from '@/components/ThemeSelector'
import WalletConnector from '@/components/ConnectWallet'
import Link from 'next/link'

import {
  _Arrow,
  _Content,
  _Item,
  _Label,
  _Separator,
  _TriggerIcon,
  _TriggerItem,
} from '@/components/Menu/styles'
import { Wrap } from '@/lib/Wrap'

const Menu = () => {
  const [{ data: connectData }] = useConnect(),
    [{ data: accountData }] = useAccount({
      fetchEns: true,
    })

  const { data, error } = useSWR(groq`*[_type == "navigation"][0]`, query =>
    SanityClient.fetch(query),
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
              <Wrap if={!!section.links} with={ch => <Root key={i}>{ch}</Root>}>
                <Link href={`section.url`}>
                  <a>
                    {section.links ? (
                      <_TriggerItem>{section.title}</_TriggerItem>
                    ) : (
                      <_Item>{section.title}</_Item>
                    )}
                  </a>
                </Link>

                {!!section.links && (
                  <_Content>
                    {section.links.map((link, i) => {
                      return (
                        <Link href={`section.url`} key={i}>
                          <a>
                            <_Item>{link.title}</_Item>
                          </a>
                        </Link>
                      )
                    })}
                    <_Arrow />
                  </_Content>
                )}
              </Wrap>
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
        <_Arrow />
      </_Content>
    </Root>
  )
}

export default Menu
