/**
 * @api {get} /users/:uid 获取用户基本信息
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam (params) {String} uid 用户 id
 *
 * @apiSuccessExample Success:
 * {
 *   "ok": true,
 *   "data": {},
 *   "version": "1.0.0",
 *   "now": "2018-03-12T07:14:10.214Z"
 * }
 */

app.route({
  method: 'GET',
  path: '/users/:uid',
  routerName: 'getUser',
  controller: 'User.getUser',
  validate: {
    params: {
      uid: { type: app.Types.Number, required: true }
    }
  }
})
