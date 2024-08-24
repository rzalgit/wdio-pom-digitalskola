import homePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import Halaman_keranjang from "../pageobjects/keranjang.page";

describe('Rizal Test', () => {
    it('Rizal Tugas 1 - Login Page Object', async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");

        await homePage.validateOnHalamanHome();
        await homePage.addItemToCart();

        await homePage.goToCart();
        await Halaman_keranjang.validateOnHalamanKeranjang();
    });
});
