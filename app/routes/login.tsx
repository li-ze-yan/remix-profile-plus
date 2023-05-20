import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import { motion } from "framer-motion";
import { EarthCanvas, DarkStars } from "~/components";
import { baseStyles } from "~/constants";
import { fadeIn } from "~/utils/motion";
import { badRequest } from "~/utils/request.server";
import { createUserSession, login } from "~/utils/session.server";

export const meta: V2_MetaFunction = () => {
  const description =
    "Vector · Mandalorian - A blog website build by tkx.cool.";

  return [
    { name: "description", content: description },
    { name: "twitter:description", content: description },
    { title: "Vector · Mandalorian | Login" },
  ];
};

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const username: any = form.get("username");
  const email: any = form.get("email");
  const password: any = form.get("password");
  const redirectTo = "/dashboard";
  const fields = { username, email, password };
  const user = await login({ username, email, password });
  console.log({ user });
  if (!user) {
    return badRequest({
      fieldErrors: null,
      fields,
      formError: `fuck you, bitch !`,
    });
  }
  return createUserSession(user.id, redirectTo);
};

const Index = () => {
  return (
    <div
      className={classNames(
        "w-full h-screen relative z-0 bg-login-pattern bg-cover bg-center bg-no-repeat dark:opacity-90 opacity-95 bg-[#20232a]",
        baseStyles.paddingX
      )}
    >
      <div className={classNames("w-full h-full")}>
        <motion.div
          variants={fadeIn("", "", 0.1, 1.5)}
          initial="hidden"
          whileInView="show"
          className="w-full h-[50vh] flex items-center justify-center"
        >
          <EarthCanvas />
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1.5)}
          initial="hidden"
          whileInView="show"
          className="w-full flex items-center justify-center"
        >
          <form
            method="post"
            className="md:w-[40vw] w-full flex flex-col gap-5"
          >
            <input
              type="text"
              name="username"
              className={classNames(
                "w-full border-none  outline-none lg:px-10 px-5 lg:py-[0.8rem] py-[1.2rem] rounded-lg box-border ",
                baseStyles.baseText
              )}
            />
            <input
              type="email"
              name="email"
              className={classNames(
                "w-full border-none  outline-none lg:px-10 px-5 lg:py-[0.8rem] py-[1.2rem] rounded-lg box-border ",
                baseStyles.baseText
              )}
            />
            <input
              type="password"
              name="password"
              className={classNames(
                "w-full border-none  outline-none lg:px-10 px-5 lg:py-[0.8rem] py-[1.2rem] rounded-lg box-border ",
                baseStyles.baseText
              )}
            />
            <button
              type="submit"
              className={classNames(
                "w-full bg-[#4460f1] shadow-login-submit shadow-[#4460f1] hover:shadow-login-hover rounded-lg lg:py-[0.8rem] py-[1.2rem] text-white font-bold tracking-[5px] mt-5 transition-all duration-500 ease",
                baseStyles.baseText
              )}
            >
              登录
            </button>
          </form>
        </motion.div>
      </div>

      <DarkStars />
    </div>
  );
};

export default Index;
