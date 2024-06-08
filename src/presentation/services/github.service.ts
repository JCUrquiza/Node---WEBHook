import { GitHubStarPayload } from '../../interfaces';

export class GitHubService {

    constructor() {}

    onStart( payload: GitHubStarPayload ): string {

        const { action, sender, repository } = payload;

        return `User ${sender.login} ${action} star on ${repository.full_name}`;
    }

}



