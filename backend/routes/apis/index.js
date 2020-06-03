const router = require('express').Router();
const movies = [
    {
        "id": 1,
        "name": "기생충",
        "rate": "54.80%",
        "director": "봉준호",
        "actors": "송강호(기택), 이선균(박사장), 조여정(연교) 등",
        "time": "131분",
        "synopsis": "<strong>폐 끼치고 싶진 않았어요</strong><br>전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. <br>장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 <br>모처럼 싹튼 고정수입의 희망이다. <br>온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. <br>글로벌 IT기업 CEO인 박사장의 저택에 도착하자 <br>젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다.",
        "poster": "https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg?type=f125"
    },
    {
        "id": 2,
        "name": "알라딘",
        "rate": "21.10%",
        "director": "가이 리치",
        "actors": "메나 마수드(알라딘), 윌 스미스(지니), 나오미 스콧(자스민) 등",
        "time": "128분",
        "synopsis": "머나먼 사막 속 신비의 아그라바 왕국의 시대. <br>좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가 <br>주인에게 세 가지 소원을 들어주는 지니를 만나게 되고, <br>자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",
        "poster": "https://movie-phinf.pstatic.net/20190524_104/1558663170174Q2mmw_JPEG/movie_image.jpg?type=f125"
    },
]

router.get('/', function (req, res, next) {
    res.send('list of apis');
});

router.get('/new', function (req, res, next) {
    res.send('new');
});

router.get('/movie', function (req, res, next) {
    res.send(movies);
});

router.get('/movie/:id', function (req, res, next) {
    var id = parseInt(req.params.id, 10)
    var movie = movies.filter(function (movie) {
        return movie.id === id
    });
    res.send(movie)
});

router.get('/:id', function (req, res, next) {
    res.send('a user. id: ' + req.params.id);
});

router.post('/', function (req, res, next) {
    res.send('new user. name: ' + req.body.name);
});

router.get('/:id/edit', function (req, res, next) {
    res.render('index', { title: 'Edit User Form' });
});

router.put('/:id', function (req, res, next) {
    res.send('update a user. id: ' + req.params.id + ' , name: ' + req.body.name);
});

router.delete('/:id', function (req, res, next) {
    res.send('delete a user. id: ' + req.params.id);
});

module.exports = router;