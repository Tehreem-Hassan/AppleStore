
import React, { useState, useEffect } from 'react';
import { getProductPage } from './fetchProductPage';
import '../../index.css';

function LargeImageSection() {
 
const [pages, setPages] = useState([]);
 
useEffect(() => {
    async function fetchProductPage() {
      const pagesData = await getProductPage();
      console.log("Pages Data: "+pagesData);
      setPages(pagesData);
    }
    fetchProductPage();
  }, []);
 
  return <section class="section section-ipad-pro hero-section" data-analytics-section-engagement="name:ipad pro">
            <div class="section-content">
                <div class="row">
					<div class="text-col column large-3 medium-4 small-12 medium-offset-0 theme-dark">
						<div class="text-content">
							<h2 class="typography-hero-headline">
								<span class="violator-frameless typography-family-violator">New</span> {pages.attributes && (pages.attributes.large_image_sections.data[0].attributes.SectionHeading)} </h2>
							<p class="typography-hero-eyebrow">
                            {pages.attributes && (pages.attributes.large_image_sections.data[0].attributes.MainHeading)} <span class="visuallyhidden">M2</span>
								<figure class="image-pro-chip" data-anim-lazy-image></figure>
							</p>
							<p class="typography-body"><span data-pricing-product="ipad-pro" data-product-template="${price.display.from}"></span>{pages.attributes && (pages.attributes.large_image_sections.data[0].attributes.
PriceText)}</p>
							<a href="https://www.apple.com/us/shop/goto/ipad_pro/select" data-analytics-Discription="buy - ipad pro" aria-label="Buy iPad Pro" class="button">Buy</a>
							<p class="cta-wrap">
								<a href="https://www.apple.com/ipad-pro/" data-analytics-title="learn more - ipad pro" aria-label="Learn more about iPad Pro" class="icon-wrapper"><span class="icon-copy">Learn more</span><span class="icon icon-after more"></span></a> </p>
						</div>
					</div>
					<div class="img-col column large-9 medium-8 small-12">
						<figure class="image-ipad-pro" aria-label="iPad Pro with white Magic Keyboard and Apple Pencil displaying Stage Manager app sits slightly behind another iPad Pro with black Magic Keyboard showing wallpaper" role="img" data-anim-lazy-image></figure>
					</div>
				</div>
            </div>
  </section>   
  
}

export default LargeImageSection;