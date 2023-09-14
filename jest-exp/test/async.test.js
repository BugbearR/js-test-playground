function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 100);
    });
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});


test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});