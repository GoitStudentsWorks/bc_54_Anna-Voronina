import currencyImgDesk from 'assets/images/currency_desk.png';
import currencyImgRetinaDesk from 'assets/images/currency_desk@2x.png';
import currencyImgTablet from 'assets/images/currency_tablet.png';
import currencyImgRetinaTablet from 'assets/images/currency_tablet@2x.png';
import currencyImgMobile from 'assets/images/currency_mobile.png';
import currencyImgRetinaMobile from 'assets/images/currency_mobile@2x.png';

import currencyImgDeskWebp from 'assets/images/currency_desk.webp';
import currencyImgRetinaDeskWebp from 'assets/images/currency_desk@2x.webp';
import currencyImgTabletWebp from 'assets/images/currency_tablet.webp';
import currencyImgRetinaTabletWebp from 'assets/images/currency_tablet@2x.webp';
import currencyImgMobileWebp from 'assets/images/currency_mobile.webp';
import currencyImgRetinaMobileWebp from 'assets/images/currency_mobile@2x.webp';

export const CurrencyChart = () => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyImgDeskWebp} 1x, ${currencyImgRetinaDeskWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyImgDesk} 1x, ${currencyImgRetinaDesk} 2x`}
          type="image/png"
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${currencyImgTabletWebp} 1x, ${currencyImgRetinaTabletWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${currencyImgTablet} 1x, ${currencyImgRetinaTablet} 2x`}
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcSet={`${currencyImgMobileWebp} 1x, ${currencyImgRetinaMobileWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${currencyImgMobile} 1x, ${currencyImgRetinaMobile} 2x`}
          type="image/png"
        />

        <img src={currencyImgDesk} alt="Currency rate" loading="lazy" />
      </picture>
    </div>
  );
};
