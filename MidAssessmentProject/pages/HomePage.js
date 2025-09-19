export default class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLink = '#signin2';
    this.loginLink = '#login2';
    this.contactLink = '//*[@id="navbarExample"]/ul/li[2]/a';
    this.phonesCategory = '//a[text()="Phones"]';
    this.logoutLink = '#logout2';
    this.usernameLabel = '#nameofuser';
  }

  async clickSignup() {
    await this.page.click(this.signupLink);
  }

  async clickLogin() {
    await this.page.click(this.loginLink);
  }

  async clickContact() {
    await this.page.click(this.contactLink);
  }

  async clickPhonesCategory() {
    await this.page.click(this.phonesCategory);
  }

  async clickLogout() {
    await this.page.click(this.logoutLink);
  }

  async getLoggedInUser() {
    return this.page.textContent(this.usernameLabel);
  }
}
