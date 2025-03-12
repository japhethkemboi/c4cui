"use client";
import React, { ReactNode, useState } from "react";
import { PiMagnifyingGlass, PiUser } from "react-icons/pi";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Button } from "../Button/Index";
import { InputComponent } from "../Input/Index";
import { useNav } from "./NavContext";

interface Header {
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  logo?: string;
  logoClassNames?: string;
  className?: string;
}

interface Item {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  link?: string;
  onClick?: () => void;
}

interface Profile {
  username: string;
  avatar?: string;
  link?: string;
  onAvatarClick?: () => void;
  onUsernameClick?: () => void;
}

export const Nav = ({
  header,
  items,
  profile,
  type,
  rightIcons,
  hideProfileIcon,
  hideSearchIcon,
  onSearch,
}: {
  header?: Header;
  items?: Item[];
  profile?: Profile;
  type?: "xnav" | "ynav" | "responsive";
  rightIcons?: ReactNode[];
  hideProfileIcon?: boolean;
  hideSearchIcon?: boolean;
  onSearch?: () => void;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { query, setQuery, searchSuggestions, setSearchSuggestions } = useNav();

  return (
    <div
      className={classNames(
        "flex md:flex-col md:h-screen gap-8 p-4 justify-between bg-[var(--nav-bg-color)] text-[var(--nav-text-color)] shrink-0 border-r border-[var(--border-color)]",
        { "flex-row md:flex-row h-auto w-full": type === "xnav", "flex-col md:flex-col h-full w-auto": type === "ynav" }
      )}
    >
      <div className={classNames("flex flex-col h-full gap-4")}>
        {header && (
          <div className={twMerge(classNames("flex gap-2 items-center", header?.className))}>
            <Button
              onClick={() => setIsNavOpen(!isNavOpen)}
              icon={<BiMenuAltLeft size={24} />}
              outline={true}
              className="p-2 border-none md:hidden"
            />
            {header.logo && <img src={header?.logo} className={classNames(header?.logoClassNames, "size-10")} />}
            {header?.startIcon}
            <h1 className={classNames("font-semibold text-[var(--primary-color)]")}>{header?.title}</h1>
            {header?.endIcon}
          </div>
        )}
        <div className={classNames("hidden md:flex flex-col gap-4 w-full grow pt-8")}>
          <Button
            onClick={() => setIsNavOpen(false)}
            icon={<MdClose size={24} />}
            outline={true}
            className="p-2 border-none ml-auto md:hidden"
          />
          {items?.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              icon={item.icon}
              label={item.label}
              outline={!item.active}
              active={item.active}
              className="border-none justify-start w-full"
            />
          ))}
          {profile && (
            <div className="flex items-center shrink-0 gap-2 mt-auto">
              {profile.avatar ? (
                <img
                  onClick={profile.onAvatarClick}
                  src={profile.avatar}
                  className={classNames("size-6", { "cursor-pointer": profile.onAvatarClick })}
                />
              ) : (
                <p
                  onClick={profile.onAvatarClick}
                  className={classNames("rounded-full p-2 bg-[var(--primary-color)] text-[var(--bg-color)]", {
                    "cursor-pointer": profile.onAvatarClick,
                  })}
                >
                  <PiUser size={24} />
                </p>
              )}
              <p
                className={classNames({ "cursor-pointer": profile.onUsernameClick })}
                onClick={profile.onUsernameClick}
              >
                {profile.username}
              </p>
            </div>
          )}
        </div>
        {isNavOpen && (
          <div
            className={classNames("left-0 top-0 bottom-0 h-screen w-screen absolute z-20 flex", {
              "flex-col md:flex-col": type === "ynav",
              "flex-row md:flex-row": type === "xnav",
            })}
          >
            <div
              className={classNames(
                "flex flex-col gap-4 w-auto bg-[var(--nav-bg-color)] backdrop-blur shrink-0 border-r border-black/10 p-4"
              )}
            >
              <Button
                onClick={() => setIsNavOpen(false)}
                icon={<MdClose size={24} />}
                outline={true}
                className="p-2 border-none ml-auto md:hidden"
              />
              {items?.map((item, index) => (
                <Button
                  key={index}
                  onClick={item.onClick}
                  icon={item.icon}
                  label={item.label}
                  outline={!item.active}
                  active={item.active}
                  className="border-none justify-start w-full"
                />
              ))}
              {profile && (
                <div className="flex items-center shrink-0 gap-2 mt-auto">
                  {profile.avatar ? (
                    <img
                      onClick={profile.onAvatarClick}
                      src={profile.avatar}
                      className={classNames("size-6", { "cursor-pointer": profile.onAvatarClick })}
                    />
                  ) : (
                    <p
                      onClick={profile.onAvatarClick}
                      className={classNames("rounded-full p-2 bg-[var(--primary-color)] text-[var(--bg-color)]", {
                        "cursor-pointer": profile.onAvatarClick,
                      })}
                    >
                      <PiUser size={24} />
                    </p>
                  )}
                  <p
                    className={classNames({ "cursor-pointer": profile.onUsernameClick })}
                    onClick={profile.onUsernameClick}
                  >
                    {profile.username}
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex flex-col w-full h-full items-center justify-center p-4 bg-black/50 text-white/50"
              onClick={() => setIsNavOpen(false)}
            >
              <p>Close</p>
            </div>
          </div>
        )}
      </div>
      {profile || rightIcons ? (
        <div className="flex items-center shrink-0 gap-2 md:hidden">
          {rightIcons}
          {!hideSearchIcon && (
            <Button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              icon={<PiMagnifyingGlass size={24} />}
              outline={true}
              className="p-2 border-none rounded-full"
            />
          )}
          {!hideProfileIcon && profile?.avatar ? (
            <img
              className={classNames("size-8 rounded-full", { "cursor-pointer": profile.onAvatarClick })}
              onClick={profile.onAvatarClick}
              src={profile.avatar}
            />
          ) : (
            <p
              onClick={profile?.onAvatarClick}
              className={classNames("rounded-full p-2 bg-[var(--primary-color)] text-[var(--background-color)]", {
                "cursor-pointer": profile?.onAvatarClick,
              })}
            >
              <PiUser size={24} />
            </p>
          )}
        </div>
      ) : null}
      {isSearchOpen && (
        <div className={classNames("left-0 top-0 bottom-0 right-0 h-screen w-screen absolute z-20 flex flex-col")}>
          <div
            className={classNames(
              "flex w-full gap-4 bg-[var(--nav-bg-color)] backdrop-blur shrink-0 border-r border-black/10 p-4"
            )}
          >
            <InputComponent value={query} onChange={setQuery} type="search" />
            <Button
              onClick={() => {
                if (query && query.length > 0) {
                  setQuery("");
                } else {
                  setIsSearchOpen(false);
                }
              }}
              icon={<MdClose size={24} />}
              outline={true}
              className="p-2 border-none"
            />
          </div>
          {searchSuggestions && (
            <div className="flex flex-col gap-4 w-full p-4 pt-10 bg-[var(--nav-bg-color)]">{searchSuggestions}</div>
          )}
          <div
            className="flex flex-col w-full h-full items-center justify-center p-4 bg-black/50 text-white/50"
            onClick={() => setIsSearchOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};
