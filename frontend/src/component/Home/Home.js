import React, { Fragment, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='TastyMasale' />

          <div className='banner'>
            <h1>Tasty Masale</h1>
            <p>Include spoonful magic to your food</p>

            <a href='#container'>
              <button class='container__btn'>
                Scroll <AiOutlineArrowDown />
              </button>
            </a>
          </div>

          <h2 className='homeHeading'>Most Loved Masale</h2>

          <div className='container' id='container'>
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div class='aboutUs'>
            <h1 class='aboutUsHeading'>About Us</h1>
            <p class='aboutUsPara'>
              Tasty Masale is the nation’s largest spice brand offering around
              45 different spice variants in both blends as well as pure forms.
              It is appreciated not only by food loving Indians but also
              appreciated worldwide and has been emerging as a popular brand in
              the UK, US, Africa, Australia, Singapore and many more since its
              inception. Indian household kitchens without a shelf having this
              Tasty Masala stacked in it is a very rare scenario. Now there are
              around 40 blended masala produced under the brand name Tasty and
              exported to countries worldwide. Tasty spices are used by more
              than 20 million people all across the world.
            </p>
            <p class='aboutUsPara'>
              It needs a lot of passion to spice up boring phases in life, and
              Tasty masala is exactly that pinch or spice that adds flavors in
              life. This uniqueness has made the brand India’s most sought-after
              spice brand. From a small 200 square feet of a shop to today’s
              leading spice brand of the nation, the journey was not so easy for
              the Company. It took a lot of hardships and seamless efforts to
              bring the Company to this height of success.
            </p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
