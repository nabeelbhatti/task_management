import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest'

@Injectable()
export class StudentService {
    async findAll() {
        const octokit = new Octokit({
            auth: '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'
        })
        const org = "Maqware"
        const name = "bhatti"
        const owner = "nabeelbhatti999"
        const repo = "bhatti"
        const createRepo = async (octo: Octokit, org: string, name: string) => {
            await octo.repos.createInOrg({ org, name, auto_init: true })
        }
        const getBranches = async (octo: Octokit, owner: string, repo: string) => {
            await octo.request('GET /repos/{owner}/{repo}/branches', {
                owner:owner ,
                repo: repo
            })
        }

        const getCurrentCommit = async (
            octokit: Octokit,
            org: string,
            repo: string,
            branch: string = 'main'
          ) => {
            const { data: refData } = await octokit.git.getRef({
              owner: org,
              repo,
              ref: `heads/${branch}`,
            })
            const commitSha = refData.object.sha
            const { data: commitData } = await octokit.git.getCommit({
              owner: org,
              repo,
              commit_sha: commitSha,
            })
            return {
              commitSha,
              treeSha: commitData.tree.sha,
            }
          }


          getCurrentCommit(octokit, org, repo).then((res) => {
            console.log("res", res)
        }).catch((err) => {
            console.log("error", err)
        })
    }

}

