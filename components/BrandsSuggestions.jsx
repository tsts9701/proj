function BrandsSuggestions () {
    return (
        <div className="brands-suggestions-wrapper">
            <div class="kros" style={{backgroundImage: "url('/nikeBackground.jpg')"}}>
                <a href="/search?query=nike">
                    <img src="/nikeLogo.png" />
                    <div class="knpktest">
                        <p>Перейти</p>
                    </div>
                </a>
                <p><a href="https://obuvnoymarket.com.ua/category/obuv/krossovki/krossovki-nike/"></a></p>
            </div>
            <div class="kros" style={{backgroundImage: "url('adidasBackground.jpg')"}}>
                <a href="/search?query=adidas">
                    <img src="/adidasLogo.png" />
                    <div class="knpktest">
                        <p>Перейти</p>
                    </div>
                </a>
                <p><a href="https://obuvnoymarket.com.ua/category/obuv/krossovki/krossovki-nike/"></a></p>
            </div>
            <div class="kros" style={{backgroundImage: "url('pumaBackground.jpg')"}}>
                <a href="/search?query=puma">
                    <img src="/pumaLogo.png" />
                    <div class="knpktest">
                        <p>Перейти</p>
                    </div>
                </a>
                <p><a href="https://obuvnoymarket.com.ua/category/obuv/krossovki/krossovki-nike/"></a></p>
            </div>
            <div class="kros" style={{backgroundImage: "url('newbalanceBackground.jpg')"}}>
                <a href="/search?query=new balance">
                    <img src="/newbalanceLogo.jpg" />
                    <div class="knpktest">
                        <p>Перейти</p>
                    </div>
                </a>
                <p><a href="https://obuvnoymarket.com.ua/category/obuv/krossovki/krossovki-nike/"></a></p>
            </div>
        </div>
    )
}

export default BrandsSuggestions;