import { NextPage } from 'next'

export type PageTypes = NextPage<{
  children: JSX.Element
  description: string
  title: string
}>
