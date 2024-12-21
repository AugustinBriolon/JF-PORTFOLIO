import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {TypeProject} from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, TypeProject]
}
