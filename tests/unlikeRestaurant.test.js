import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await favoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await favoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="Unfavorite This Restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="Favorite This Restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        document.querySelector('[aria-label="Unfavorite This Restaurant"]').dispatchEvent(new Event('click'));
        expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });

    it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
        await favoriteRestaurantIdb.deleteRestaurant(1);
        document.querySelector('[aria-label="Unfavorite This Restaurant"]').dispatchEvent(new Event('click'));
        expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
