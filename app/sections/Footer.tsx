import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col bg-background p-8 justify-center items-center text-onSurface gap-4">
        <div className="flex flex-col max-w-[80vw] gap-4">
          {" "}
          <h1 className="font-bold text-xl">
            فروشگاه اینترنتی قفلی، بررسی، انتخاب و خرید آنلاین
          </h1>
          <p>
            فروشگاه اینترنتی قفلی با هدف دسترسی آسان و فروش محصولات باکیفیت
            ایرانی و خارجی با ارزانترین قیمت فعالیت خود را آغاز کرد.
          </p>
        </div>
        <div className="w-full h-0.5 bg-white rounded-2xl"></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start gap-12 py-8">
          <div className="flex md:flex-1/3 gap-4 flex-col justify-center items-center">
            <div className="flex flex-row gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white hover:text-green-400 transition"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.995c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 .014 5.357.012 11.967c0 2.113.553 4.174 1.601 5.981L0 24l6.164-1.643a11.93 11.93 0 005.818 1.482h.005c6.613 0 11.972-5.357 11.974-11.967a11.89 11.89 0 00-3.493-8.606z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white hover:text-blue-400 transition"
                >
                  <path d="M12 0C5.371 0 0 5.371 0 12c0 6.629 5.371 12 12 12s12-5.371 12-12c0-6.629-5.371-12-12-12zm5.707 7.293l-2.122 10.607c-.161.765-.619.949-1.253.591l-3.453-2.548-1.666 1.606c-.184.184-.338.338-.693.338l.247-3.495 6.366-5.755c.277-.247-.06-.384-.43-.137l-7.872 4.957-3.389-1.059c-.737-.23-.751-.737.154-1.09l13.231-5.099c.616-.23 1.154.137.958 1.082z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white hover:text-pink-400 transition"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.058-1.366.316-2.45 1.283-3.417.967-.967 2.14-1.225 3.417-1.283C8.332 2.175 8.712 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
            <button>پرداخت سریع</button>
            <div className="grid grid-cols-2 gap-4">
              <h1>خدمات مشتریان</h1>
              <h1>راهنمای خرید</h1>
              <p>رویه ارسال سفارش</p>
              <p>تماس با قفل لند</p>
              <p>شیوه‌های پرداخت</p>
              <p>فروش در قفل لند</p>
            </div>
          </div>

          <div className="flex flex-1/3 gap-4 flex-col justify-center items-center">
            <h1 className="font-bold text-xl">آدرس</h1>
            <p>
              خیابان جمهوری بین خیابان باستان و خیابان اسکندری پلاک 1333 واحد 2
            </p>
            <Image
              className="rounded-2xl"
              src="https://ghofland.com/wp-content/uploads/2024/05/MAP.jpg"
              alt="map"
              width={150}
              height={150}
            />
          </div>

          <div className="flex flex-1/3 gap-4 flex-col justify-center items-center">
            <h1 className="font-bold text-xl">
              اگر سوالی دارید با ما تماس بگیرید
            </h1>
            <h1>تلفن: 02166910279 | موبایل: 09123260193</h1>
            <p>ساعت کاری از شنبه تا پنجشنبه 9 الی 18</p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Image
                src="https://ghofland.com/wp-content/uploads/2025/04/enamad.png?id=219126&Code=oW7E5SGrwOsRpRVcViGO"
                alt="torob"
                width={150}
                height={150}
                className="rounded-2xl bg-surface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-background p-4">
        کلیه حقوق متعلق به سایت فروشگاه اینترنتی قفلی می باشد.
      </div>
    </footer>
  );
};

export default Footer;
