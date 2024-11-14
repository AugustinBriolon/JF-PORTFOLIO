import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      S.documentTypeListItem('projects').title('Project'),
    ])
