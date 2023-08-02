import React, { useEffect } from "react";
import "./Home.scss";
import { Category, SingleCategory, Slider } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/categorySlice";
import { fetchProducts } from "../../store/productSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus } = useSelector((state) => state.category);
 // const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {data: products,status :productStatus} = useSelector((state) => state.product);
  
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
    dispatch(fetchProducts())
  }, []);

  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <section>
        {productsByCategory[0] && (
          <SingleCategory
            products={productsByCategory[0]}
            status={catProductAllStatus}
          />
        )}
      </section>
    </div>
  );
};
