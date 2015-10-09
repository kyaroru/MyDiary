(function() {
    "use strict";
    angular.module('configuration', [])
        .constant('parse', {
            baseURL:'https://api.parse.com',
            app_id:'Cp8xLFZjEiCnAmsnMJ5oasoZQty0vIMFBR5K8vkE',
            api_key: 'WFHpRhWeZ8hhNHuro3by9exSGVnzvrKnJeX4UMtK'
        })
        .constant('kinvey', {
            baseURL:'https://baas.kinvey.com',
            app_key:'kid_b1s_c5NSwx',
            app_secret: '3a11068a1fd944129a498752c4cfa72d'
        })
        .constant('secret', {
            auth: 'Basic a2lkX2Ixc19jNU5Td3g6YjJjZWQ2ZTkxNDY0NDAyYWFjMGY5MzgwMDViMTA3MzU='
        });
})();
