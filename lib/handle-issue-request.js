module.exports = handleIssueRequest

function handleIssueRequest(context) {

    const issueComment = context.issue({body: 'Thanks for opening an issue.!'})
    return context.github.issues.createComment(issueComment)
}