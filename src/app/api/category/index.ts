import { requestApi } from '../../../utils/request';

export const handleCategory = async () => {

    return await requestApi({
        url: '/api/v1/feed/GetSeeAllCategoryBucketList/9876264/2',
        method: 'GET',
        headers: {
            'device-os': 'ios',
            'API-KEY': '3ab0242fb7a6f01b9c2467dd221a43a5',
        },
    });
};

export const handleCategoryDetail = async (conId: any) => {

    return await requestApi({
        url: `/api/v1/feed/GetCategoryBucket/eb3fb92a88badce847f88fb8c9bb9be6/ios/IN/en/${conId}`,
        method: 'GET',
        // headers: {
        //     'device-os': 'ios',
        //     'API-KEY': '3ab0242fb7a6f01b9c2467dd221a43a5',
        // },
    });
};