import { FormFieldTemplateElement } from '../form';

import { BasicPromptOpts } from './prompt';
import { formPrompt } from './form';

export function textPrompt(inputs: string[], opts: BasicPromptOpts) {
	const fields: FormFieldTemplateElement[] = inputs.map((name) => ({
		name,
		placeholder: name,
	}));

	return formPrompt(fields, opts);
}
