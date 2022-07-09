import { Octokit } from "octokit";

const octokit = new Octokit();

export async function getRepoInfo(owner: string, repo: string) {
  return await octokit.request("Get /repos/{owner}/{repo}", {
    repo,
    owner,
  });
}

export async function getRepoStarInfo(owner: string, repo: string) {
   const iterator = octokit.paginate.iterator("Get /repos/{owner}/{repo}/stargazers",{
    repo,
    owner,
    headers: { Accept: "application/vnd.github.v3.star+json" },
    per_page: 100
  })
  for await (const { data: stars } of iterator) {
    for (const star of stars) {
      console.log(star);
    }
  }
}
