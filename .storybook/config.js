import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { addParameters } from '@storybook/react'; // or others
import colors from '../src/config/colors';
import { create } from '@storybook/theming';

addParameters({
    options: {
      theme: create({
        base: 'light',
        brandTitle: 'Trezor UI Components',
        brandUrl: '#',
        // To control appearance:
        // brandImage: 'http://url.of/some.svg',
        mainBackground: colors.BACKGROUND,
            mainBorder: `1px solid ${colors.DIVIDER}`,
            mainFill: colors.WHITE,
            barFill: colors.GRAY_LIGHT,
            mainTextFace: 'Roboto',
            mainTextColor: colors.TEXT_PRIMARY,
            layoutMargin: 10,
            mainTextSize: 14,
            treeMenuHeader: {
                color: colors.TEXT_PRIMARY,
                lineHeight: '1.4rem',
            },
            menuLink: {
                color: colors.TEXT_SECONDARY,
                fontSize: '.9rem',
                lineHeight: '1.2rem',
                marginLeft: 0,
            },
            activeMenuLink: {
                color: colors.GREEN_PRIMARY,
                background: 'none',
            },
      }),
      isFullscreen: false,
      panelPosition: 'right',
    },
  });

function loadStories() {
    require('stories/components/text.js');
    require('stories/components/buttons.js');
    require('stories/components/form.js');
    require('stories/components/notifications.js');
    require('stories/components/modal.js');
    require('stories/components/other.js');
    require('stories/components/loader.js');
    require('stories/components/colors.js');
}

configure(loadStories, module);
