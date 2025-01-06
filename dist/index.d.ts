import React, { ReactNode, KeyboardEventHandler } from 'react';

declare const Button: ({ icon, label, onClick, disabled, outline, className, type, active, }: {
    icon?: ReactNode;
    label?: string;
    active?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;
    invert?: boolean;
    className?: string;
    type?: string;
}) => React.JSX.Element;

declare const InputComponent: ({ label, name, type, labelClasses, readOnly, value, onChange, inputClasses, placeholder, options, defaultValue, required, maxLength, minLength, maxNumber, minNumber, copyPassword, generatePassword, rows, suggestions, onSelectSuggestion, onKeyDown, multiple, step, onSearch, }: {
    label?: string;
    name?: string;
    type?: string;
    readOnly?: boolean;
    required?: boolean;
    options?: Array<{
        id: string;
        disabled?: boolean;
        value?: string;
        selected?: boolean;
    }>;
    labelClasses?: string;
    inputClasses?: string;
    placeholder?: string;
    defaultValue?: string;
    maxLength?: number;
    minLength?: number;
    value?: string;
    maxNumber?: number;
    minNumber?: number;
    step?: number;
    copyPassword?: boolean;
    generatePassword?: boolean;
    suggestions?: Array<{
        id: string;
        value?: string;
    }>;
    onSelectSuggestion?: (id: string) => void;
    multiple?: boolean;
    rows?: number;
    onChange?: (value: string) => void;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onSearch?: () => void;
}) => React.JSX.Element;

declare const RichTextEditor: ({ value, onChange }: {
    value: string;
    onChange: (value: string) => void;
}) => React.JSX.Element;

interface Header$1 {
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
interface Theme$1 {
    bgColor?: string;
    primaryColor?: string;
    textColor?: string;
    border?: boolean;
    borderStyle?: string;
    titleColor?: string;
}
declare const Nav: ({ header, items, profile, theme, type, rightIcons, hideProfileIcon, hideSearchIcon, onSearch, }: {
    header?: Header$1;
    items?: Item[];
    profile?: Profile;
    theme?: Theme$1;
    type?: "xnav" | "ynav" | "responsive";
    rightIcons?: ReactNode[];
    hideProfileIcon?: boolean;
    hideSearchIcon?: boolean;
    onSearch?: () => void;
}) => React.JSX.Element;

type NavContextType = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchSuggestions: ReactNode | null;
    setSearchSuggestions: React.Dispatch<React.SetStateAction<ReactNode | null>>;
};
declare const NavProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
declare const useNav: () => NavContextType;

interface Props {
    isOpen: boolean;
    children: ReactNode;
}
declare const Modal: React.MemoExoticComponent<({ isOpen, children }: Props) => React.JSX.Element | null>;

interface Theme {
    border?: boolean;
    borderStyle?: string;
    bgColor?: string;
    textColor?: string;
}
declare const Header: ({ title, back, children, theme, className, query, setQuery, }: {
    title?: string;
    back?: () => void;
    children?: ReactNode;
    theme?: Theme;
    className?: string;
    query?: string;
    setQuery?: (query: string) => void;
}) => React.JSX.Element;

interface ModalContextType {
    isOpen: boolean;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    modalContent: ReactNode | null;
}
declare const useModal: () => ModalContextType;
interface ModalProviderProps {
    children: ReactNode;
}
declare const ModalProvider: React.FC<ModalProviderProps>;

interface CropperContextType {
    image: string | undefined;
    setImage: (image: string | undefined) => void;
    zoom: number;
    setZoom: (zoom: number) => void;
    rotation: number;
    setRotation: (rotation: number) => void;
    crop: {
        x: number;
        y: number;
    };
    setCrop: (crop: {
        x: number;
        y: number;
    }) => void;
    croppedAreaPixels: {
        width: number;
        height: number;
    } | null;
    setCroppedAreaPixels: (area: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null) => void;
    onCropComplete: (croppedAreaPixels: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => void;
    getProcessedImage: () => Promise<File | undefined>;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
    handleRotateCw: () => void;
    handleRotateAntiCw: () => void;
    max_zoom: number;
    min_zoom: number;
    zoom_step: number;
    max_rotation: number;
    min_rotation: number;
    rotation_step: number;
    resetStates: () => void;
}
interface CropperProviderProps {
    children: ReactNode;
    max_zoom?: number;
    min_zoom?: number;
    zoom_step?: number;
    max_rotation?: number;
    min_rotation?: number;
    rotation_step?: number;
}
declare const CropperProvider: React.FC<CropperProviderProps>;
declare const useCropper: () => CropperContextType;

interface CropperModalContentProps {
    title: string;
    onComplete: () => void;
    handleClose: () => void;
}
declare const Cropper: React.FC<CropperModalContentProps>;

export { Button, Cropper, CropperProvider, Header, InputComponent, Modal, ModalProvider, Nav, NavProvider, RichTextEditor, useCropper, useModal, useNav };
