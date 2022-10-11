import React from 'react'
import { styled, keyframes } from '@stitches/react'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { blackA } from '@radix-ui/colors'
import { Grid, Page } from 'artax-ui'
import * as LabelPrimitive from '@radix-ui/react-label'

import type { NextPage } from 'next'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import Frame from '@/components/Frame'

interface FormValues {
  name: string
  email: string
  details: string
  honeyPot: boolean
}

export const _H1 = styled('h1', {
  fontSize: '1.5rem',
  margin: `0`,
})

const _FieldGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: `100%`,
  maxWidth: 420,
})

const _Label = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: `$accentText`,
  userSelect: 'none',
})

const _Field = {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '.5rem',
  width: `100%`,
  boxSizing: 'border-box',
  maxWidth: 420,
  fontSize: 15,
  lineHeight: 1,
  color: '$accentTextContrast',
  backgroundColor: '$accentBgSubtle',
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  textShadow: `0 1px 0 $grayA1`,
  '&:focus': { boxShadow: `0 0 0 1px $indigo6` },
}

const _Input = styled('input', {
  ..._Field,
})

const _Textbox = styled('textarea', {
  ..._Field,
  height: 200,
})

const _HoneyPot = styled('input', {
  visibility: 'hidden',
  display: 'none',
})

const _AnimRotate = keyframes({
  to: {
    '--angle': '360deg',
  },
})

const _Submit = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: `.5rem`,
  background: '$accentBase',
  '--angle': '0deg',
  borderRadius: 9999,
  border: 'double 4px transparent',
  padding: `.5rem 1rem`,
  backgroundImage:
    'linear-gradient($gray1, $gray1), linear-gradient(var(--angle), $indigo7, $indigo10)',
  animation: `10s ${_AnimRotate} linear infinite`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  transition:
    'scale 0.15s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out',
  boxShadow: '0 2px 6px 2px $blackA6',
  '&:focus, &:hover': {
    outline: 'none',
    backgroundImage:
      'linear-gradient($gray1, $gray1), linear-gradient(var(--angle), $indigo8, $indigo11)',
    scale: 1.05,
    transform: `translateY(-3px)`,
    boxShadow: '0 4px 8px 2px $blackA5',
  },
})

const ContactPage: NextPage = () => {
  return (
    <Page
      title={`Contact Ashley to Book Your Next Photo Shoot`}
      description={`Contact Ashley to book your next conceptual portraiture, boudoir, or underwater photo shoot.`}
    >
      <Frame>
        <_H1>Contact</_H1>
        <p style={{ maxWidth: 640 }}>
          To book a shoot with Ashley Petersen, please provide a few details
          about the project using the form below and a representative will reach
          out within a few days.
        </p>
        <Formik
          initialValues={{
            name: '',
            email: '',
            details: '',
            honeyPot: false,
          }}
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>,
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              console.log(values.honeyPot)
              setSubmitting(false)
            }, 500)
          }}
        >
          <Form>
            <Grid
              css={{
                padding: '0 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: `3rem`,
                alignItems: 'center',
                width: `100vw`,
              }}
            >
              {/* Name */}
              <_FieldGroup>
                <_Label htmlFor="name">Name</_Label>
                <_Input type="text" id="name" required />
              </_FieldGroup>

              {/* Email */}
              <_FieldGroup>
                <_Label htmlFor="email">Email</_Label>
                <_Input type="email" id="email" required />
              </_FieldGroup>

              {/* Details */}
              <_FieldGroup>
                <_Label htmlFor="details">Project Details</_Label>
                <_Textbox type="textbox" id="details" required />
              </_FieldGroup>

              {/* Honey Pot */}
              <_HoneyPot type="checkbox" id="honeypot" />

              {/* Button */}
              <_Submit type="submit">
                Submit <PaperPlaneIcon />
              </_Submit>
            </Grid>
          </Form>
        </Formik>
      </Frame>
    </Page>
  )
}

export default ContactPage
