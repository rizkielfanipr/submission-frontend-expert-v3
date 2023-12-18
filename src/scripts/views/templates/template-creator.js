import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
        <img class="restaurant-item-header-poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
        <div class="restaurant-item-header-rating">
            <p>⭐️<span class="restaurant-item-header-rating-score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item-content">
        <h3 class="restaurant-name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <img class="restaurant-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
  <div class="restaurant-info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant-description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant-description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Favorite This Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Unfavorite This Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
