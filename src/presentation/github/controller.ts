import { Request, Response } from 'express';
import { GitHubService } from '../services/github.service';

export class GithubController {

    constructor(
        private readonly githubService = new GitHubService(),
    ) {}

    webhookHandler = (req: Request, res: Response) => {

        const githubEvent = req.header('x-github-event') ?? 'unknown';
        const payload = req.body;
        let message: string;

        switch(githubEvent) {

            case 'star':
                message =  this.githubService.onStart(payload);
                break;
            default:
                message = `Unknown event ${ githubEvent }`;
        }

        console.log({ message });
        
        res.status(202).json('Hecho');
    }

}

