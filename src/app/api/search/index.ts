import api from '../../../lib/axios';

interface homeProps {
    deviceId: string;
    langCode: string;
    mobileNo: string;
    isdCode: string;
}

export const handleSearch = async (payload: homeProps) => {

    const res = await api.post('/api/v1/feed/GetHome/a995570eea6c716c8305ea42213a853d/web/IN/en', payload);
    return res.data;
};