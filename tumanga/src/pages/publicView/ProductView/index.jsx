import React, { useEffect, useState } from "react";

import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP";
import CommentsContainer from "@components/publicFolder/CommentsContainer/CommentsContainer";
import Footer from "@components/publicFolder/Footer/Footer";
import Header from "@components/publicFolder/Header/Header";
import ProductDetail from "@components/publicFolder/ProductDetail/ProductDetail";
import SliderName from "@components/publicFolder/SliderName/SliderName";
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks";
import Spinner from "@components/publicFolder/Spinner/Spinner";
import getCommentsProduct from "@/services/getCommentsProduct";
import getOneProduct from "@/services/getOneProduct";

export default function ProductView({ params }) {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [commentsEmpty, setCommentsEmpty] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getOneProduct(params.id).then((data) => {
      setProduct(data.product);
      setLoading(false);
    });

    getCommentsProduct(params.id).then((data) => {
      if (data.message) {
        setComments(data.comments);
        setLoading(false);
        setCommentsEmpty(data.message);
        return;
      }

      setComments(data.comments);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <SliderName name={"Producto"} />
      <SocialNetwork />
      <main className="center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ProductDetail product={product} />
            {commentsEmpty ? (
              <CommentsContainer
                comments={comments}
                changeEmpty={setCommentsEmpty}
                change={setComments}
                empty={commentsEmpty}
              />
            ) : (
              <CommentsContainer
                comments={comments}
                change={setComments}
                changeEmpty={setCommentsEmpty}
              />
            )}
          </>
        )}
      </main>
      <BtnUp />
      <Footer />
    </>
  );
}
