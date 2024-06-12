import AccountSetting from '@/components/features/account-setting'
import React from 'react'

const AccountSettingPage = async () => {
    const userInfo = {
        displayName: "John Doe",
        realName: "John Doe",
        phone: "0987654321",
        email: "johndoe@gmail.com",
        bio: "Happiness looks greater on you <3"
    };

    return (
        <AccountSetting userInfo={userInfo} />
    )
}

export default AccountSettingPage