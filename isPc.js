/**
 * 判断pc端还是移动端
 */
export function isPc() {
    //获取当前设备的信息
    var userAgentInfo = navigator.userAgent
    //定义移动端设置标识
    var Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod'
    ]
    //设置flag标识，true为pc端，false为移动端
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    return flag
  }
