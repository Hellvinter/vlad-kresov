import { createGlobalStyle } from "styled-components";

const Grid = createGlobalStyle`
.grid__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 1fr, 30vh;
}

.grid-header {
    grid-column: 1 / 13;
    grid-row: 1 / 2;   
}

.grid-mainWrapper {
    grid-column: 1 / 13;
    grid-row: 2 / 5; 
}


.grid-navigation {
    grid-column: 12 / 13;
    grid-row: 2 / 3;  
}

.grid-profile {
    grid-column: 3 / 11 ;
    grid-row: 2 / 3;    
}

.grid-abilities {
    grid-column: 1 / 13;
    grid-row: 3 / 4;   
}

.grid-portfolioList {
    grid-column: 3 / 11;
    grid-row: 4 / 5;    
}

.grid-expirience {
    grid-column: 1 / 13;
    grid-row: 5 / 6;
}

.grid-footer {
    grid-column: 1 / 13; 
}
`;

export default Grid;
