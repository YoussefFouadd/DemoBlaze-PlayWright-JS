const data = require('../test-data.json');

class APIUtils {
  constructor(apiContext, loginPayload) {
    this.apiContext = apiContext;
    this.loginPayload = loginPayload;
  }

  async getToken() {
    const encodedPayload = {
      username: this.loginPayload.username,
      password: Buffer.from(this.loginPayload.password).toString('base64')
    };

    const loginResponse = await this.apiContext.post(`${data.apiUrl}/login`, {
      data: encodedPayload
    });

    const responseText = await loginResponse.text();
    let token = responseText.replace('Auth_token: ', '').trim();
    token = token.replace(/^["']|["']$/g, '');

    return token;
  }
}

module.exports = { APIUtils };
