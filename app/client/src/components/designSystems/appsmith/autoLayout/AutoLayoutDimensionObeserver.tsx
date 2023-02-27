import { FLEXBOX_PADDING } from "constants/WidgetConstants";
import React, { useState } from "react";
import { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";

const SimpleContainer = styled.div`
  width: fit-content;
  &.fill-widget {
    width: 100%;
  }
`;

interface AutoLayoutDimensionObserverProps {
  onDimensionUpdate: (width: number, height: number) => void;
  // widgetProps: WidgetProps;
  width: number;
  height: number;
  isFillWidget: boolean;
  // TODO(aswathkk): Remove this since this is being only used for debuggind
  widgetName: string;
}

export default function AutoLayoutDimensionObserver(
  props: PropsWithChildren<AutoLayoutDimensionObserverProps>,
) {
  const { onDimensionUpdate } = props;
  const [currentDimension, setCurrentDimension] = useState({
    width: 0,
    height: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const height = entries[0].contentRect.height;
      if (width === 0 || height === 0) return;
      setCurrentDimension({ width, height });
      onDimensionUpdate(width, height);
    }),
  );

  useEffect(() => {
    if (currentDimension.width === 0 || currentDimension.height === 0) return;
    const widthDiff = Math.abs(
      props.width - 2 * FLEXBOX_PADDING - currentDimension.width,
    );
    const heightDiff = Math.abs(
      props.height - 2 * FLEXBOX_PADDING - currentDimension.height,
    );
    if (widthDiff > 2 || heightDiff > 2) {
      // console.log(
      //   "#### dimensionUpdateObserver",
      //   props.widgetName,
      //   "dWidth",
      //   widthDiff,
      //   "dHeight",
      //   heightDiff,
      //   currentDimension,
      // );
      onDimensionUpdate(currentDimension.width, currentDimension.height);
    }
  }, [
    props.width,
    props.height,
    currentDimension.width,
    currentDimension.height,
  ]);

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <SimpleContainer
      className={`auto-layout-dimension-observer ${
        props.isFillWidget ? "fill-widget" : ""
      }`}
      ref={ref}
    >
      {props.children}
    </SimpleContainer>
  );
}