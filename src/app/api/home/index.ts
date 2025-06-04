import api from '../../../lib/axios';

export const handleHome = async () => {

    const res = await api.get('/api/v1/feed/GetHome/a995570eea6c716c8305ea42213a853d/web/IN/en');
    console.log(res, "res");
    return res.data;
};