const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking a restaurant', async ({ I }) => {
    I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
    I.seeElement('.content');

    I.amOnPage('/');
    I.wait(15);
    I.waitForElement('.restaurant-name');

    const firstRestaurant = locate('.restaurant-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.wait(15);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item');

    const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
  I.seeElement('.content');

  I.amOnPage('/');
  I.wait(15);
  I.waitForElement('.restaurant-name');

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(15);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-name');

  const firstFavoriteRestaurant = locate('.restaurant-name').first();
  I.click(firstFavoriteRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
});
