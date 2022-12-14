// ๐ cookie.js
// ์ฟ ํค ๊ด๋ จ ํจ์๋ค์ ์ ์ฅํ๊ณ  ๋ด๋ณด๋ธ๋ค.

// ๋ง๋ฃ๊ธฐํ์ ์ ํด ์ฟ ํค ์์ฑํ๊ธฐ
const setCookie = (name, value, expireDays) => {
    let today = new Date();
    today.setDate(today.getDate() + expireDays);
    document.cookie = `${name}=${value};expires=${today.toGMTString()}`;
};

// ์ฟ ํค๋ฅผ ๊ฐ์ ธ์ค๊ธฐ
const getCookie = (name) => {
    // ๋ก์ปฌ์ ์ ์ฅ๋ ๋ชจ๋  ์ฟ ํค ์ฝ์ด์ค๊ธฐ
    let cookie = document.cookie;
    // ์ฟ ํค๊ฐ ์์ผ๋ฉด ์ฟ ํค๋ค์ ๋ฐฐ์ด์ ์ ์ฅ
    // ๋ฐฐ์ด์ ์ํํ๋ฉด์ ์ฟ ํค์ name์ ๋ํ value๊ฐ์ ๋ฆฌํด
    if (document.cookie) {
        let cookieArray = cookie.split("; ");
        for (let index in cookieArray) {
            let cookieName = cookieArray[index].split("=");
            if (cookieName[0] == name) {
                return cookieName[1];
            }
        }
    }
    return;
};

// ์ฟ ํค๋ฅผ ์ญ์ ํ๊ธฐ
const delCookie = (name) => {
    // expires ์ต์๊ฐ์ ๊ณผ๊ฑฐ๋ก ์ง์ ํ๋ฉด ์ฟ ํค๊ฐ ์ญ์ ๋๋ค.
    // document.cookie = 'user-id=; expires=Sat, 01 Jan 1972 00:00:00 GMT'
    console.log(name);
    setCookie(name, "", 0);
    alert("์ฟ ํค๋ฅผ ์ญ์ ํ์ต๋๋ค.");
};

export { setCookie, getCookie, delCookie };
