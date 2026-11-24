
const { test, expect } = require('@playwright/test');

test('POST - Create a new post', async ({ request }) => {

  //  const response = await request.post('https://jsonplaceholder.typicode.com/posts',

     const response = await request.post('/posts',   
        {
            data: {
                title: 'QA Automation Practice',
                body: 'Testing POST API using Playwright',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(101);
    expect(responseBody.title).toBe('QA Automation Practice');
    expect(responseBody.body).toBe('Testing POST API using Playwright');
    expect(responseBody.userId).toBe(1);

});
