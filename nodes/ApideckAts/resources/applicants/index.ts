import type { INodeProperties } from 'n8n-workflow';

export const applicantsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					]
				}
			},
			"options": [
				{
					"name": "Applicants All",
					"value": "Applicants All",
					"action": "List applicants",
					"description": "List applicants",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ats/applicants"
						}
					}
				},
				{
					"name": "Applicants Add",
					"value": "Applicants Add",
					"action": "Create applicant",
					"description": "Create applicant",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ats/applicants"
						}
					}
				},
				{
					"name": "Applicants One",
					"value": "Applicants One",
					"action": "Get applicant",
					"description": "Get applicant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ats/applicants/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ats/applicants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"job_id\": \"1234\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants All"
					]
				}
			}
		},
		{
			"displayName": "POST /ats/applicants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Anonymized",
			"name": "anonymized",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "anonymized",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Applications",
			"name": "applications",
			"type": "json",
			"default": "[\n  \"a0d636c6-43b3-4bde-8c70-85b707d992f4\",\n  \"a98lfd96-43b3-4bde-8c70-85b707d992e6\"\n]",
			"routing": {
				"send": {
					"property": "applications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "archived",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "2000-08-12",
			"description": "The date of birth of the person.",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Confidential",
			"name": "confidential",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "confidential",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Coordinator ID",
			"name": "coordinator_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "coordinator_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Cover Letter",
			"name": "cover_letter",
			"type": "string",
			"default": "I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...",
			"routing": {
				"send": {
					"property": "cover_letter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Employee Level\",\n    \"id\": \"2389328923893298\",\n    \"name\": \"employee_level\",\n    \"value\": \"Uses Salesforce and Marketo\"\n  }\n]",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Cv URL",
			"name": "cv_url",
			"type": "string",
			"default": "https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220514T235654Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f",
			"routing": {
				"send": {
					"property": "cv_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "deleted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Deleted At",
			"name": "deleted_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The time at which the object was deleted.",
			"routing": {
				"send": {
					"property": "deleted_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Deleted By",
			"name": "deleted_by",
			"type": "string",
			"default": "12345",
			"description": "The user who deleted the object.",
			"routing": {
				"send": {
					"property": "deleted_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"description": "The first name of the person.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Followers",
			"name": "followers",
			"type": "json",
			"default": "[\n  \"a0d636c6-43b3-4bde-8c70-85b707d992f4\",\n  \"a98lfd96-43b3-4bde-8c70-85b707d992e6\"\n]",
			"routing": {
				"send": {
					"property": "followers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Headline",
			"name": "headline",
			"type": "string",
			"default": "PepsiCo, Inc, Central Perk",
			"description": "Typically a list of previous companies where the contact has worked or schools that the contact has attended",
			"routing": {
				"send": {
					"property": "headline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "EM",
			"description": "The initials of the person, usually derived from their first, middle, and last names.",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Job URL",
			"name": "job_url",
			"type": "string",
			"default": "https://democompany.recruitee.com/o/example-talent-pool",
			"routing": {
				"send": {
					"property": "job_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Last Interaction At",
			"name": "last_interaction_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "last_interaction_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"description": "The last name of the person.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "D.",
			"description": "Middle name of the person.",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Elon Musk",
			"description": "The name of an applicant.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "54321",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Photo URL",
			"name": "photo_url",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"description": "The URL of the photo of a person.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Position ID",
			"name": "position_id",
			"type": "string",
			"default": "123",
			"description": "The PositionId the applicant applied for.",
			"routing": {
				"send": {
					"property": "position_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Record URL",
			"name": "record_url",
			"type": "string",
			"default": "https://app.intercom.io/contacts/12345",
			"routing": {
				"send": {
					"property": "record_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Recruiter ID",
			"name": "recruiter_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "recruiter_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Rejected At",
			"name": "rejected_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "rejected_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Social Links",
			"name": "social_links",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"twitter\",\n    \"url\": \"https://www.twitter.com/apideck-io\"\n  }\n]",
			"routing": {
				"send": {
					"property": "social_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Sourced By",
			"name": "sourced_by",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "sourced_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Sources",
			"name": "sources",
			"type": "json",
			"default": "[\n  \"Job site\"\n]",
			"routing": {
				"send": {
					"property": "sources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Stage ID",
			"name": "stage_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "stage_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"New\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "CEO",
			"description": "The job title of the person.",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "Websites",
			"name": "websites",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"primary\",\n    \"url\": \"http://example.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "websites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants Add"
					]
				}
			}
		},
		{
			"displayName": "GET /ats/applicants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicants"
					],
					"operation": [
						"Applicants One"
					]
				}
			}
		},
];
