import { GitHubStarPayload, GithubIssuePayload } from '../../interfaces';

export class GitHubService {

    constructor() {}

    onStart( payload: GitHubStarPayload ): string {

        const { action, sender, repository } = payload;

        return `User ${sender.login} ${action} star on ${repository.full_name}`;
    }

    onIssue( payload: GithubIssuePayload ): string {

        const { action, issue } = payload;

        if ( action === 'opened' ) {
            return `An issue was opened with this title ${ issue.title }`;
        }

        if ( action === 'closed' ) {
            return `An issue was closed with this title ${ issue.user.login }`;
        }

        if ( action === 'reopened' ) {
            return `An issue was reopened with this title ${ issue.user.login }`;
        }

        return `Unhandled action for the issue event ${ action }`;
    }

}



