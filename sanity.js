import createImageUrlBuilder from '@sanity/image-url'
import createClient from '@sanity/client'
import { createCurrentUserHook } from 'next-sanity'

export const config = {
  projectId: 'vt85il9r',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}


export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)
