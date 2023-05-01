import styled from "styled-components";
import { Classes } from "@blueprintjs/core";
import { Text } from "design-system";

export const Wrapper = styled.div`
  flex-basis: calc(100% - ${(props) => props.theme.homePage.leftPane.width}px);
  padding: 30px 0 0 24px;
`;

export const HeaderWrapper = styled.div<{ margin?: string }>`
  margin-bottom: ${(props) => props.margin ?? `16px`};
`;

export const SettingsHeader = styled(Text)`
  margin-bottom: 0px;
`;

export const SettingsSubHeader = styled(Text)``;

export const SettingsFormWrapper = styled.div`
  /* 84px is the height of save bottom bar */
  height: calc(100vh - ${(props) => props.theme.homePage.header}px - 84px);
  overflow: auto;

  .openid_tag {
    .${Classes.TAG_REMOVE} {
      display: none;
    }
  }
`;

export const MaxWidthWrapper = styled.div`
  max-width: 30rem;
`;

export const BottomSpace = styled.div`
  height: ${(props) => props.theme.settings.footerHeight + 20}px;
`;

export const ContentWrapper = styled.div``;

export const LoaderContainer = styled.div`
  height: ${(props) => `calc(100vh - ${props.theme.smallHeaderHeight})`};
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const ContentBox = styled.div`
  border-radius: var(--ads-v2-border-radius);
  border-color: var(--ads-v2-color-border);

  .business-tag {
    width: fit-content;
  }
`;
