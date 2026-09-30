import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { applicantsDescription } from './resources/applicants';
import { jobsDescription } from './resources/jobs';

export class ApideckAts implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apideck Ats',
                name: 'N8nDevApideckAts',
                icon: { light: 'file:./apideck-ats.png', dark: 'file:./apideck-ats.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Welcome to the ATS API.',
                defaults: { name: 'Apideck Ats' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApideckAtsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Applicants",
					"value": "Applicants",
					"description": ""
				},
				{
					"name": "Jobs",
					"value": "Jobs",
					"description": ""
				}
			],
			"default": ""
		},
		...applicantsDescription,
		...jobsDescription
                ],
        };
}
