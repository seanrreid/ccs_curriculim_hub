---
title: Practice with Fetch
sidebar_label: JS Fetch API
sidebar_position: 4.04
---

Use these exercises to practice working with the `fetch()` APIs, promises, and updating the DOM.

## Must Haves

- Create a new folder, initialize a git repository
- Create an `index.html` file (remember the shortcut to generate the boilerplate)
- Create a `scripts` or `js` folder and add your JavaScript file (i.e. a file named `scripts.js`, `main.js`, or `index.js`)
- Create a `styles` or `css` folder and add your Stylesheet (i.e. a file named `styles.css`, or `index.css`)
- **[OPTIONAL]** Use a CSS framework for added styling (i.e. [Bulma](https://bulma.io/documentation/overview/start/) or [Tailwind](https://tailwindcss.com/docs/installation/play-cdn))

## Choose Your Own Adventure

- Build the entire DOM in JavaScript (i.e. `createElement()`)?
- Lay out elements with IDs in the HTML (i.e. `querySelector()`)?

## Github Users Query

- Accept user input via a form that recieves a Github username.
- Search for that user via the Github Users API endpoint: `https://api.github.com/users/[some_user_name]`
- Return that user's information.
- Clear the form after returning a user.

The response from the Github API will look something like:

```json
{
    "login": "seanrreid",
    "id": 2256644,
    "node_id": "MDQ6VXNlcjIyNTY2NDQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2256644?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/seanrreid",
    "html_url": "https://github.com/seanrreid",
    "followers_url": "https://api.github.com/users/seanrreid/followers",
    "following_url": "https://api.github.com/users/seanrreid/following{/other_user}",
    "gists_url": "https://api.github.com/users/seanrreid/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/seanrreid/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/seanrreid/subscriptions",
    "organizations_url": "https://api.github.com/users/seanrreid/orgs",
    "repos_url": "https://api.github.com/users/seanrreid/repos",
    "events_url": "https://api.github.com/users/seanrreid/events{/privacy}",
    "received_events_url": "https://api.github.com/users/seanrreid/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sean R Reid",
    "company": "Sean R Reid, LLC",
    "blog": "",
    "location": "Greenville, SC",
    "email": null,
    "hireable": true,
    "bio": "I also build things on the internet, usually related to Disney World in some way.\r\n",
    "twitter_username": null,
    "public_repos": 355,
    "public_gists": 38,
    "followers": 159,
    "following": 58,
    "created_at": "2012-08-31T18:48:53Z",
    "updated_at": "2023-08-29T14:16:30Z"
}
```

### Level Up: Choose one, or both, of the following

- **Search and Add**: Can you search for a second user and _append_ their data after the first.
- **Search and Replace**: Can you _remove_ the first user's data and replace it with the second??

## Github Issues Lookup

- Query the Github Issues API for the app `create-react-app` via this endpoint: `https://api.github.com/repos/facebook/create-react-app/issues`
- Return a list of all the issues, display the `title` and the `body` information in the DOM.

The response from the Github API will look something like:

```json
[
    {
        "url": "https://api.github.com/repos/facebook/create-react-app/issues/13367",
        "repository_url": "https://api.github.com/repos/facebook/create-react-app",
        "labels_url": "https://api.github.com/repos/facebook/create-react-app/issues/13367/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/create-react-app/issues/13367/comments",
        "events_url": "https://api.github.com/repos/facebook/create-react-app/issues/13367/events",
        "html_url": "https://github.com/facebook/create-react-app/pull/13367",
        "id": 1897705506,
        "node_id": "PR_kwDOA8mAYc5aZxsV",
        "number": 13367,
        "title": "Update README: A few tutorial URLs -> react.dev",
        "user": {
            "login": "WonBeomChoi",
            "id": 31643985,
            "node_id": "MDQ6VXNlcjMxNjQzOTg1",
            "avatar_url": "https://avatars.githubusercontent.com/u/31643985?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/WonBeomChoi",
            "html_url": "https://github.com/WonBeomChoi",
            "followers_url": "https://api.github.com/users/WonBeomChoi/followers",
            "following_url": "https://api.github.com/users/WonBeomChoi/following{/other_user}",
            "gists_url": "https://api.github.com/users/WonBeomChoi/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/WonBeomChoi/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/WonBeomChoi/subscriptions",
            "organizations_url": "https://api.github.com/users/WonBeomChoi/orgs",
            "repos_url": "https://api.github.com/users/WonBeomChoi/repos",
            "events_url": "https://api.github.com/users/WonBeomChoi/events{/privacy}",
            "received_events_url": "https://api.github.com/users/WonBeomChoi/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [
            {
                "id": 409579052,
                "node_id": "MDU6TGFiZWw0MDk1NzkwNTI=",
                "url": "https://api.github.com/repos/facebook/create-react-app/labels/CLA%20Signed",
                "name": "CLA Signed",
                "color": "009900",
                "default": false,
                "description": null
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2023-09-15T04:54:41Z",
        "updated_at": "2023-09-15T04:54:45Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "draft": false,
        "pull_request": {
            "url": "https://api.github.com/repos/facebook/create-react-app/pulls/13367",
            "html_url": "https://github.com/facebook/create-react-app/pull/13367",
            "diff_url": "https://github.com/facebook/create-react-app/pull/13367.diff",
            "patch_url": "https://github.com/facebook/create-react-app/pull/13367.patch",
            "merged_at": null
        },
        "body": "\r\nHello, dear friend.\r\nChanged several tutorial links to \"react.dev\" in the readme file.\r\nIt automatically takes you to the \"react.dev\" page, but sometimes it takes you to \"https://legacy.reactjs.org/\".",
        "reactions": {
            "url": "https://api.github.com/repos/facebook/create-react-app/issues/13367/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/create-react-app/issues/13367/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    }
]
```

### Level Up: Dig into an Issue

**NOTE**: A new branch is highly recommended.

- Find a particular issue and `fetch` the data based on its URL, i.e. `https://api.github.com/repos/facebook/create-react-app/issues/13364`
- Clear your list of issues and return the data for the specific issue in question.
- Render the issue `title` and `body` in the DOM.

The response for a single issue will look something like:

```json
{
    "url": "https://api.github.com/repos/facebook/create-react-app/issues/13364",
    "repository_url": "https://api.github.com/repos/facebook/create-react-app",
    "labels_url": "https://api.github.com/repos/facebook/create-react-app/issues/13364/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/create-react-app/issues/13364/comments",
    "events_url": "https://api.github.com/repos/facebook/create-react-app/issues/13364/events",
    "html_url": "https://github.com/facebook/create-react-app/issues/13364",
    "id": 1896686421,
    "node_id": "I_kwDOA8mAYc5xDSNV",
    "number": 13364,
    "title": "Vulnerability Issues with nth-check in react-scripts Dependencies",
    "user": {
        "login": "niryaf",
        "id": 42774853,
        "node_id": "MDQ6VXNlcjQyNzc0ODUz",
        "avatar_url": "https://avatars.githubusercontent.com/u/42774853?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/niryaf",
        "html_url": "https://github.com/niryaf",
        "followers_url": "https://api.github.com/users/niryaf/followers",
        "following_url": "https://api.github.com/users/niryaf/following{/other_user}",
        "gists_url": "https://api.github.com/users/niryaf/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/niryaf/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/niryaf/subscriptions",
        "organizations_url": "https://api.github.com/users/niryaf/orgs",
        "repos_url": "https://api.github.com/users/niryaf/repos",
        "events_url": "https://api.github.com/users/niryaf/events{/privacy}",
        "received_events_url": "https://api.github.com/users/niryaf/received_events",
        "type": "User",
        "site_admin": false
    },
    "labels": [
        {
            "id": 1467678098,
            "node_id": "MDU6TGFiZWwxNDY3Njc4MDk4",
            "url": "https://api.github.com/repos/facebook/create-react-app/labels/needs%20triage",
            "name": "needs triage",
            "color": "b5274d",
            "default": false,
            "description": ""
        },
        {
            "id": 1494610677,
            "node_id": "MDU6TGFiZWwxNDk0NjEwNjc3",
            "url": "https://api.github.com/repos/facebook/create-react-app/labels/issue:%20bug%20report",
            "name": "issue: bug report",
            "color": "f49118",
            "default": false,
            "description": ""
        }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-09-14T14:22:25Z",
    "updated_at": "2023-09-14T14:22:25Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "body": "**Environment**:\r\n- Operating System: Windows 11\r\n- IDE: Visual Studio Code\r\n- Node.js version: v18.17.1\r\n- npm version: 10.1.0\r\n\r\n**Description**:\r\nI am encountering a persistent vulnerability issue with `react-scripts` related to the `nth-check` package. Despite making multiple attempts to update the dependencies manually and exploring various resolutions, the vulnerability warning remains.\r\n\r\n**NPM Audit Output**:\r\nnth-check <2.0.1\r\nSeverity: high\r\nInefficient Regular Expression Complexity in nth-check - [GHSA-rp65-9cf3-cjxr](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)\r\nfix available via npm audit fix --force\r\nWill install react-scripts@2.1.3, which is a breaking change\r\nnode_modules/react-scripts/node_modules/nth-check\r\ncss-select <=3.1.0\r\nDepends on vulnerable versions of nth-check\r\nnode_modules/react-scripts/node_modules/css-select\r\nsvgo 1.0.0 - 1.3.2\r\nDepends on vulnerable versions of css-select\r\nnode_modules/react-scripts/node_modules/svgo\r\n@svgr/plugin-svgo <=5.5.0\r\nDepends on vulnerable versions of svgo\r\nnode_modules/react-scripts/node_modules/@svgr/plugin-svgo\r\n@svgr/webpack 4.0.0 - 5.5.0\r\nDepends on vulnerable versions of @svgr/plugin-svgo\r\nnode_modules/react-scripts/node_modules/@svgr/webpack\r\nreact-scripts >=2.1.4\r\nDepends on vulnerable versions of @svgr/webpack\r\nnode_modules/react-scripts\r\n\r\n**Steps to Reproduce**:\r\n1. Updated to the latest version of `react-scripts`.\r\n2. Ran `npm audit`, revealing the vulnerability issue related to `nth-check`.\r\n3. Attempted to manually update dependencies and force resolutions.\r\n4. Checked again with `npm audit`, but the vulnerability warning persisted.\r\n\r\n**Expected Behavior**:\r\nThe dependencies, especially `nth-check`, should be up-to-date, ensuring no vulnerabilities when executing `npm audit`.\r\n\r\n**Additional Context**:\r\nI made attempts to resolve this by updating individual packages and also using the `npm-force-resolutions` package. Unfortunately, the vulnerability continues to persist.\r\n\r\nSeeking guidance or a potential fix for this vulnerability. Thank you for your assistance!\r\n",
    "closed_by": null,
    "reactions": {
        "url": "https://api.github.com/repos/facebook/create-react-app/issues/13364/reactions",
        "total_count": 1,
        "+1": 0,
        "-1": 0,
        "laugh": 0,
        "hooray": 0,
        "confused": 0,
        "heart": 0,
        "rocket": 1,
        "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/facebook/create-react-app/issues/13364/timeline",
    "performed_via_github_app": null,
    "state_reason": null
}
```

## Level 9000

:::tip
This bonus exercise will be much easier if you read/review the [Intro to Promises lesson](/docs/lessons/building-interactive-uis/intro-to-promises/#how-do-you-write-a-function-that-returns-a-promise)
:::

Choose one of the above exercises and see if you can cache the data from  to `localStorage` so that your app doesn't need to make a network request for any locally stored data.

## Associated Lessons

|        | Lesson Topic |
|--------|:------------------------|
| :memo: |[AJAX 101: Fetch](/docs/lessons/building-interactive-uis/ajax-101/#fetch-api)|
| :memo: |[The DOM](/docs/lessons/handling-user-input/dom/)|
| :memo: |[HTML Forms](/docs/lessons/front-end-foundations/html-forms/)|