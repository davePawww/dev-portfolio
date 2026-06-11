import {experienceSchemaTypes} from './experience'
import {profileSchemaTypes} from './profile'
import {projectSchemaTypes} from './project'

export const schemaTypes = [...profileSchemaTypes, ...experienceSchemaTypes, ...projectSchemaTypes]
