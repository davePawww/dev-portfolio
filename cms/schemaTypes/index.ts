import {experienceSchemaTypes} from './experience'
import {profileSchemaTypes} from './profile'
import {projectSchemaTypes} from './project'
import {technologySchemaTypes} from './technology'
import {techCategorySchemaTypes} from './techCategory'

export const schemaTypes = [
  ...profileSchemaTypes,
  ...experienceSchemaTypes,
  ...projectSchemaTypes,
  ...techCategorySchemaTypes,
  ...technologySchemaTypes,
]
