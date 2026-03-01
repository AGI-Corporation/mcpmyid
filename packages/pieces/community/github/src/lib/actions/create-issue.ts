import { createAction, Property } from '@activepieces/pieces-framework';
import { githubAuth } from '../../';
import { githubApiCall, githubCommon } from '../common';
import { HttpMethod } from '@activepieces/pieces-common';

export const githubCreateIssueAction = createAction({
	auth: githubAuth,
	name: 'github_create_issue',
	displayName: 'Create Issue',
	aiDescription: 'Create a new issue in a GitHub repository. Use this to track bugs, tasks, or features discussed in the prompt.',
	description: 'Create Issue in GitHub Repository',
	props: {
		repository: githubCommon.repositoryDropdown,
		title: Property.ShortText({
			displayName: 'Title',
			aiDescription: 'A concise and descriptive title for the issue.',
			description: 'The title of the issue',
			required: true,
			examples: ['Bug: Sidebar not closing on mobile', 'Feature: Add Mistral AI integration']
		}),
		description: Property.LongText({
			displayName: 'Description',
			aiDescription: 'Detailed information about the issue. Include steps to reproduce if it is a bug.',
			description: 'The description of the issue',
			required: false,
		}),
		labels: githubCommon.labelDropDown(),
		assignees: githubCommon.assigneeDropDown(),
	},
	async run({ auth, propsValue }) {
		const { title, assignees, labels, description } = propsValue;
		const { owner, repo } = propsValue.repository!;

		const issueFields:Record<string, any> = {
			title,
			body: description,
		}

		if (labels) {
			issueFields['labels'] = labels;
		}

		if (assignees) {
			issueFields['assignees'] = assignees;
		}

		const response = await githubApiCall({
			accessToken: auth.access_token,
			method: HttpMethod.POST,
			resourceUri: `/repos/${owner}/${repo}/issues`,
			body: issueFields,
		});

		return response;
	},
});
