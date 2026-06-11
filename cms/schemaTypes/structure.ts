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
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'profile'),
    ])
