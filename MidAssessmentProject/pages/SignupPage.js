export default class SignupPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#sign-username';
    this.passwordInput = '#sign-password';
    this.signupBtn = 'button:has-text("Sign up")';
  }

  async signup(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signupBtn);
    await this.page.waitForTimeout(2000);
  }
}