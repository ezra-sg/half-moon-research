<div class="c-nav">
    <div class="c-nav__hamburger-container">
        <div class="c-nav__hamburger-line"></div>
        <div class="c-nav__hamburger-line"></div>
        <div class="c-nav__hamburger-line"></div>
    </div>
</div>

<style lang="scss">
.c-nav {
    &__hamburger-container {
        padding: 14px;
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 48px;
        width: 48px;
        cursor: pointer;
    }

    &__hamburger-line {
        height: 2px;
        width: 100%;
        background-color: #000;
    }
}
</style>
