import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

:root {
    --darkmodeElements: hsl(209, 23%, 22%);
    --darkmodeBackground: hsl(207, 26%, 17%);
    --lightmodeText: hsl(200, 15%, 8%);
    --lightmodeInput: hsl(0, 0%, 52%);
    --lightmodeBackground: hsl(0, 0%, 98%);
}

body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
}

`

export default GlobalStyles
