import currencyImgDesk from 'assets/images/currency_desk.png';
import currencyImgRetinaDesk from 'assets/images/currency_desk@2x.png';
import currencyImgTablet from 'assets/images/currency_tablet.png';
import currencyImgRetinaTablet from 'assets/images/currency_tablet@2x.png';
import currencyImgMobile from 'assets/images/currency_mobile.png';
import currencyImgRetinaMobile from 'assets/images/currency_mobile@2x.png';

export const CurrencyChart = () => {
  return (
    <div>
      <picture>
        {/* <source
          media="(min-width: 1280px)"
        srcset={`${}`}
          type="image/webp"
        /> */}
        <source
          media="(min-width: 1280px)"
          srcset={`${currencyImgDesk} 1x, ${currencyImgRetinaDesk} 2x`}
          type="image/png"
        />

        {/* <source
          media="(min-width: 768px)"
          srcset={}
          type="image/webp"
        /> */}
        <source
          media="(max-width: 767px)"
          srcset={`${currencyImgTablet} 1x, ${currencyImgRetinaTablet} 2x`}
          type="image/png"
        />

        {/* <source
          media="(max-width: 767px)"
          srcset={}
          type="image/webp"
        /> */}
        <source
          media="(max-width: 767px)"
          srcset={`${currencyImgMobile} 1x, ${currencyImgRetinaMobile} 2x`}
          type="image/png"
        />

        <img src={currencyImgDesk} alt="Currency rate" loading="lazy" />
      </picture>
    </div>
  );
};
