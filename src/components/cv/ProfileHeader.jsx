import { Github, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ProfileHeader({ profile }) {
  const contactItems = [
    {
      label: "Location",
      value: profile?.location,
      icon: MapPin,
      href: "",
    },
    {
      label: "Email",
      value: profile?.email,
      icon: Mail,
      href: profile?.email ? `mailto:${profile.email}` : "",
    },
    {
      label: "Phone (NG)",
      value: profile?.phoneNg,
      icon: Phone,
      href: profile?.phoneNg ? `tel:${profile.phoneNg}` : "",
    },
    {
      label: "WhatsApp (UK)",
      value: profile?.whatsAppUk,
      icon: MessageCircle,
      href: "",
    },
  ].filter((item) => item.value);

  return (
    <header className="border-b border-slate-200 pb-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {profile?.profileImage ? (
          <img
            src={profile.profileImage}
            alt={`${profile.fullName} profile`}
            className="h-36 w-28 rounded-xl border border-slate-300 object-cover object-[center_35%] shadow-sm"
          />
        ) : null}

        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[38px]">
              {profile?.fullName}
            </h1>
            <p className="mt-1 text-[14px] font-medium leading-snug text-blue-700 sm:text-[15px]">
              {profile?.title}
            </p>
          </div>

          <ul className="grid gap-x-4 gap-y-1.5 text-[12px] text-slate-600 sm:grid-cols-2">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-1.5">
                <item.icon size={13} className="mt-0.5 shrink-0 text-slate-500" />
                <span>
                  <span className="font-medium text-slate-700">{item.label}: </span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-blue-700">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </li>
            ))}
            {profile?.github ? (
              <li className="flex items-start gap-1.5 sm:col-span-2">
                <Github size={13} className="mt-0.5 shrink-0 text-slate-500" />
                <span>
                  <span className="font-medium text-slate-700">GitHub: </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline underline-offset-2 hover:no-underline"
                >
                  {profile.github}
                </a>
                </span>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
}
