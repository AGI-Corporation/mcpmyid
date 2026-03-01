import { createAction, Property } from '@activepieces/pieces-framework';
import { gitlabAuth } from '../../';
import { gitlabCommon, makeClient } from '../common';

export const createIssueAction = createAction({
  auth: gitlabAuth,
  name: 'create_issue',
  displayName: 'Create Issue',
  aiDescription: 'Create a project issue in GitLab. Essential for tracking development tasks and bug reports found in agent logs.',
  description: 'Create a project issue',
  props: {
    projectId: gitlabCommon.projectId(),
    title: Property.ShortText({
      displayName: 'Issue Title',
      aiDescription: 'Brief summary of the issue or task.',
      required: true,
      examples: ['fix(core): Resolve memory leak in NANDA manifest generation']
    }),
    description: Property.LongText({
      displayName: 'Issue Description',
      aiDescription: 'Markdown supported description of the problem or feature request.',
      required: false,
    }),
  },
  async run({ propsValue, auth }) {
    const { projectId, title, description } = propsValue;
    const client = makeClient({ auth });
    return await client.createProjectIssue(projectId as string, {
      title: title,
      description: description,
    });
  },
});
