<template>
    <div class="the-prw-profile">
        <div class="the-prw-profile__container">
            <img
                class="the-prw-profile__avatar"
                src="@/assets/images/prw/avatar.svg"
                alt="avatar"
            />
            <div class="the-prw-profile__info">
                <h2 class="the-prw-profile__info-title">
                    Сагатова Халида Махмудовна
                </h2>
                <p class="the-prw-profile__info-label">Врач-Кардиолог</p>
            </div>
            <div class="the-prw-profile__group">
                <ul class="the-prw-profile__links">
                    <li class="the-prw-profile__link">
                        <a
                            class="the-prw-profile__link-label the-prw-profile__link-label--telegram"
                            href="#"
                        >
                            <img
                                class="the-prw-profile__link-svg"
                                src="@/assets/images/prw/telegram.svg"
                                alt="telegram"
                            />
                        </a>
                    </li>
                    <li class="the-prw-profile__link">
                        <a
                            class="the-prw-profile__link-label the-prw-profile__link-label--whatsapp"
                            href="#"
                        >
                            <img
                                class="the-prw-profile__link-svg"
                                src="@/assets/images/prw/whatsapp.svg"
                                alt="whatsapp"
                            />
                        </a>
                    </li>
                    <li class="the-prw-profile__link">
                        <a
                            class="the-prw-profile__link-label the-prw-profile__link-label--facebook"
                            href="#"
                        >
                            <img
                                class="the-prw-profile__link-svg"
                                src="@/assets/images/prw/facebook.svg"
                                alt="facebook"
                            />
                        </a>
                    </li>
                </ul>
                <div class="the-prw-profile__description">
                    <p class="the-prw-profile__description-label">
                        Занимаюсь диагностикой и лечением заболеваний
                        сердечнососудистой системы, дыхательной системы,
                        инфекционных заболеваний, в том числе бронхита,
                        ветрянки, простуды, ОРЗ и ОРВИ, краснухи, пищевого
                        отравления и др. Кандидат медицинских наук.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.the-prw-profile {
    position: relative;
    background: #ffffff;
    padding: 148px 0 32px 0;
    font-family: "Roboto", sans-serif;

    &__container {
        @include container-medium;
    }

    &__avatar {
        position: absolute;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        width: 200px;
        height: 200px;
    }

    .the-prw-profile__info {
        text-align: center;
        width: 470px;
        margin: 0 auto;
    }

    .the-prw-profile__info-title {
        font-weight: 700;
        line-height: 41px;
        letter-spacing: 0.374px;
        color: #000000;
    }

    .the-prw-profile__info-label {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.38px;
        color: #676872;
        margin-top: 12px;
    }

    .the-prw-profile__group {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .the-prw-profile__links {
        display: flex;
        align-items: center;
        grid-column-gap: 28px;
    }

    .the-prw-profile__link-label {
        background: #2c307e;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.the-prw-profile__link-label--facebook {
            align-items: flex-end;
        }
    }

    .the-prw-profile__description {
        margin-top: 32px;
        width: 470px;
    }

    .the-prw-profile__description-label {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #676872;
    }
}

@media screen and (max-width: 768px) {
    .the-prw-profile {
        padding: 110px 0 40px 0;

        .the-prw-profile__avatar {
            width: 140px;
            height: 140px;
            top: -70px;
        }

        .the-prw-profile__info {
            width: 100%;
        }

        .the-prw-profile__info-title {
            font-size: 28px;
            line-height: 34px;
        }

        .the-prw-profile__info-label {
            font-size: 16px;
            line-height: 20px;
        }

        .the-prw-profile__group {
            margin-top: 24px;
        }

        .the-prw-profile__link-label {
            width: 56px;
            height: 56px;
        }

        .the-prw-profile__description {
            margin-top: 24px;
            width: 100%;
        }

        .the-prw-profile__description-label {
            font-size: 16px;
            line-height: 20px;
        }
    }
}
</style>
