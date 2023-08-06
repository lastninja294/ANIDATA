import { SchemaTypeDefinition } from 'sanity'

import blockContent from '~/schemas/blockContent'
import post from '~/schemas/post'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent],
}
