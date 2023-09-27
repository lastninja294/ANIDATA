import { SchemaTypeDefinition } from 'sanity'

import blockContent from '~/schemas/blockContent'
import post from '~/schemas/post'
import movie from '~/schemas/movie'
import fandub from '~/schemas/fandub'

export const schemaTypes = [post, blockContent, movie, fandub]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, movie, fandub],
}
