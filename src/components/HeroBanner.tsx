import { Link } from "gatsby"
import React from "react"
import { Banner } from "../typescript/component"

type Data = {
  hero_banner: Banner
}

type BannerProps = {
  data: Data
}

const HeroBanner = (props: BannerProps) => {
  const { hero_banner } = props.data
  return (
    <div
      className="hero-banner"
      style={{
        backgroundColor: hero_banner.bg_color ? hero_banner.bg_color : "",
        backgroundImage: hero_banner.banner_image
          ? `url(${hero_banner.banner_image.url})`
          : "",
      }}
    >
      <div className="wrapper">
        <div className="hero-inner" style={{ color: hero_banner.text_color }}>
          {hero_banner.banner_title && (
            <h1 className="hero-title" {...hero_banner.$?.banner_title}>
              {hero_banner.banner_title}
            </h1>
          )}
          {hero_banner.banner_description ? (
            <p
              className="hero-description"
              style={{ color: hero_banner.text_color }}
              {...hero_banner.$?.banner_description}
            >
              {hero_banner.banner_description}
            </p>
          ) : (
            ""
          )}
          {hero_banner.call_to_action.title &&
          hero_banner.call_to_action.href ? (
            <Link
              to={hero_banner.call_to_action.href}
              className="btn primary-btn"
              {...hero_banner.call_to_action.$?.title}
            >
              {hero_banner.call_to_action.title}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
