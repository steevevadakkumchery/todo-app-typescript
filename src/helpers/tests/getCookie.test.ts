import getCookie from '../getCookie';

describe('getCookie Function', () => {
    test('value of cookie is returned based on name', () => {
        const name = 'randomName';
        const value = Math.random().toString();

        document.cookie = `${name}=${value}`;

        let cookieValue = getCookie(name);

        expect(cookieValue).toEqual(value);
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
})