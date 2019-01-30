export default {
  'POST /login': { name: 'chengwei' },
  'POST /logout': null,
  'POST /upload': '/upload/weapon/aaa.png',
  'POST /weapon': 4,
  'GET /weapon/:id': { id: 1, name: 'Chikage', phy: 92, bld: 92, createAt: '2019-02-03' },
  'GET /weapon/count': 2,
  'GET /weapon': [
    { id: 1, name: 'Chikage', phy: 92, bld: 92, createAt: '2019-02-03' },
    { id: 2, name: 'Rakuyo', phy: 82, bld: 0, createAt: '2019-02-04' },
  ],
}
