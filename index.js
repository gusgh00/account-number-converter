const bankList = [
    {
        account_name: "한국산업은행",
        account_code: "002",
        account_number_list: [
            {
                number_count: 14,
                structure: [3, 8, 3]
            },
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
        ]
    },
    {
        account_name: "IBK기업은행",
        account_code: "003",
        account_number_list: [
            {
                number_count: 10,
                structure: [8, 2]
            },
            {
                number_count: 11,
                structure: [3, 8]
            },
            {
                number_count: 12,
                structure: [3, 2, 7]
            },
            {
                number_count: 14,
                structure: [3, 6, 2, 3]
            },
        ]
    },
    {
        account_name: "KB국민은행",
        account_code: "004",
        account_number_list: [
            {
                number_count: 12,
                structure: [4, 2, 6]
            },
            {
                number_count: 14,
                structure: [6, 2, 6]
            },
        ]
    },
    {
        account_name: "수협은행",
        account_code: "007",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 5, 1]
            },
            {
                number_count: 12,
                structure: [4, 4, 4]
            },
            {
                number_count: 14,
                structure: [3, 2, 8, 1]
            },
        ]
    },
    {
        account_name: "농협은행",
        account_code: "011",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 12,
                structure: [4, 2, 6]
            },
            {
                number_count: 13,
                structure: [3, 4, 4, 2]
            },
            {
                number_count: 14,
                structure: [3, 4, 4, 3]
            },
        ]
    },
    {
        account_name: "우리은행",
        account_code: "020",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 12,
                structure: [3, 2, 7]
            },
            {
                number_count: 13,
                structure: [4, 3, 6]
            },
            {
                number_count: 14,
                structure: [3, 6, 2, 3]
            },
        ]
    },
    {
        account_name: "SC제일은행",
        account_code: "023",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 14,
                structure: [3, 2, 9]
            },
        ]
    },
    {
        account_name: "씨티은행",
        account_code: "027",
        account_number_list: [
            {
                number_count: 10,
                structure: [2, 2, 6]
            },
            {
                number_count: 11,
                structure: [3, 5, 3]
            },
            {
                number_count: 12,
                structure: [1, 6, 3, 2]
            },
            {
                number_count: 13,
                structure: [3, 5, 3, 2]
            },
        ]
    },
    {
        account_name: "iM뱅크",
        account_code: "031",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 12,
                structure: [3, 2, 6, 1]
            },
            {
                number_count: 13,
                structure: [3, 2, 6, 2]
            },
            {
                number_count: 14,
                structure: [3, 2, 6, 3]
            },
        ]
    },
    {
        account_name: "부산은행",
        account_code: "032",
        account_number_list: [
            {
                number_count: 12,
                structure: [3, 2, 7]
            },
            {
                number_count: 13,
                structure: [3, 4, 4, 2]
            },
        ]
    },
    {
        account_name: "광주은행",
        account_code: "034",
        account_number_list: [
            {
                number_count: 12,
                structure: [3, 3, 6]
            },
            {
                number_count: 13,
                structure: [4, 3, 5]
            },
        ]
    },
    {
        account_name: "제주은행",
        account_code: "035",
        account_number_list: [
            {
                number_count: 10,
                structure: [2, 2, 6]
            },
            {
                number_count: 12,
                structure: [3, 3, 6]
            },
        ]
    },
    {
        account_name: "새마을금고",
        account_code: "045",
        account_number_list: [
            {
                number_count: 13,
                structure: [4, 4, 4, 1]
            },
            {
                number_count: 14,
                structure: [4, 3, 6, 1]
            },
        ]
    },
    {
        account_name: "신협",
        account_code: "048",
        account_number_list: [
            {
                number_count: 12,
                structure: [3, 3, 6]
            },
            {
                number_count: 13,
                structure: [5, 2, 5, 1]
            },
        ]
    },
    {
        account_name: "상호저축은행",
        account_code: "050",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 2, 4]
            },
            {
                number_count: 14,
                structure: [3, 2, 2, 7]
            },
        ]
    },
    {
        account_name: "산림조합",
        account_code: "064",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 12,
                structure: [3, 2, 7]
            },
            {
                number_count: 13,
                structure: [5, 2, 6]
            },
        ]
    },
    {
        account_name: "우체국예금",
        account_code: "071",
        account_number_list: [
            {
                number_count: 12,
                structure: [3, 9]
            },
            {
                number_count: 13,
                structure: [6, 7]
            },
            {
                number_count: 14,
                structure: [6, 2, 6]
            },
        ]
    },
    {
        account_name: "하나은행",
        account_code: "081",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 5, 1]
            },
            {
                number_count: 12,
                structure: [3, 6, 3]
            },
            {
                number_count: 14,
                structure: [3, 6, 5]
            },
        ]
    },
    {
        account_name: "신한은행",
        account_code: "088",
        account_number_list: [
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
            {
                number_count: 12,
                structure: [3, 3, 6]
            },
            {
                number_count: 13,
                structure: [3, 2, 8]
            },
            {
                number_count: 14,
                structure: [3, 3, 8]
            },
        ]
    },
    {
        account_name: "케이뱅크",
        account_code: "089",
        account_number_list: [
            {
                number_count: 12,
                structure: [3, 3, 6]
            },
        ]
    },
    {
        account_name: "카카오뱅크",
        account_code: "090",
        account_number_list: [
            {
                number_count: 13,
                structure: [4, 2, 7]
            },
        ]
    },
    {
        account_name: "토스뱅크",
        account_code: "092",
        account_number_list: [
            {
                number_count: 12,
                structure: [4, 4, 4]
            },
            {
                number_count: 14,
                structure: [6, 4, 4]
            },
        ]
    },
]

const reg = /\D/g;

const covertAccountNumber = (account_number, bank_code, owner, masking) => {
    const cleanAccountNumber = String(account_number).replace(reg, '');
    const foundBank = bankList.find(bank => bank.account_code.includes(bank_code));

    if (!foundBank) {
        console.warn(`은행 코드 '${bank_code}'에 해당하는 은행을 찾을 수 없습니다.`);
        return null;
    }

    const foundStructure = foundBank.account_number_list.find(item => item.number_count === cleanAccountNumber.length);

    if (!foundStructure) {
        console.warn(`계좌번호 길이 '${cleanAccountNumber.length}'에 해당하는 구조를 '${foundBank.account_name}'에서 찾을 수 없습니다.`);
        return null;
    }

    let resultParts = [];
    let currentIndex = 0;

    for (const len of foundStructure.structure) {
        const part = cleanAccountNumber.substring(currentIndex, currentIndex + len);
        resultParts.push(part);
        currentIndex += len;
    }

    if (masking && resultParts.length >= 2) {
        const lastIndex = resultParts.length - 1;
        resultParts[lastIndex] = '*'.repeat(resultParts[lastIndex].length);

        const secondLastIndex = resultParts.length - 2;
        resultParts[secondLastIndex] = '*'.repeat(resultParts[secondLastIndex].length);
    }

    return {
        bank_name: foundBank.account_name,
        account_number: resultParts.join('-'),
        result: `${foundBank.account_name} ${resultParts.join('-')} (${owner})`
    };
}

module.exports = {
    bankList,
    covertAccountNumber,
};