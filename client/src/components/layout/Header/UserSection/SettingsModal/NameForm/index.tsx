import { FC, useState } from "react";
import Button from "@components/shared/Form/Button";
import TextField from "@components/shared/Form/TextField";
import useTranslation from "next-translate/useTranslation";
import { updateUsername } from "@services/userService";
import { mutate } from "swr";
import { toast } from "react-toastify";
import { USER_KEY, useUser } from "@hooks/useUser";
import { useFormik } from "formik";
import { nameUpdateSchema } from "@schemas";

interface NameFormProps {}

const NameForm: FC<NameFormProps> = () => {
  const { t } = useTranslation("layout");
  const { data: user } = useUser(true);
  const [updatingName, setUpdatingName] = useState(false);

  const handleNameUpdate = async (values: { name: string }) => {
    setUpdatingName(true);
    mutate(USER_KEY, async () => {
      try {
        await updateUsername(values);
        toast.success(t("success"));
      } catch {
        toast.error(t("error"));
      }
      setUpdatingName(false);
    });
  };

  const formik = useFormik({
    initialValues: { name: user?.name || "" },
    validateOnChange: false,
    validationSchema: () => nameUpdateSchema(t),
    enableReinitialize: true,
    onSubmit: (values) => {
      handleNameUpdate(values);
    },
  });

  return (
    <form
      className="section w-full flex flex-col text-xl"
      onSubmit={formik.handleSubmit}
    >
      <div className="mt-3 mb-4 font-semibold">{t("update_name")}</div>
      <TextField
        name="name"
        placeholder={t("name")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
      />
      <Button
        loading={updatingName}
        type="submit"
        color="secondary"
        className="ml-auto"
      >
        {t("update")}
      </Button>
    </form>
  );
};

export default NameForm;
