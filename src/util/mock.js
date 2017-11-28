import Mock from 'mockjs'
import config from '../../config/config.js'

const URL = config.apiDomain;

//登陆
Mock.mock(URL + '/users/api/userLogin', {
  "success": true,
  "errors": [],
  "data": {
    "userName": "adminTest",
    "id": 1,
    "img": "https://cn.vuejs.org/images/logo.png",
    "token": "35882fc40f9f2f224cc7486f41676110"
  }
})
//约跑步列表
Mock.mock(URL + '/api/sportList', {
  "data": [
    {
      "joinMax": "5",
      "content": "快来参加吧。。。",
      "endTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "joinUser": [
        "58d88609a22b9d00646ada5f"
      ],
      "title": "夜跑队",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "releaseTime": "2016-11-16 16:51:08",
      "destination": "江西 南昌 新建县 东华理工大学",
      "objectId": "582c1dfd2e958a0069b30768",
      "createdAt": "2016-11-16T08:51:09.087Z",
      "updatedAt": "2017-03-27T03:27:12.438Z"
    },
    {
      "joinMax": "5",
      "content": "",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "joinUser": [
        "57a1f1150a2b58005828c312"
      ],
      "title": "来吗",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "releaseTime": "2016-08-27 20:14:15",
      "destination": "天津 天津市 和平区 都觉得你的背包大小姐惊喜",
      "objectId": "57c18416efa631005ab356f1",
      "createdAt": "2016-08-27T12:14:14.884Z",
      "updatedAt": "2017-02-24T01:51:51.354Z"
    }
  ],
  "success": true
})
Mock.mock(URL + '/api/sportList', {
  "data": [
    {
      "joinMax": "5",
      "content": "快来参加吧。。。",
      "endTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "joinUser": [
        "58d88609a22b9d00646ada5f"
      ],
      "title": "夜跑队",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-11-16T08:47:00.000Z"
      },
      "releaseTime": "2016-11-16 16:51:08",
      "destination": "江西 南昌 新建县 东华理工大学",
      "objectId": "582c1dfd2e958a0069b30768",
      "createdAt": "2016-11-16T08:51:09.087Z",
      "updatedAt": "2017-03-27T03:27:12.438Z"
    },
    {
      "joinMax": "5",
      "content": "",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "joinUser": [
        "57a1f1150a2b58005828c312"
      ],
      "title": "来吗",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-27T12:13:00.000Z"
      },
      "releaseTime": "2016-08-27 20:14:15",
      "destination": "天津 天津市 和平区 都觉得你的背包大小姐惊喜",
      "objectId": "57c18416efa631005ab356f1",
      "createdAt": "2016-08-27T12:14:14.884Z",
      "updatedAt": "2017-02-24T01:51:51.354Z"
    }
  ],
  "success": true
})
//获取约跑步详情
Mock.mock(URL + '/api/sportDetail', {
  "data": {
    "joinMax": "5",
    "content": "快来参加吧。。。",
    "endTime": "11/16/2016, 4:47:00 PM",
    "joinUser": [
      "58d88609a22b9d00646ada5f"
    ],
    "title": "夜跑队",
    "releaseUsername": "hzzly",
    "releaseUserId": "57a1f1150a2b58005828c312",
    "cantJoinTime": "11/16/2016, 4:47:00 PM",
    "beginTime": "11/16/2016, 4:47:00 PM",
    "releaseTime": "2016-11-16 16:51:08",
    "destination": "江西 南昌 新建县 东华理工大学",
    "objectId": "582c1dfd2e958a0069b30768",
    "createdAt": "2016-11-16T08:51:09.087Z",
    "updatedAt": "2017-03-27T03:27:12.438Z"
  },
  "success": true
})
// 约出行列表
Mock.mock(URL + '/api/travelList', {
  "data": [
    {
      "joinMax": "10",
      "clicks": 2393,
      "content": "",
      "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2017-03-28T05:41:00.000Z"
      },
      "joinNum": 0,
      "joinUser": [
        "58d88609a22b9d00646ada5f"
      ],
      "title": "庐山游",
      "releaseUsername": "哈哈",
      "releaseUserId": "5836c4ea67f3560065f52b5d",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2017-03-16T05:41:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2017-02-28T05:41:00.000Z"
      },
      "releaseTime": "2017-02-28 13:37:50",
      "destination": "江西 九江 庐山区 江西省九江市",
      "objectId": "58b50cae570c350058aaeb25",
      "createdAt": "2017-02-28T05:37:50.528Z",
      "updatedAt": "2017-05-08T13:05:22.004Z"
    },
    {
      "joinMax": "5",
      "clicks": 927,
      "content": "dfrgrvf",
      "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2017-03-23T03:10:00.000Z"
      },
      "joinNum": 0,
      "title": "hhhhhhh",
      "releaseUsername": "哈哈",
      "releaseUserId": "5836c4ea67f3560065f52b5d",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2017-02-28T03:10:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2017-02-28T03:10:00.000Z"
      },
      "releaseTime": "2017-02-28 11:10:56",
      "destination": "江西 南昌 东湖区 efrgvv",
      "objectId": "58b4ea408fd9c50064bf9fa2",
      "createdAt": "2017-02-28T03:10:56.516Z",
      "updatedAt": "2017-04-30T11:45:28.946Z"
    },
    {
      "joinMax": "2",
      "clicks": 1040,
      "content": "",
      "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:20:00.000Z"
      },
      "joinNum": 13,
      "joinUser": [
        "57a47d1fd342d30057533d9d"
      ],
      "title": "美丽江西",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:20:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:20:00.000Z"
      },
      "releaseTime": "2016-08-05 21:20:28",
      "destination": "北京 北京市 东城区 ",
      "objectId": "57a49299d342d30057540b61",
      "createdAt": "2016-08-05T13:20:25.872Z",
      "updatedAt": "2017-04-30T14:34:16.823Z"
    },
    {
      "joinMax": "1",
      "clicks": 910,
      "content": "",
      "travelPic": "http://ac-aFkydcqQ.clouddn.com/86a39bdd8c0052e14932.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:18:00.000Z"
      },
      "joinNum": 25,
      "joinUser": [
        "5836c4ea67f3560065f52b5d"
      ],
      "title": "约吗",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:18:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:18:00.000Z"
      },
      "releaseTime": "2016-08-05 21:18:27",
      "destination": "北京 北京市 东城区 ",
      "objectId": "57a492221532bc0060bc9087",
      "createdAt": "2016-08-05T13:18:26.717Z",
      "updatedAt": "2017-04-30T14:34:33.030Z"
    },
    {
      "joinMax": "1",
      "clicks": 144,
      "content": "",
      "travelPic": "http://ac-aFkydcqQ.clouddn.com/8a5202f569543ae8dcaa.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-05T12:32:00.000Z"
      },
      "joinNum": 5,
      "title": "测试4",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-05T12:32:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-05T12:32:00.000Z"
      },
      "releaseTime": "2016-08-05 20:33:33",
      "destination": "北京 北京市 东城区 ",
      "objectId": "57a4879ba633bd00603d0dbd",
      "createdAt": "2016-08-05T12:33:31.696Z",
      "updatedAt": "2017-04-29T02:53:40.452Z"
    },
    {
      "joinMax": "10",
      "clicks": 120,
      "content": "海边的旅游大海蕴藏着许许多多的“宝藏”，在人类的心目中它可是一个资源丰富的“百宝箱”！听妈妈说，大海的景色很美丽。于是我便在心中想象大海的那种波澜壮阔、汹涌澎湃的景象来；那景象雄伟极了。",
      "travelPic": "http://ac-aFkydcqQ.clouddn.com/86a39bdd8c0052e14932.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-07T07:39:00.000Z"
      },
      "joinNum": 8,
      "title": "一起来",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-09-04T07:39:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-09-05T07:39:00.000Z"
      },
      "releaseTime": "2016-08-05 15:42:35",
      "destination": "广东 深圳 南山区海边",
      "objectId": "57a44369128fe1005472dfd8",
      "createdAt": "2016-08-05T07:42:33.390Z",
      "updatedAt": "2017-04-27T09:12:02.070Z"
    },
    {
      "joinMax": "30",
      "clicks": 254,
      "content": "小分队随时待命，期待你的加入。。",
      "travelPic": "http://ac-aFkydcqQ.clouddn.com/62b7b86fb4da8469ccdf.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-11T10:50:00.000Z"
      },
      "joinNum": 3,
      "joinUser": [
        "57a1f1150a2b58005828c312"
      ],
      "title": "一日游",
      "releaseUsername": "18679168426",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-10T14:00:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-11T00:50:00.000Z"
      },
      "releaseTime": "2016-08-04 21:52:55",
      "destination": "江西 南昌 新建县东华理工大学",
      "objectId": "57a348b7a3413100632099fa",
      "createdAt": "2016-08-04T13:52:55.273Z",
      "updatedAt": "2017-04-30T13:43:04.551Z"
    },
    {
      "joinMax": "20",
      "clicks": 168,
      "content": "带你感受乡村的美。。",
      "travelPic": "http://ac-aFkydcqQ.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2016-08-11T05:44:00.000Z"
      },
      "joinNum": 10,
      "joinUser": [
        "57a1f1150a2b58005828c312"
      ],
      "title": "嗨起来",
      "releaseUsername": "hzzly",
      "releaseUserId": "57a1f1150a2b58005828c312",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2016-08-05T13:44:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2016-08-06T00:44:00.000Z"
      },
      "releaseTime": "2016-08-04 21:46:18",
      "destination": "江西 吉安 万安县竹园村",
      "objectId": "57a3472a6be3ff00651ef51e",
      "createdAt": "2016-08-04T13:46:18.902Z",
      "updatedAt": "2017-04-27T11:10:24.716Z"
    }
  ],
  "success": true
})
// 约出行详情
Mock.mock(URL + '/api/travelDetail', {
  "data": {
    "joinMax": "10",
    "clicks": 2393,
    "content": "",
    "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
    "endTime": "3/28/2017, 1:41:00 PM",
    "joinNum": 0,
    "joinUser": [
      "58d88609a22b9d00646ada5f"
    ],
    "title": "庐山游",
    "releaseUsername": "哈哈",
    "releaseUserId": "5836c4ea67f3560065f52b5d",
    "cantJoinTime": "3/16/2017, 1:41:00 PM",
    "beginTime": "2/28/2017, 1:41:00 PM",
    "releaseTime": "2017-02-28 13:37:50",
    "destination": "江西 九江 庐山区 江西省九江市",
    "objectId": "58b50cae570c350058aaeb25",
    "createdAt": "2017-02-28T05:37:50.528Z",
    "updatedAt": "2017-05-08T13:05:22.004Z"
  },
  "success": true
})
// 获取用户信息
Mock.mock(URL + '/users/api/userInfo', {
  "data": {
    "universities": "东理",
    "sex": "男",
    "nickname": "哈哈",
    "username": "18679168426",
    "emailVerified": false,
    "mobilePhoneNumber": "18679168426",
    "avatar": "http://ac-aFkydcqQ.clouddn.com/a96b23926358c9999112.jpg",
    "mobilePhoneVerified": true,
    "objectId": "5836c4ea67f3560065f52b5d",
    "createdAt": "2016-11-24T10:46:02.407Z",
    "updatedAt": "2017-02-21T14:54:27.169Z"
  },
  "success": true
})
//获取用户发布约行个数
Mock.mock(URL + '/users/api/getPubTotravelNum', {
  "data": 2,
  "success": true
})
// 获取用户自己发布的约行
Mock.mock(URL + '/users/api/myTravel', {
  "data": [
    {
      "joinMax": "10",
      "clicks": 2393,
      "content": "",
      "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2017-03-28T05:41:00.000Z"
      },
      "joinNum": 0,
      "joinUser": [
        "58d88609a22b9d00646ada5f"
      ],
      "title": "庐山游",
      "releaseUsername": "哈哈",
      "releaseUserId": "5836c4ea67f3560065f52b5d",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2017-03-16T05:41:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2017-02-28T05:41:00.000Z"
      },
      "releaseTime": "2017-02-28 13:37:50",
      "destination": "江西 九江 庐山区 江西省九江市",
      "objectId": "58b50cae570c350058aaeb25",
      "createdAt": "2017-02-28T05:37:50.528Z",
      "updatedAt": "2017-05-08T13:05:22.004Z"
    },
    {
      "joinMax": "5",
      "clicks": 927,
      "content": "dfrgrvf",
      "travelPic": "http://ac-afkydcqq.clouddn.com/f7a0443a710ceded28ef.jpg",
      "endTime": {
        "__type": "Date",
        "iso": "2017-03-23T03:10:00.000Z"
      },
      "joinNum": 0,
      "title": "hhhhhhh",
      "releaseUsername": "哈哈",
      "releaseUserId": "5836c4ea67f3560065f52b5d",
      "cantJoinTime": {
        "__type": "Date",
        "iso": "2017-02-28T03:10:00.000Z"
      },
      "beginTime": {
        "__type": "Date",
        "iso": "2017-02-28T03:10:00.000Z"
      },
      "releaseTime": "2017-02-28 11:10:56",
      "destination": "江西 南昌 东湖区 efrgvv",
      "objectId": "58b4ea408fd9c50064bf9fa2",
      "createdAt": "2017-02-28T03:10:56.516Z",
      "updatedAt": "2017-04-30T11:45:28.946Z"
    }
  ],
  "success": true
})
