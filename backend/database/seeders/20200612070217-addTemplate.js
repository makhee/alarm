'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('TEMPLATE_TB', [{
        template: '{\"body\":\"외국어 교육이 끝나셨나요?\\n퇴실처리를 해주세요.\",\"icon\":\"http://www.bizest.co.kr/images/common/logo.png\",\"data\":{\"url\": \"http://localhost:3000\"},\"actions\":[{\"action\":\"site\",\"title\":\"퇴실 하기\",\"icon\":\"\"},{\"action\":\"close\",\"title\":\"닫기\",\"icon\":\"\"}]}',
        description: '퇴실처리',
        is_active: 'TRUE',
        device: 'PC',
        createdAt: '2020-06-12 12:14:53',
        updatedAt: '2020-06-12 12:14:53',
        deletedAt: NULL
      },
      {
        template: '{\"body\":\"외국어 교육시작 5분전입니다.\\n입실처리를 해주세요.\",\"icon\":\"http://www.bizest.co.kr/images/common/logo.png\",\"data\":{\"url\": \"http://localhost:3000\"},\"actions\":[{\"action\":\"site\",\"title\":\"입실 하기\",\"icon\":\"\"},{\"action\":\"close\",\"title\":\"닫기\",\"icon\":\"\"}]}',
        description: '퇴실처리',
        is_active: 'TRUE',
        device: 'PC',
        createdAt: '2020-06-12 12:14:53',
        updatedAt: '2020-06-12 12:14:53',
        deletedAt: NULL
      }], {});    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('TEMPLATE_TB', {
      id: {
        $in: [1, 2]
      }
    }, {});
  }
};
