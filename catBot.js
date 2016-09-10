function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var channelId = PropertiesService.getScriptProperties().getProperty('CHANNEL_ID');

  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得

  var options = {
    channelId: channelId,
    userName: "cat",
    message: "Hello, World"
  };

  slackApp.postMessage(options.channelId, options.message, {username: options.userName});
}
