import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "PelixCool - Tus peliculas y series favoritas",
  description:
    "Aqui podrás registrar tus peliculas y series preferidas para verlas cuando prefieras",
};
