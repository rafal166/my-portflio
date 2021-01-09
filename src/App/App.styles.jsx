import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root{
		font-size: 15px;
	}

	*{
		box-sizing: border-box;
	}

	body{
		margin: 0;
		padding: 0;
		background-color: ${({ theme }) => theme.secondaryBg};

	}

	main{
		margin-left: 5rem
	}

	@media only screen and (max-width: 600px) {
		main{
			margin: 0;
		}
    }
`;
