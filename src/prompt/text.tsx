import { FormFieldTemplateElement } from '../form';

import { BasicPromptOpts } from './prompt';
import { formPrompt } from './form';

export function textPrompt(inputs: string[], opts: BasicPromptOpts) {
	const fields: FormFieldTemplateElement[] = inputs.map((name) => {
		const label = name.replace(/^\w/, (c) => c.toUpperCase());
		return { name, label };
	});

	return formPrompt(fields, opts);
}
