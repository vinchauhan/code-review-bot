module.exports = codeReviewBot;

const handlePullRequest = require('./lib/handle-pull-request')
const handleIssueRequest = require('./lib/handle-issue-request')

function codeReviewBot(app) {
    app.on('pull_request.opened', handlePullRequest)
    app.on('issues.opened', handleIssueRequest)
}