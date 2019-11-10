import { BasePromptOpts } from './prompt';
import { useFormPrompt } from './form';

export function useTextPrompt(inputs: string[], opts: BasePromptOpts) {
	const fields = inputs.map((name) => ({
		name,
		placeholder: name,
	}));

	return useFormPrompt(fields, opts);
}
