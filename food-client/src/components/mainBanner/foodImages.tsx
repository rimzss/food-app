import React from "react";

type Props = {};

const FoodImages = (props: Props) => {
  return (
    <div className="w-1/2 relative max-w-96 mr-24">
      <img className="scale-150" src="@/public/13.jpg" alt="" />
      <img
        className="absolute w-3/4 top-1/3 -right-1/2"
        src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qw8pBWFhcc30lnBa3px4H162E~W6IynNdtoeunNyZzecdEpylCVQAhSbt2I~QEyzYif5alkXVFP52j74l~AU7TCK6TMkoRiVz~f7mN1SBfZhZIyByQwEFav1cA7FBgU6JZRaqzGwBzHwEDpFm5IIPG-SGEXFFtTDnSvllIvcN60AjlNqJ5dn4LA~nDkPQ~ZyeJWTgM-fwuvNmeHtVOTc2h~h9k22jnFuFwzfxZXIkvX~23EHk3i8~CuRAW8bkSzz2TMvX5sAqWySm2T38Y84H6hnOoQVzd2u25esj7Y2vAjFIqoqw~YjogZ4C0mcadWHTouqtfFbp9jfthFoYTEtIg__"
        alt=""
      />
    </div>
  );
};

export default FoodImages;
