<template>
    <div class="the-header">
        <div class="the-header__container">
            <img
                class="the-header__logo"
                src="@/assets/images/header/logo.svg"
                alt="doclub"
            />
        </div>
    </div>
</template>

<style lang="scss">
.the-header {
    background: #2c307e;
    padding: 32px 0 142px 0;

    &__container {
        @include container-full;
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width: 768px) {
    .the-header {
        padding: 11px 0 94px 0;
    }
}
</style>
