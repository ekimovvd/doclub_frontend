<template>
    <div class="the-prw-certificate">
        <div class="the-prw-certificate__container">
            <h2 class="the-prw-certificate__title">Сертификаты</h2>
            <div class="the-prw-certificate__slider">
                <Splide
                    class="the-prw-certificate__slider-carousel"
                    :options="options"
                >
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-1.png"
                            alt="certificate-1"
                        />
                    </SplideSlide>
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-2.png"
                            alt="certificate-2"
                        />
                    </SplideSlide>
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-3.png"
                            alt="certificate-3"
                        />
                    </SplideSlide>
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-1.png"
                            alt="certificate-1"
                        />
                    </SplideSlide>
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-2.png"
                            alt="certificate-2"
                        />
                    </SplideSlide>
                    <SplideSlide class="the-prw-certificate__slider-slide">
                        <img
                            class="the-prw-certificate__slider-img"
                            src="@/assets/images/prw/certificate-3.png"
                            alt="certificate-3"
                        />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default defineComponent({
    setup() {
        const options = {
            rewind: true,
            pagination: false,
            perPage: 3,
            width: "570px",
            fixedWidth: "170px",
            gap: "30px",
            arrowPath:
                "M 13.820312 8.820312 C 14.472656 8.171875 15.527344 8.171875 16.179688 8.820312 L 26.179688 18.820312 C 26.828125 19.472656 26.828125 20.527344 26.179688 21.179688 L 16.179688 31.179688 C 15.527344 31.828125 14.472656 31.828125 13.820312 31.179688 C 13.171875 30.527344 13.171875 29.472656 13.820312 28.820312 L 22.644531 20 L 13.820312 11.179688 C 13.171875 10.527344 13.171875 9.472656 13.820312 8.820312 Z M 13.820312 8.820312",
        };

        return {
            options,
        };
    },
});
</script>

<style lang="scss">
.the-prw-certificate {
    background: #f8f9fb;
    border-top: 1px solid #e8e8ee;
    padding: 80px 0 155px 0;

    .the-prw-certificate__container {
        @include container-medium;
    }

    .the-prw-certificate__title {
        font-family: $roboto-medium;
        text-align: center;
        font-size: 34px;
        line-height: 41px;
        letter-spacing: 0.374px;
        color: #000000;
    }

    .the-prw-certificate__slider {
        margin: 30px auto 0 auto;
    }

    .the-prw-certificate__slider-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .the-prw-certificate__slider-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .splide__arrow {
        width: 40px;
        height: 40px;
        background: #ffffff;
        opacity: 1;

        &.splide__arrow--prev {
            left: -60px;

            svg {
                margin-right: 3px;
            }
        }

        &.splide__arrow--next {
            right: -60px;

            svg {
                margin-left: 3px;
            }
        }

        svg {
            width: 25px;
            height: 25px;
        }
    }
}

@media screen and (max-width: 768px) {
    .the-prw-certificate {
        padding: 40px 0 104px 0;

        .the-prw-certificate__title {
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.38px;
        }

        .the-prw-certificate__slider {
            margin-top: 24px;
        }
    }
}
</style>
