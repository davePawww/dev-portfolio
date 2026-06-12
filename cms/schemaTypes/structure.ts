import type {StructureResolver} from 'sanity/structure'
import {profileSingletonId} from './profile'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId(profileSingletonId)
            .title('Profile'),
        ),
      S.divider(),
      S.listItem()
        .title('Technologies')
        .child(
          S.list()
            .title('Technologies')
            .items([
              S.documentTypeListItem('techCategory').title('Categories'),
              S.documentTypeListItem('technology').title('Technologies'),
            ]),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['profile', 'techCategory', 'technology'].includes(item.getId() ?? ''),
      ),
    ])
