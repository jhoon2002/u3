export const htmlReturn = targetString => {
    if (targetString) {
        return targetString.replace(/\n/g, '<br/>')
    }
    return
}

//특정 검색 단어 마크업
export const markWord = (target, word, className) => {
    if (target) {
        return target.replace(new RegExp(word, 'g'), "<span class='" + className + "'>" + word + '</span>')
    }
    return target
}

//게시판 검색시 특정 필드(targetField)만 마크업
export const markWordInBoard = (target, word, targetField, selectedfields, className = 'searchWord') => {
    if (target && selectedfields.includes(targetField)) {
        return this.markWord(target, word, className)
    }
    return target
}

//문자열 길이 구하기
export const getByteLength = str => {
    let len = 0
    for (let i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length === 6) {
            len++
        }
        len++
    }
    return len
}

//휴대폰 번호 '-' 표시 포함
export const cellphonePhase = str => {
    if (!str) return
    let l = 0
    if (str.length === 10) {
        l = 3
    } else if (str.length === 11) {
        l = 4
    } else {
        return
    }
    return str.substr(0, 3) + '-' + str.substr(3, l) + '-' + str.substr(3 + l, 3 + 4 + l)
}

//주민등록번호 검사
export const juminValidate = juminNo => {
    let _ssn1 = juminNo.substr(0, 6)
    let _ssn2 = juminNo.substr(6, 12)

    let ssn1 = _ssn1,
        ssn2 = _ssn2,
        ssn = juminNo,
        arr_ssn = [],
        compare = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
        sum = 0

    // 입력여부 체크
    if (ssn1 === '') return false
    if (ssn2 === '') return false
    if (ssn1.match('[^0-9]')) return false
    if (ssn2.match('[^0-9]')) return false
    if (ssn.length !== 13) return false

    // 공식: M = (11 - ( (2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11) ) % 10
    for (let i = 0; i < 13; i++) {
        arr_ssn[i] = ssn.substring(i, i + 1)
    }

    for (let i = 0; i < 12; i++) {
        sum = sum + arr_ssn[i] * compare[i]
    }

    sum = (11 - (sum % 11)) % 10

    if (sum !== arr_ssn[12] * 1) {
        return false
    }
    return true
}

//주민등록번호 표시
export const juminToStr = juminNo => {
    const a = juminNo.substr(0, 6)
    const b = juminNo.substr(6, 1)
    //const c = "&lt;v-icon x-small>mdi-asterisk&lt;/v-icon>"
    return a + '-' + b // + c+c+c+c+c+c
}

//생년월일 표시
export const toBirthday = (
    juminNo,
    sex = false,
    juminConnector = '-',
    sexPreConnector = ' (',
    sexPostConnector = ')',
) => {
    if (!juminNo) return

    const f = juminNo.substring(6, 7)
    let y = ''
    let s = ''
    switch (f) {
        case '1':
        case '2':
        case '5':
        case '6':
            y = '19'
            break
        case '3':
        case '4':
        case '7':
        case '8':
            y = '20'
            break
    }
    s = f % 2 === 1 ? '남' : '여'
    return (
        y +
        juminNo.substring(0, 2) +
        juminConnector +
        juminNo.substring(2, 4) +
        juminConnector +
        juminNo.substring(4, 6) +
        (sex ? sexPreConnector + s + sexPostConnector : '')
    )
}

//휴대폰 번호 표시
export const toCellphone = (num, connectString = '-') => {
    if (!num) return
    if (num.length !== 10 && num.length !== 11) return

    return (
        num.substr(0, 3) + connectString + num.substr(3, num.length - 7) + connectString + num.substr(num.length - 4, 4)
    )
}

//확장자 구하기
export const getFileExt = filename => {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length)
}

//토큰 파싱
export const parseJwt = token => {
    const base64Payload = token.split('.')[1]
    const payload = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payload)
}

//input 글자수 충족시 포커스 이동
export const nextFocus = (event, shoulder, destinationId) => {
    if (event.length >= shoulder) {
        document.getElementById(destinationId).focus()
    }
    return
}

export const prevFocus = (event, startingId, destinationId) => {
    if (event.key === 'Backspace' && !document.getElementById(startingId).value) {
        document.getElementById(destinationId).focus()
    }
    return
}

// 01, 02, 001, 002 같은 문자열 만들기
export const leadingZeros = (data, length, rep) => {
    data = String(data)
    while (data.length < length) {
        data = rep + '' + data
    }
    return data
}

// 연월일 유효성 검사 @Param String yyyymmdd
export const isValidDate = (inYmd, separator) => {
    let year, month, day
    if (separator) {
        inYmd = inYmd.replaceAll(separator, '')
    }
    if (inYmd.length !== 8) {
        return false
    }
    year = inYmd.substring(0, 4)
    month = inYmd.substring(4, 6)
    day = inYmd.substring(6, 8)

    const d = new Date(Number(year), Number(month) - 1, Number(day))

    if (d.getFullYear() === Number(year) && d.getMonth() + 1 === Number(month) && d.getDate() === Number(day)) {
        return true
    }
    return false
}
