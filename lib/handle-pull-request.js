module.exports = handlePullRequest

//Handle Pull Request Handler
async function handlePullRequest(context) {
    const{action, number: pr_num, pull_request: pr, repository: repo} = context.payload
    context.log(context.payload.repository.owner.login)
    context.log(context.payload.repository.name)
    context.log(context.payload.number)
    const pullRequestFiles = await getFilesInPullRequest(context)
    //context.log(pullRequestFiles)
}

//To get all files in a pull request
async function getFilesInPullRequest(context) {
    const files =  await context.github.pullRequests.getFiles({
        owner: context.payload.repository.owner.login,
        repo: context.payload.repository.name,
        number: context.payload.number
    })

    files.data.map(async (file) => {
        const content = await context.github.repos.getContent({
            owner: context.payload.repository.owner.login,
            repo: context.payload.repository.name,
            path: file.filename
            })
            context.log(content.data.content)
    }
    )
    context.log(files)
    return files.data.map(file => file.filename);

}

async function getFileTypeInPullRequest(file) {

}

async function getFilesContentInPullRequest(context) {

}


async function validateContent(content) {

}


//Generate Validation Report and Report the result back to the pull request as comment
async function generateReportAndReport(file, rule, result) {

}