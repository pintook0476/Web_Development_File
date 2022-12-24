contactDetail.nickName
contactDetail.phonNo.office
contactDetail.phonNo.personal[2]  = '23423423898'
contactDetail.address.office.stateName
contactDetail.address.office.countryDetails.code
contactDetail['address']['office']['countryDetails']['code']


var contactDetail = {
    firstName: 'Anandh',
    lastName: 'bedi',
    nickName: 'Anandhu',
    phonNo: {
        office: '040-123456',
        personal: [23423423, 22342342, 23423423]
    },
    address: {
        office: {
            stateName: 'Telangana',
            pinCode: 23423,
            countryDetails: {
                name: 'India',
                code: 'C_02'
            }
        },
        home: {
            streetName: 'Abc Line',
            dno: '2/3/45',
            stateInfo: {
                stateName: 'Goa',
                stateCode: 'G_01'
            }
        }
    },
    emailId: {
        office: 'abc@company.com',
        personal: ['abc@gmail.com', 'test@yahoo.com']
    },
    gender: 'Male',
    birthDate: {
        month: 'JAn',
        year: 2022,
        day: 9
    },
    profilePic: 'image url/abc.jpg',,
    languages: ['Hindi', 'Telugu', 'Urdu'],
    socialId: {
        linkedIn: 'abc',
        twitter: 'test'
    }
}