import React  from "react";
import { Grid } from "semantic-ui-react";
// import { size } from "lodash";
// import classNames from "classnames";
// import useAuth from "../../../hooks/useAuth";
// import useCart from "../../../hooks/useCart";
// import {
//   isFavoriteApi,
//   addFavoriteApi,
//   deleteFavoriteApi,
// } from "../../../api/favorite";

export default function HeaderMovie(props) {
  const { movie } = props;
  // const { Poster,Title } = movie;

  return (
    <Grid className="header-movie">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        {/* <Image src={Poster} alt={Title} fluid /> */}
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        {/* <Info movie={movie} /> */}
        <p>Info game</p>
      </Grid.Column>
    </Grid>
  );
}

// function Info(props) {
//   const { movie } = props;
//   const { title, summary, price, discount, url } = movie;
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [realoadFavorite, setRealoadFavorite] = useState(false);
//   const { auth, logout } = useAuth();
//   const { addProductCart } = useCart();

//   useEffect(() => {
//     (async () => {
//       const response = await isFavoriteApi(auth.idUser, movie.id, logout);
//       if (size(response) > 0) setIsFavorite(true);
//       else setIsFavorite(false);
//     })();
//     setRealoadFavorite(false);
//   }, [movie, realoadFavorite]);

//   const addFavorite = async () => {
//     if (auth) {
//       await addFavoriteApi(auth.idUser, movie.id, logout);
//       setRealoadFavorite(true);
//     }
//   };

//   const deleteFavorite = async () => {
//     if (auth) {
//       await deleteFavoriteApi(auth.idUser, movie.id, logout);
//       setRealoadFavorite(true);
//     }
//   };

//   return (
//     <>
//       <div className="header-movie__title">
//         {title}
//         <Icon
//           name={isFavorite ? "heart" : "heart outline"}
//           className={classNames({
//             like: isFavorite,
//           })}
//           link
//           onClick={isFavorite ? deleteFavorite : addFavorite}
//         />
//       </div>
//       <div className="header-movie__delivery">Entrega en 24/48h</div>
//       <div
//         className="header-movie__summary"
//         dangerouslySetInnerHTML={{ __html: summary }}
//       />
//       <div className="header-movie__buy">
//         <div className="header-movie__buy-price">
//           <p>Precio de venta al publico: {price}€</p>
//           <div className="header-movie__buy-price-actions">
//             <p>-{discount}%</p>
//             <p>{(price - Math.floor(price * discount) / 100).toFixed(2)}€</p>
//           </div>
//         </div>
//         <Button
//           className="header-movie__buy-btn"
//           onClick={() => addProductCart(url)}
//         >
//           Comprar
//         </Button>
//       </div>
//     </>
//   );
// }
