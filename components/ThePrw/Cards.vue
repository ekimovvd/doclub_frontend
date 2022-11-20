<template>
    <div class="the-prw-cards">
        <div class="the-prw-cards__container">
            <div class="the-prw-cards__card">
                <div class="the-prw-cards__header">
                    <h4 class="the-prw-cards__header-title">Образование</h4>
                    <p class="the-prw-cards__header-label">
                        Андижанский государственный медицинский институт —
                        г.Андижан
                    </p>
                </div>
                <div class="the-prw-cards__footer">
                    <h6 class="the-prw-cards__footer-title">
                        Кафедра хирургических болезней
                    </h6>
                    <p class="the-prw-cards__footer-label">
                        Курсы анестезиологии и реаниматологии, скорой
                        медицинской помощи и урологии
                    </p>
                </div>
            </div>
            <div class="the-prw-cards__card">
                <div class="the-prw-cards__header">
                    <h4 class="the-prw-cards__header-title">Организация</h4>
                    <p class="the-prw-cards__header-label">
                        Республиканский специализированный научно-практический
                        центр кардиологии.
                    </p>
                </div>
                <div class="the-prw-cards__footer">
                    <h6 class="the-prw-cards__footer-title">
                        Адрес организации
                    </h6>
                    <p class="the-prw-cards__footer-label">
                        Ул. Кары-Ниязи, 4, Ташкент
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.the-prw-cards {
    background: #ffffff;
    padding-bottom: 48px;

    .the-prw-cards__container {
        @include container-medium;
        display: flex;
        justify-content: space-between;
    }

    .the-prw-cards__card {
        background: #f8f9fb;
        border: 1px solid #e8e8ee;
        border-radius: 16px;
        padding: 32px 32px 24px 32px;
        width: 370px;
        display: flex;
        flex-direction: column;
        grid-row-gap: 24px;
    }

    .the-prw-cards__header-title {
        font-family: $roboto-medium;
        line-height: 24px;
        letter-spacing: 0.35px;
        color: #000000;
    }

    .the-prw-cards__header-label {
        font-family: $roboto-regular;
        font-size: 16px;
        line-height: 20px;
        color: #676872;
        margin-top: 24px;
    }

    .the-prw-cards__footer-title {
        font-family: $roboto-medium;
        line-height: 20px;
        color: #000000;
    }

    .the-prw-cards__footer-label {
        font-family: $roboto-regular;
        line-height: 20px;
        color: #676872;
        margin-top: 8px;
    }
}

@media screen and (max-width: 768px) {
    .the-prw-cards {
        padding-bottom: 40px;

        .the-prw-cards__container {
            flex-direction: column;
            grid-column-gap: 0;
            grid-row-gap: 12px;
        }

        .the-prw-cards__card {
            padding: 32px;
        }
    }
}
</style>
