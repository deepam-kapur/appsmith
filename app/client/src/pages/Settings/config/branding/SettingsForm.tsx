import React from "react";
import type {
  Control,
  FormState,
  UseFormReset,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormResetField,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { Button, Icon, Text, Tooltip } from "design-system";

import type { Inputs } from "./BrandingPage";
import {
  ADMIN_BRANDING_LOGO_REQUIREMENT,
  ADMIN_BRANDING_FAVICON_REQUIREMENT,
  ADMIN_BRANDING_COLOR_TOOLTIP_BACKGROUND,
  ADMIN_BRANDING_COLOR_TOOLTIP_FONT,
  ADMIN_BRANDING_COLOR_TOOLTIP_PRIMARY,
  ADMIN_BRANDING_COLOR_TOOLTIP_HOVER,
  ADMIN_BRANDING_COLOR_TOOLTIP_DISABLED,
  ADMIN_BRANDING_COLOR_TOOLTIP,
  createMessage,
} from "@appsmith/constants/messages";
import { ColorInput } from "pages/Settings/FormGroup/ColorInput";
import { ImageInput } from "pages/Settings/FormGroup/ImageInput";
import { logoImageValidator, faivconImageValidator } from "utils/BrandingUtils";
import { useBrandingForm } from "@appsmith/pages/AdminSettings/config/branding/useBrandingForm";
import AnalyticsUtil from "utils/AnalyticsUtil";

type SettingsFormProps = {
  disabled?: boolean;
  control: Control<Inputs, any>;
  formState: FormState<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  reset: UseFormReset<Inputs>;
  defaultValues: Inputs;
  setValue: UseFormSetValue<Inputs>;
  resetField: UseFormResetField<Inputs>;
  values: Inputs;
};

function SettingsForm(props: SettingsFormProps) {
  const { control, defaultValues, disabled, formState, handleSubmit } = props;
  const hasDirtyFields = Object.keys(formState.dirtyFields).length > 0;
  const { onSubmit } = useBrandingForm({
    dirtyFields: formState.dirtyFields,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-grow gap-4">
        {/* LOGO */}
        <div className="flex flex-col gap-2">
          <Text
            color="var(--ads-v2-color-fg-emphasis)"
            htmlFor="APPSMITH_BRAND_LOGO"
            kind="heading-s"
            renderAs="label"
          >
            Logo
          </Text>
          <Controller
            control={control}
            name="APPSMITH_BRAND_LOGO"
            render={({ field: { onChange, value } }) => (
              <ImageInput
                className="t--settings-brand-logo-input"
                defaultValue={defaultValues.APPSMITH_BRAND_LOGO}
                onChange={(e) => {
                  onChange && onChange(e);

                  AnalyticsUtil.logEvent("BRANDING_PROPERTY_UPDATE", {
                    propertyName: "logo",
                  });
                }}
                validate={logoImageValidator}
                value={value}
              />
            )}
          />
          <Text renderAs="p">
            {createMessage(ADMIN_BRANDING_LOGO_REQUIREMENT)}
          </Text>
        </div>

        {/* FAVICON */}
        <div className="flex flex-col gap-2">
          <Text
            color="var(--ads-v2-color-fg-emphasis)"
            htmlFor="APPSMITH_BRAND_FAVICON"
            kind="heading-s"
            renderAs="label"
          >
            Favicon
          </Text>
          <Controller
            control={control}
            name="APPSMITH_BRAND_FAVICON"
            render={({ field: { onChange, value } }) => (
              <ImageInput
                className="t--settings-brand-favicon-input"
                defaultValue={defaultValues.APPSMITH_BRAND_FAVICON}
                onChange={(e) => {
                  onChange && onChange(e);

                  AnalyticsUtil.logEvent("BRANDING_PROPERTY_UPDATE", {
                    propertyName: "favicon",
                  });
                }}
                validate={faivconImageValidator}
                value={value}
              />
            )}
          />
          <Text renderAs="p">
            {createMessage(ADMIN_BRANDING_FAVICON_REQUIREMENT)}
          </Text>
        </div>

        {/* COLOR */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Text
              color="var(--ads-v2-color-fg-emphasis)"
              htmlFor="APPSMITH_BRAND_PRIMARY_COLOR"
              kind="heading-s"
              renderAs="label"
            >
              Color
            </Text>
            <Tooltip content={createMessage(ADMIN_BRANDING_COLOR_TOOLTIP)}>
              <Icon name="question-fill" size="md" />
            </Tooltip>
          </div>

          <Controller
            control={control}
            name="brandColors"
            render={({ field: { onChange, value } }) => (
              <ColorInput
                className="t--settings-brand-color-input"
                defaultValue={defaultValues.brandColors}
                filter={(key) => !["disabled", "hover"].includes(key)}
                logEvent={(property: string) => {
                  AnalyticsUtil.logEvent("BRANDING_PROPERTY_UPDATE", {
                    propertyName: property,
                  });
                }}
                onChange={onChange}
                tooltips={{
                  primary: createMessage(ADMIN_BRANDING_COLOR_TOOLTIP_PRIMARY),
                  background: createMessage(
                    ADMIN_BRANDING_COLOR_TOOLTIP_BACKGROUND,
                  ),
                  hover: createMessage(ADMIN_BRANDING_COLOR_TOOLTIP_HOVER),
                  font: createMessage(ADMIN_BRANDING_COLOR_TOOLTIP_FONT),
                  disabled: createMessage(
                    ADMIN_BRANDING_COLOR_TOOLTIP_DISABLED,
                  ),
                }}
                value={value}
              />
            )}
          />
        </div>

        <Button
          isDisabled={disabled || !hasDirtyFields}
          size="md"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default SettingsForm;
