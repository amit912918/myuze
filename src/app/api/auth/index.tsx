import api from '../../../lib/axios';

interface loginProps {
    deviceId: string;
    langCode: string;
    mobileNo: string;
    isdCode: string;
}

interface verifyProps {
    deviceId: string;
    langCode: string;
    mobileNo: string;
    isdCode: string;
    otp: string;
    last_login_source: string;
}

export const handleLogin = async (payload: loginProps) => {

    const res = await api.post('api/v1/feed/GetOTP', payload);
    return res.data;
};

export const handleVerification = async (payload: verifyProps) => {

    const res = await api.post('api/v1/feed/ValidateOTP', payload);
    return res.data;
};