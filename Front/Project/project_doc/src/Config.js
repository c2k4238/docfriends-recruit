var BASE_URL = '/api';

export default {
    // 게시판 데이터 요청(페이징 포함)
    FETCH: BASE_URL + '/report',
    FETCH_NOTICE: BASE_URL + '/home',
    FETCH_ADDRESS: BASE_URL + '/${address}',
    FETCH_COMMENT: BASE_URL + '/detail/commentlist/${id}',
    ADD: BASE_URL + '/writeForm',
    ADD_COMMENT: BASE_URL + '/detail/${no}',
    FETCH_ONE: BASE_URL + '/detail/${no}',
    UPDATE: BASE_URL + '/writeForm/${no}',
    DELETE: BASE_URL + '/detail/${no}',

    dev: (process.env.NODE_ENV !== 'production'),

    devTarget: (process.env.NODE_ENV !== 'production' ? 'http://localhost:8083' : 'https://education.airforce.mil.kr')
        // devTarget: (process.env.NODE_ENV !== 'production' ? 'http://localhost:8083' : 'https://education.airforce.mil.kr')

}