export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxf73e84e76d37d885",
    // 公众号appSecret
    appSecret: "74d270ff3bdbe2b52cd8e4d354f89c73",
    // 模板消息id
    templateId: "Ex-H40ny6aM3RSSqZeFzEBVMQ3Yvu6Qo3lLNS8ZiVMY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oNoFut3LYJau98X1zmWjyjSRCesA", "oNoFut-oLQBrG91GSPgf0K4xQul8"],
     
    // 信息配置
    // 所在省份
    province: "宁夏",
    // 所在城市
    city: "银川",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1993", "date": "08-24", "r": 'new'},
      {"name": "老公", "year": "1992", "date": "11-06", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2009-08-01",
    // 结婚纪念日
    marryDate: "2021-03-14"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
