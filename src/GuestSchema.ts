import Ajv, { JSONSchemaType } from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

type FormData = {
  firstName: string;
  lastName: string;
  workExperience: number;
};

const schema: JSONSchemaType<FormData> = {
  title: 'Guest',
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    workExperience: {
      description: 'Work experience in years',
      type: 'integer',
      minimum: 0,
      maximum: 100,
    },
  },
  required: ['firstName', 'lastName'],
};

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  keywords: ['uniforms'],
});

function createValidator<T>(schema: JSONSchemaType<T>) {
  const validator = ajv.compile(schema as any);

  return (model: Record<string, unknown>) => {
    validator(model);
    console.log(validator.errors);

    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge({
  schema,
  validator: schemaValidator,
});
