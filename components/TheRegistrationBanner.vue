<template>
    <div class="the-registration-banner">
        <div class="the-registration-banner__container">
            <div class="the-registration-banner__info">
                <h2 class="the-registration-banner__title">
                    Регистрация в doclub
                </h2>
                <p class="the-registration-banner__label">Присоединяйся</p>
                <button class="the-registration-banner__button">
                    <p class="the-registration-banner__button-label">
                        Отправить заявку
                    </p>
                </button>
            </div>
            <img
                class="the-registration-banner__ellipse the-registration-banner__ellipse--red"
                src="@/assets/images/registration-banner/ellipse-red.svg"
                alt="ellipse-red"
            />
            <img
                class="the-registration-banner__ellipse the-registration-banner__ellipse--blue"
                src="@/assets/images/registration-banner/ellipse-blue.svg"
                alt="ellipse-blue"
            />
            <img
                class="the-registration-banner__phone the-registration-banner__phone--one"
                src="@/assets/images/registration-banner/phone-one.svg"
                alt="iphone-13"
            />
            <img
                class="the-registration-banner__phone the-registration-banner__phone--two"
                src="@/assets/images/registration-banner/phone-two.svg"
                alt="iphone-13"
            />
        </div>
        <img
            class="the-registration-banner__ellipse the-registration-banner__ellipse--blue-mobile"
            src="@/assets/images/registration-banner/ellipse-blue.svg"
            alt="ellipse-blue"
        />
    </div>
</template>

<style lang="scss">
.the-registration-banner {
    background: #2c307e;

    .the-registration-banner__container {
        @include container-full;
        padding: 80px 0 65px 0;
        position: relative;
    }

    .the-registration-banner__title {
        font-family: $roboto-medium;
        font-size: 34px;
        line-height: 41px;
        letter-spacing: 0.374px;
        color: #ffffff;
    }

    .the-registration-banner__label {
        font-family: $roboto-regular;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        margin-top: 17px;
    }

    .the-registration-banner__button {
        margin-top: 55px;
        padding: 18px 68px;
        background: #f3f4f7;
        border-radius: 12px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .the-registration-banner__button-label {
        font-family: $roboto-medium;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }

    .the-registration-banner__ellipse {
        position: absolute;

        &.the-registration-banner__ellipse--red {
            top: 57px;
            left: 423px;
        }

        &.the-registration-banner__ellipse--blue {
            bottom: 0;
            right: 0;
        }

        &.the-registration-banner__ellipse--blue-mobile {
            display: none;
        }
    }

    .the-registration-banner__phone {
        bottom: 0;
        position: absolute;

        &.the-registration-banner__phone--one {
            left: 405px;
            z-index: 100;
        }

        &.the-registration-banner__phone--two {
            right: 120px;
            z-index: 99;
        }
    }
}

@media screen and (max-width: 768px) {
    .the-registration-banner {
        position: relative;
        overflow: hidden;

        .the-registration-banner__container {
            padding: 24px 0 212px 0;
            overflow-y: hidden;
        }

        .the-registration-banner__info {
            text-align: center;
        }

        .the-registration-banner__title {
            font-size: 28px;
            line-height: 34px;
        }

        .the-registration-banner__label {
            font-size: 16px;
            line-height: 20px;
            margin-top: 12px;
        }

        .the-registration-banner__button {
            padding: 18px 116px;
            margin-top: 24px;
        }

        .the-registration-banner__ellipse {
            &.the-registration-banner__ellipse--red {
                left: 0;
                top: 267px;
                width: 104px;
            }

            &.the-registration-banner__ellipse--blue {
                display: none;
            }

            &.the-registration-banner__ellipse--blue-mobile {
                bottom: -50px;
                right: -30px;
                width: 195px;
                display: block;
            }
        }

        .the-registration-banner__phone {
            &.the-registration-banner__phone--one {
                left: 0;
                bottom: -40px;
                width: 245px;
            }

            &.the-registration-banner__phone--two {
                right: 20px;
                width: 195px;
                bottom: -42px;
            }
        }
    }
}
</style>
