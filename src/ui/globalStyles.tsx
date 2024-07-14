import { createGlobalStyle } from 'styled-components';
import useCustomStyles from '@/ui/CustomStyles';
import { ThemeType } from '@/models/themes';
import { MenuStyles } from '@/ui/GlobalStyles/Menu';

const customStyles = useCustomStyles();

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`


    //  -------------- Import CSS files  ----------------
	${MenuStyles}

    //  -------------- Generic ----------------

  .footer-template {
    border-top: 1px solid ${() => customStyles.border};
  }

  //  ----------------------------------------- end of Generic -----------------------------------------
  //  -------------- ApexCharts ----------------

  .apexcharts-legend {
    right: 30px !important;
  }

  .apexCharts-tooltip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .color {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
    }

    .label {
      margin-right: 10px;
      color: ${() => customStyles.white};
      text-decoration: none;
    }

    .txt {
      font-weight: 600;
    }
  }

  .apexcharts-canvas {
    .apexcharts-menu {
      background: ${({ theme }) => theme.token.colorBgContainer};
      border: 1px solid ${() => customStyles.border};
    }

    .apexcharts-toolbar {
      .apexcharts-menu {
        .apexcharts-menu-item:hover {
          background: ${({ theme }) => theme.token.colorBgContainer};
        }
      }
    }
  }

  .apexcharts-legend-text {
    color: ${({ theme }) => theme.token.colorPrimaryBg};
    font: 12px 'Publica Sans', Verdana, sans-serif !important;
  }

  // -------------------- end of Apex Charts --------------------
`;
