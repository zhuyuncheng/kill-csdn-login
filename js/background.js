
chrome.webRequest.onBeforeRequest.addListener(
  /**
   * 
   * @param {*} details 
   * {
   *    "frameId": 0,
   *    "initiator": "https://blog.csdn.net",
   *    "method": "GET",
   *    "parentFrameId": -1,
   *    "requestId": "9595",
   *    "tabId": 1462039504,
   *    "timeStamp": 1544012791315.46,
   *    "type": "stylesheet",
   *    "url": "https://g.csdnimg.cn/check-adblock/1.1.1/css/check-adblock.css"
   * }
   */
  function (details) {
    if (details.url.match(/check\-adblock/)) {
      return { cancel: true }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
