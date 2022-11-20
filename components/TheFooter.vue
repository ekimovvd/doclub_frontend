<template>
    <div class="the-footer">
        <div class="the-footer__container">
            <div class="the-footer__logo">
                <img
                    class="the-footer__logo-svg"
                    src="@/assets/images/footer/logo.svg"
                    alt="doclub"
                />
                <p class="the-footer__logo-label">
                    ООО DOCLUB-TV Ташкент, Узбекистан 2022
                </p>
            </div>
            <div class="the-footer__platforms">
                <h6 class="the-footer__title">Платформы</h6>
                <div class="the-footer__apps">
                    <a class="the-footer__apps-link" href="#">
                        <img
                            class="the-footer__apps-svg"
                            src="@/assets/images/footer/app-store.svg"
                            alt="App Store"
                        />
                    </a>
                    <a class="the-footer__apps-link" href="#">
                        <img
                            class="the-footer__apps-svg"
                            src="@/assets/images/footer/google-play.svg"
                            alt="Google Play"
                        />
                    </a>
                </div>
                <div class="the-footer__bot">
                    <p class="the-footer__bot-label">Бот в Telegram</p>
                    <a class="the-footer__bot-link" href="#">Добавить себе</a>
                </div>
            </div>
            <div class="the-footer__other">
                <h6 class="the-footer__title">Партнерам и юристам</h6>
                <ul class="the-footer__links">
                    <li class="the-footer__link">
                        <NuxtLink class="the-footer__link-label" to="/">
                            Сотрудничество
                        </NuxtLink>
                    </li>
                    <li class="the-footer__link">
                        <NuxtLink class="the-footer__link-label" to="/">
                            Пользовательское соглашение
                        </NuxtLink>
                    </li>
                    <li class="the-footer__link">
                        <NuxtLink class="the-footer__link-label" to="/">
                            Использование куки
                        </NuxtLink>
                    </li>
                    <li class="the-footer__link">
                        <NuxtLink class="the-footer__link-label" to="/">
                            Комплайнс
                        </NuxtLink>
                    </li>
                    <li class="the-footer__link">
                        <NuxtLink class="the-footer__link-label" to="/">
                            Сообщить об ошибке
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.the-footer {
    padding: 64px 0px;
    background: #f8f9fb;
    border-top: 1px solid #e8e8ee;
    font-family: "Roboto", sans-serif;

    .the-footer__container {
        @include container-full;
        display: flex;
        grid-column-gap: 81px;
    }

    .the-footer__logo {
        display: flex;
        flex-direction: column;
        grid-row-gap: 24px;
        width: 220px;
    }

    .the-footer__logo-label {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #676f7e;
    }

    .the-footer__title {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #000000;
    }

    .the-footer__platforms {
        display: flex;
        flex-direction: column;
        grid-row-gap: 24px;
    }

    .the-footer__apps {
        display: flex;
        align-items: center;
        grid-column-gap: 8px;
    }

    .the-footer__bot {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.2px;
    }

    .the-footer__bot-label {
        color: #000000;
    }

    .the-footer__bot-link {
        text-decoration: underline;
        color: #676f7e;
        margin-top: 12px;
    }

    .the-footer__other {
        display: flex;
        flex-direction: column;
        grid-row-gap: 24px;
    }

    .the-footer__links {
        display: flex;
        flex-direction: column;
        grid-row-gap: 12px;
    }

    .the-footer__link-label {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.2px;
        text-decoration: underline;
        color: #676f7e;
    }
}

@media screen and (max-width: 768px) {
    .the-footer {
        padding: 30px 0 32px 0;

        .the-footer__container {
            grid-column-gap: 0;
            grid-row-gap: 32px;
            flex-direction: column;
        }

        .the-footer__logo {
            width: 100%;
            text-align: center;
            grid-column-gap: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid #e8e8ee;
        }

        .the-footer__logo-svg {
            width: 156px;
            margin: 0 auto;
        }

        .the-footer__logo-label {
            font-size: 12px;
        }

        .the-footer__platforms {
            align-items: center;
            padding-bottom: 32px;
            border-bottom: 1px solid #e8e8ee;
        }

        .the-footer__title {
            font-size: 14px;
            line-height: 16px;
        }

        .the-footer__apps {
            grid-column-gap: 0;
            grid-row-gap: 8px;
            flex-direction: column;
            align-items: flex-start;
        }

        .the-footer__other {
            text-align: center;
        }
    }
}
</style>
